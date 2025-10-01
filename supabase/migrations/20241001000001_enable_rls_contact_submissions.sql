-- Enable Row Level Security (RLS) on contact_submissions table
-- This addresses the security issue: "Table public.contact_submissions is public, but RLS has not been enabled"

-- Enable RLS on the contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to INSERT contact form submissions
-- This allows the public contact form to work while maintaining security
CREATE POLICY "Allow anonymous contact form submissions" ON public.contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow service role (server-side) to SELECT all records
-- This allows the application to read submissions for admin purposes
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

-- Optional: Create policy to allow authenticated admin users to manage submissions
-- Uncomment these lines if you have authenticated admin users
-- CREATE POLICY "Allow authenticated admin users to manage submissions" ON public.contact_submissions
--     FOR ALL
--     TO authenticated
--     USING (auth.jwt() ->> 'role' = 'admin')
--     WITH CHECK (auth.jwt() ->> 'role' = 'admin');