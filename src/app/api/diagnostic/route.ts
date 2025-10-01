import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json({
        status: "error",
        message: "Supabase not configured",
        env: {
          url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        }
      });
    }

    // Test database connection
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1);

    const { data: schemaData, error: schemaError } = await supabase
      .from('pg_tables')
      .select('tablename')
      .eq('schemaname', 'public')
      .in('tablename', ['contact_submissions', 'newsletter_subscriptions']);

    return NextResponse.json({
      status: "success",
      supabaseConnected: true,
      tables: {
        queryError: testError?.message || null,
        schemaError: schemaError?.message || null,
        availableTables: schemaData || [],
        testQueryResult: testData?.length || 0,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      status: "error", 
      message: "Database diagnostic failed",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}