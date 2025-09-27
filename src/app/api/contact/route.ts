import { Resend } from "resend";
import { ContactFormEmail } from "@/lib/email";
import { submitContactForm } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { contactSchema } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = contactSchema.parse(json);

    // Submit to Supabase
    const { success: dbSuccess, error: dbError } =
      await submitContactForm(body);
    if (!dbSuccess) throw dbError;

    // Generate both email templates
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
