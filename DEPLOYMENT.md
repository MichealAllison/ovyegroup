# OvyeGroup Deployment Guide

## Vercel Deployment Steps

### 1. Prepare for Deployment

```bash
# Build the project locally to check for errors
npm run build

# Test the production build
npm start
```

### 2. Deploy to Vercel

- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repository
- Import the OvyeGroup project
- Vercel will auto-detect Next.js settings

### 3. Environment Variables

Add these in Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY` (for email functionality)

### 4. Database Security Setup

Before going live, ensure Row Level Security (RLS) is enabled on your Supabase tables:

```bash
# Apply database security migrations
# See supabase/README.md for detailed instructions
```

Run the SQL migrations in `supabase/enable_rls_all_tables.sql` via your Supabase dashboard to secure the contact and newsletter tables.

### 4. Custom Domain Setup

1. In Vercel project settings → Domains
2. Add your Azure domain: `ovyegroup.com`
3. Update DNS records in Azure:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - Type: A
   - Name: @
   - Value: 76.76.19.61

### 5. WordPress Migration Options

#### Option A: Replace WordPress Completely

- Remove WordPress from Azure
- Point domain directly to Vercel

#### Option B: Keep WordPress as Subdomain

- Move WordPress to: `blog.ovyegroup.com`
- Main site on: `www.ovyegroup.com`

#### Option C: WordPress as Headless CMS

- Keep WordPress for content management
- Use WordPress API for blog posts
- Serve everything through Next.js

## Azure Static Web Apps Alternative

If you prefer to stay in Azure:

1. Create Azure Static Web App
2. Connect to GitHub repository
3. Use existing domain configuration

## Performance Considerations

- Vercel: Better for Next.js optimization
- Azure: Better for enterprise/existing infrastructure
- Both support custom domains and SSL
