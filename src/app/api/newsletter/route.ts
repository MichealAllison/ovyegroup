import { Resend } from "resend";
import { NewsletterWelcomeEmail } from "@/lib/email";
import { subscribeNewsletter } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/render";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return {
      error: new Error("Missing RESEND_API_KEY environment variable"),
    } as const;
  return { client: new Resend(apiKey) } as const;
}

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email } = subscribeSchema.parse(json);

    // Submit to Supabase
    const { success: dbSuccess, error: dbError } =
      await subscribeNewsletter(email);
    if (dbError) throw dbError;

    const resendInit = getResendClient();
    if ("error" in resendInit) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Subscribed, but email service is not configured (missing RESEND_API_KEY).",
          data: { subscription: dbSuccess },
          emailDisabled: true,
        },
        { status: 202 }
      );
    }
    const resend = resendInit.client;

    // Generate email HTML using React Email
    const html = await render(NewsletterWelcomeEmail({ email }));

    // Send confirmation email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "OvyeGroup Newsletter <newsletter@ovyegroup.com>",
      to: [email],
      subject: "Welcome to OvyeGroup Newsletter",
      html: html,
    });
    if (emailError) throw emailError;

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
      data: { subscription: dbSuccess, email: emailData },
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing newsletter subscription",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 400 }
    );
  }
}
