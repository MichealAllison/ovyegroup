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
    return {
      error: new Error("Missing RESEND_API_KEY environment variable"),
    } as const;
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
    console.error("Error details:", JSON.stringify(error, null, 2));

    // Provide more specific error information
    let errorMessage = "Error processing contact form";
    let errorDetails = "Unknown error";
    let fullError = null;

    if (error instanceof Error) {
      errorDetails = error.message;
      fullError = {
        name: error.name,
        message: error.message,
        stack: error.stack?.split('\n').slice(0, 5), // First 5 lines of stack
      };
    } else {
      errorDetails = String(error);
      fullError = error;
    }

    if (
      errorDetails.includes("relation") &&
      errorDetails.includes("does not exist")
    ) {
      errorMessage = "Database table not found - please check database setup";
    } else if (
      errorDetails.includes("permission denied") ||
      errorDetails.includes("RLS") ||
      errorDetails.includes("policy")
    ) {
      errorMessage = "Database access denied - please check RLS policies";
    } else if (errorDetails.includes("RESEND_API_KEY")) {
      errorMessage = "Email service configuration error";
    } else if (errorDetails.includes("duplicate key")) {
      errorMessage = "Duplicate entry - this submission may already exist";
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: errorDetails,
        fullError: fullError,
        debugInfo: {
          errorType:
            error instanceof Error ? error.constructor.name : typeof error,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 400 }
    );
  }
}
