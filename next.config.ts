import type { NextConfig } from "next";

// Do NOT expose RESEND_API_KEY to the client. Next.js automatically makes
// variables starting with NEXT_PUBLIC_ available to the browser. Keeping the
// secret only on the server prevents accidental leakage. Remove from env export.
const nextConfig: NextConfig = {};

export default nextConfig;
