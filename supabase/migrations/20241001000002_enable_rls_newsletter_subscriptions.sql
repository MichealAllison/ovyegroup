-- Enable Row Level Security (RLS) on newsletter_subscriptions table
-- This is a proactive security measure to prevent similar issues

-- Enable RLS on the newsletter_subscriptions table
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to INSERT newsletter subscriptions
-- This allows the public newsletter signup to work while maintaining security
CREATE POLICY "Allow anonymous newsletter subscriptions" ON public.newsletter_subscriptions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow service role (server-side) to SELECT all records
-- This allows the application to read subscriptions for admin purposes
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
-- This allows users to manage their own subscriptions
CREATE POLICY "Allow users to manage their own subscription" ON public.newsletter_subscriptions
    FOR UPDATE
    TO anon
    USING (email = current_setting('request.jwt.claims', true)::json ->> 'email')
    WITH CHECK (email = current_setting('request.jwt.claims', true)::json ->> 'email');