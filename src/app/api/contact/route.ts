import { Resend } from "resend";
import { ContactFormEmail } from "@/lib/email";
import { submitContactForm } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { contactSchema } from "@/types/contact";

// Lazily create a Resend client during the request so build does not fail if
// the environment variable is missing at build time (e.g. on Vercel preview).
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: new Error("Missing RESEND_API_KEY environment variable") } as const;
  }
  return { client: new Resend(apiKey) } as const;
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = contactSchema.parse(json);

    // Submit to Supabase
    const { success: dbSuccess, error: dbError } =
      await submitContactForm(body);
    if (!dbSuccess) throw dbError;

    // Prepare emails only if we have the API key
    const resendInit = getResendClient();
    if ("error" in resendInit) {
      // Still consider the form submission successful, but surface the email issue.
      return NextResponse.json(
        {
          success: true,
            message:
            "Form saved, but email service is not configured (missing RESEND_API_KEY).",
          data: { submission: dbSuccess },
          emailDisabled: true,
        },
        { status: 202 }
      );
    }
    const resend = resendInit.client;

    // Generate both email templates concurrently
    const [adminHtml, userHtml] = await Promise.all([
      render(ContactFormEmail.Admin(body)),
      render(ContactFormEmail.User(body)),
    ]);

    // Send admin notification email
    const { error: adminEmailError } = await resend.emails.send({
      from: "OvyeGroup Contact Form <support@ovyegroup.com>",
      to: ["support@ovyegroup.com"],
      replyTo: body.email,
      subject: `New Contact Form Submission: ${body.subject}`,
      html: adminHtml,
    });
    if (adminEmailError) throw adminEmailError;

    // Send confirmation email to user
    const { error: userEmailError } = await resend.emails.send({
      from: "OvyeGroup <support@ovyegroup.com>",
      to: [body.email],
      subject: "Thank You for Contacting OvyeGroup",
      html: userHtml,
    });
    if (userEmailError) throw userEmailError;

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      data: { submission: dbSuccess },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing contact form",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 400 }
    );
  }
}
