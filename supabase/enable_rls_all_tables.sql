-- Combined migration script to enable RLS on all tables
-- Run this in your Supabase SQL Editor or via psql

-- =====================================================
-- Enable RLS on contact_submissions table
-- =====================================================

-- Enable RLS on the contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to INSERT contact form submissions
CREATE POLICY "Allow anonymous contact form submissions" ON public.contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow service role (server-side) to SELECT all records
CREATE POLICY "Allow service role to read contact submissions" ON public.contact_submissions
    FOR SELECT
    TO service_role
    USING (true);

-- Create policy to allow service role to UPDATE records (for status changes, etc.)
CREATE POLICY "Allow service role to update contact submissions" ON public.contact_submissions
    FOR UPDATE
    TO service_role
    USING (true)
    WITH CHECK (true);

-- =====================================================
-- Enable RLS on newsletter_subscriptions table
-- =====================================================

-- Enable RLS on the newsletter_subscriptions table
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to INSERT newsletter subscriptions
CREATE POLICY "Allow anonymous newsletter subscriptions" ON public.newsletter_subscriptions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow service role (server-side) to SELECT all records
CREATE POLICY "Allow service role to read newsletter subscriptions" ON public.newsletter_subscriptions
    FOR SELECT
    TO service_role
    USING (true);

-- Create policy to allow service role to UPDATE records (for unsubscribes, status changes, etc.)
CREATE POLICY "Allow service role to update newsletter subscriptions" ON public.newsletter_subscriptions
    FOR UPDATE
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Create policy to allow users to unsubscribe using their email
CREATE POLICY "Allow users to manage their own subscription" ON public.newsletter_subscriptions
    FOR UPDATE
    TO anon
    USING (email = current_setting('request.jwt.claims', true)::json ->> 'email')
    WITH CHECK (email = current_setting('request.jwt.claims', true)::json ->> 'email');

-- =====================================================
-- Verification queries (optional - run to confirm)
-- =====================================================

-- Verify RLS is enabled
-- SELECT schemaname, tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE schemaname = 'public' 
-- AND tablename IN ('contact_submissions', 'newsletter_subscriptions');

-- List all policies
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
-- FROM pg_policies 
-- WHERE tablename IN ('contact_submissions', 'newsletter_subscriptions')
-- ORDER BY tablename, policyname;