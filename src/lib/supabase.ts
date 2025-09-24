import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Contact form submission function
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
          inquiry_type: data.inquiryType,
          created_at: new Date().toISOString(),
          status: "new",
        },
      ])
      .select();

    if (error) throw error;

    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error };
  }
}

// Newsletter subscription function
export async function subscribeNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        {
          email,
          subscribed_at: new Date().toISOString(),
          status: "active",
        },
      ])
      .select();

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, error };
  }
}
