-- Emergency RLS fix for contact_submissions table
-- Run this in Supabase SQL Editor to temporarily allow inserts

-- Option 1: Temporarily disable RLS (quick fix)
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Option 2: Drop and recreate policies (if Option 1 doesn't work)
-- DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON public.contact_submissions;
-- DROP POLICY IF EXISTS "Allow service role to read contact submissions" ON public.contact_submissions;
-- DROP POLICY IF EXISTS "Allow service role to update contact submissions" ON public.contact_submissions;

-- Recreate the policy with more permissive access
-- CREATE POLICY "Allow all inserts" ON public.contact_submissions FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow all selects" ON public.contact_submissions FOR SELECT USING (true);

-- Option 3: Check current policies (run this to see what policies exist)
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
-- FROM pg_policies 
-- WHERE tablename = 'contact_submissions';

-- After fixing the immediate issue, you can re-enable RLS later:
-- ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;