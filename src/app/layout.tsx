import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OvyeGroup - Leading African Conglomerate",
    template: "%s | OvyeGroup",
  },
  description:
    "OvyeGroup is a diversified African conglomerate providing innovative solutions across multiple industries. Building prosperity and empowering communities across Africa.",
  keywords: [
    "OvyeGroup",
    "African conglomerate",
    "business",
    "innovation",
    "Africa",
    "enterprise",
    "investment",
  ],
  authors: [{ name: "OvyeGroup" }],
  creator: "OvyeGroup",
  publisher: "OvyeGroup",
  metadataBase: new URL("https://ovyegroup.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ovyegroup.com",
    title: "OvyeGroup - Leading African Conglomerate",
    description:
      "OvyeGroup is a diversified African conglomerate providing innovative solutions across multiple industries.",
    siteName: "OvyeGroup",
  },
  twitter: {
    card: "summary_large_image",
    title: "OvyeGroup - Leading African Conglomerate",
    description:
      "OvyeGroup is a diversified African conglomerate providing innovative solutions across multiple industries.",
    creator: "@ovyegroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
