# Database Migrations

This directory contains SQL migration files for the OvyeGroup database schema.

## Security Updates

### Row Level Security (RLS) Implementation

We've implemented Row Level Security on all public tables to address security vulnerabilities:

1. **contact_submissions** - RLS enabled with policies for anonymous form submissions
2. **newsletter_subscriptions** - RLS enabled with policies for anonymous newsletter signups

## Applying Migrations

### Using Supabase CLI

If you have the Supabase CLI installed:

```bash
# Navigate to project root
cd /path/to/ovyegroup

# Apply migrations
supabase db push
```

### Manual Application via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of each migration file in order:
   - `20241001000001_enable_rls_contact_submissions.sql`
   - `20241001000002_enable_rls_newsletter_subscriptions.sql`
4. Execute each migration

### Using psql (if you have direct database access)

```bash
# Apply contact submissions RLS
psql -h your-host -U postgres -d your-database -f supabase/migrations/20241001000001_enable_rls_contact_submissions.sql

# Apply newsletter subscriptions RLS
psql -h your-host -U postgres -d your-database -f supabase/migrations/20241001000002_enable_rls_newsletter_subscriptions.sql
```

## Policy Overview

### Contact Submissions Table Policies

- **Anonymous INSERT**: Allows public contact form submissions
- **Service Role SELECT/UPDATE**: Allows backend to read and manage submissions
- **Admin Management**: Optional policy for authenticated admin users (commented out)

### Newsletter Subscriptions Table Policies

- **Anonymous INSERT**: Allows public newsletter signups
- **Service Role SELECT/UPDATE**: Allows backend to read and manage subscriptions
- **User Self-Management**: Allows users to update their own subscription status

## Security Benefits

- Prevents unauthorized access to sensitive form submission data
- Maintains functionality for public forms while securing the data
- Allows proper backend access for email processing and admin management
- Follows principle of least privilege

## Verification

After applying the migrations, you can verify RLS is enabled by running:

```sql
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('contact_submissions', 'newsletter_subscriptions');
```

Both tables should show `rowsecurity = true`.
