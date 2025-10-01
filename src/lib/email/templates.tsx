import type { ContactFormData } from "@/types/contact";
import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Img,
  Link,
  Button,
} from "@react-email/components";

export const ContactFormEmail = {
  User: (data: ContactFormData) => (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You - OvyeGroup</title>
      </Head>
      <Body style={modernStyles.body}>
        <Container style={modernStyles.container}>
          {/* Header with Logo */}
          <Section style={modernStyles.header}>
            <Img
              src="https://ovyegroup.com/images/ovglogo.png"
              alt="OvyeGroup"
              width="150"
              height="60"
              style={modernStyles.logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={modernStyles.mainContent}>
            <Heading style={modernStyles.title}>
              Thank You for Reaching Out!
            </Heading>
            
            <Text style={modernStyles.greeting}>
              Dear {data.firstName} {data.lastName},
            </Text>
            
            <Text style={modernStyles.paragraph}>
              We&apos;ve received your message and truly appreciate you taking the time to connect with us. 
              Your inquiry is important to us, and our team is already reviewing your submission.
            </Text>

            {/* Inquiry Summary Card */}
            <Section style={modernStyles.summaryCard}>
              <Heading as="h2" style={modernStyles.cardTitle}>
                Your Inquiry Summary
              </Heading>
              <Hr style={modernStyles.cardDivider} />
              
              <Text style={modernStyles.summaryItem}>
                <strong style={modernStyles.label}>Subject:</strong> {data.subject}
              </Text>
              <Text style={modernStyles.summaryItem}>
                <strong style={modernStyles.label}>Type:</strong> {data.inquiryType}
              </Text>
              <Text style={modernStyles.summaryItem}>
                <strong style={modernStyles.label}>Contact Email:</strong> {data.email}
              </Text>
              
              <Section style={modernStyles.messageBox}>
                <Text style={modernStyles.messageLabel}>Your Message:</Text>
                <Text style={modernStyles.messageText}>{data.message}</Text>
              </Section>
            </Section>

            {/* Response Timeline */}
            <Section style={modernStyles.timelineCard}>
              <Text style={modernStyles.timelineTitle}>
                ⏱️ What happens next?
              </Text>
              <Text style={modernStyles.timelineText}>
                Our team will review your inquiry and respond within <strong>24-48 hours</strong>. 
                For urgent matters, please call us directly at +234 1 234 5678.
              </Text>
            </Section>

            {/* CTA Section */}
            <Section style={modernStyles.ctaSection}>
              <Button
                href="https://ovyegroup.com/about"
                style={modernStyles.ctaButton}
              >
                Learn More About OvyeGroup
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={modernStyles.footer}>
            <Hr style={modernStyles.footerDivider} />
            <Text style={modernStyles.footerText}>
              <strong>OvyeGroup</strong><br />
              Victoria Island, Lagos, Nigeria<br />
              Phone: +234 1 234 5678 | Email: info@ovyegroup.com
            </Text>
            <Text style={modernStyles.footerLinks}>
              <Link href="https://ovyegroup.com" style={modernStyles.footerLink}>Website</Link> • 
              <Link href="https://ovyegroup.com/about" style={modernStyles.footerLink}>About</Link> • 
              <Link href="https://ovyegroup.com/contact" style={modernStyles.footerLink}>Contact</Link>
            </Text>
            <Text style={modernStyles.footerNote}>
              This email was sent because you submitted a contact form on our website. 
              If you have any questions, please reply to this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  ),
  Admin: (data: ContactFormData) => (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission - OvyeGroup</title>
      </Head>
      <Body style={modernStyles.body}>
        <Container style={modernStyles.container}>
          {/* Header */}
          <Section style={modernStyles.adminHeader}>
            <Img
              src="https://ovyegroup.com/images/blackovglogo.png"
              alt="OvyeGroup"
              width="120"
              height="48"
              style={modernStyles.adminLogo}
            />
            <Heading style={modernStyles.adminTitle}>
              🔔 New Contact Form Submission
            </Heading>
          </Section>

          {/* Contact Details Card */}
          <Section style={modernStyles.adminCard}>
            <Heading as="h2" style={modernStyles.adminCardTitle}>
              👤 Contact Information
            </Heading>
            <Hr style={modernStyles.cardDivider} />
            
            <Section style={modernStyles.contactGrid}>
              <Text style={modernStyles.adminField}>
                <strong style={modernStyles.adminLabel}>Full Name:</strong><br />
                {data.firstName} {data.lastName}
              </Text>
              <Text style={modernStyles.adminField}>
                <strong style={modernStyles.adminLabel}>Email:</strong><br />
                <Link href={`mailto:${data.email}`} style={modernStyles.emailLink}>
                  {data.email}
                </Link>
              </Text>
              <Text style={modernStyles.adminField}>
                <strong style={modernStyles.adminLabel}>Phone:</strong><br />
                <Link href={`tel:${data.phone}`} style={modernStyles.phoneLink}>
                  {data.phone}
                </Link>
              </Text>
              {data.company && (
                <Text style={modernStyles.adminField}>
                  <strong style={modernStyles.adminLabel}>Company:</strong><br />
                  {data.company}
                </Text>
              )}
              <Text style={modernStyles.adminField}>
                <strong style={modernStyles.adminLabel}>Inquiry Type:</strong><br />
                <span style={modernStyles.inquiryBadge}>
                  {data.inquiryType.charAt(0).toUpperCase() + data.inquiryType.slice(1)}
                </span>
              </Text>
            </Section>
          </Section>

          {/* Subject & Message Card */}
          <Section style={modernStyles.adminCard}>
            <Heading as="h2" style={modernStyles.adminCardTitle}>
              💬 Message Details
            </Heading>
            <Hr style={modernStyles.cardDivider} />
            
            <Text style={modernStyles.adminField}>
              <strong style={modernStyles.adminLabel}>Subject:</strong><br />
              <span style={modernStyles.subjectText}>{data.subject}</span>
            </Text>
            
            <Section style={modernStyles.adminMessageBox}>
              <Text style={modernStyles.adminLabel}>Message:</Text>
              <Text style={modernStyles.adminMessageText}>{data.message}</Text>
            </Section>
          </Section>

          {/* Action Buttons */}
          <Section style={modernStyles.adminActions}>
            <Button
              href={`mailto:${data.email}?subject=Re: ${data.subject}`}
              style={modernStyles.primaryButton}
            >
              📧 Reply to Customer
            </Button>
            <Button
              href="https://ovyegroup.com/admin/contacts"
              style={modernStyles.secondaryButton}
            >
              📊 View All Submissions
            </Button>
          </Section>

          {/* Footer */}
          <Section style={modernStyles.adminFooter}>
            <Hr style={modernStyles.footerDivider} />
            <Text style={modernStyles.adminFooterText}>
              <strong>OvyeGroup Admin Dashboard</strong><br />
              Submission received at: {new Date().toLocaleString()}<br />
              This notification was automatically generated.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  ),
};

export const NewsletterWelcomeEmail = ({ email }: { email: string }) => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to OvyeGroup Newsletter</title>
    </Head>
    <Body style={modernStyles.body}>
      <Container style={modernStyles.container}>
        {/* Header with Logo */}
        <Section style={modernStyles.header}>
          <Img
            src="https://ovyegroup.com/images/ovglogo.png"
            alt="OvyeGroup"
            width="150"
            height="60"
            style={modernStyles.logo}
          />
        </Section>

        {/* Main Content */}
        <Section style={modernStyles.mainContent}>
          <Heading style={modernStyles.title}>
            🎉 Welcome to OvyeGroup Newsletter!
          </Heading>
          
          <Text style={modernStyles.paragraph}>
            Thank you for subscribing to our newsletter! You&apos;re now part of our community and will be the first to know about:
          </Text>

          {/* Benefits List */}
          <Section style={modernStyles.benefitsCard}>
            <Text style={modernStyles.benefitItem}>
              🏢 <strong>Latest Projects & Developments</strong><br />
              Stay updated on our newest ventures across technology, real estate, and energy sectors.
            </Text>
            <Text style={modernStyles.benefitItem}>
              📈 <strong>Company News & Achievements</strong><br />
              Be the first to hear about our milestones, partnerships, and industry recognition.
            </Text>
            <Text style={modernStyles.benefitItem}>
              💡 <strong>Industry Insights & Trends</strong><br />
              Get exclusive analysis and perspectives from our leadership team.
            </Text>
            <Text style={modernStyles.benefitItem}>
              🤝 <strong>Investment Opportunities</strong><br />
              Learn about potential partnership and investment opportunities.
            </Text>
          </Section>

          {/* Subscription Confirmation */}
          <Section style={modernStyles.confirmationCard}>
            <Text style={modernStyles.confirmationTitle}>
              ✅ Subscription Confirmed
            </Text>
            <Text style={modernStyles.confirmationText}>
              <strong>Email:</strong> {email}<br />
              <strong>Subscribed:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Frequency:</strong> Monthly updates
            </Text>
          </Section>

          {/* CTA Section */}
          <Section style={modernStyles.ctaSection}>
            <Button
              href="https://ovyegroup.com"
              style={modernStyles.ctaButton}
            >
              Explore OvyeGroup
            </Button>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={modernStyles.footer}>
          <Hr style={modernStyles.footerDivider} />
          <Text style={modernStyles.footerText}>
            <strong>OvyeGroup</strong><br />
            Victoria Island, Lagos, Nigeria<br />
            Phone: +234 1 234 5678 | Email: newsletter@ovyegroup.com
          </Text>
          <Text style={modernStyles.footerLinks}>
            <Link href="https://ovyegroup.com" style={modernStyles.footerLink}>Website</Link> • 
            <Link href="https://ovyegroup.com/about" style={modernStyles.footerLink}>About</Link> • 
            <Link href="#" style={modernStyles.footerLink}>Unsubscribe</Link>
          </Text>
          <Text style={modernStyles.footerNote}>
            You received this email because you subscribed to our newsletter. 
            If you didn&apos;t subscribe or want to unsubscribe, please click the link above.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const modernStyles = {
  // Base styles
  body: {
    backgroundColor: "#f8fafc",
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    margin: "0",
    padding: "0",
    lineHeight: "1.6",
  },
  container: {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "600px",
  },

  // Header styles
  header: {
    backgroundColor: "#ffffff",
    padding: "32px 24px",
    borderRadius: "12px 12px 0 0",
    textAlign: "center" as const,
    borderBottom: "3px solid #1e40af",
  },
  logo: {
    margin: "0 auto",
    display: "block",
  },

  // Main content styles
  mainContent: {
    backgroundColor: "#ffffff",
    padding: "32px 24px",
    borderRadius: "0 0 12px 12px",
    marginBottom: "24px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1e40af",
    margin: "0 0 24px 0",
    textAlign: "center" as const,
    lineHeight: "1.3",
  },
  greeting: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e3a8a",
    margin: "0 0 16px 0",
  },
  paragraph: {
    fontSize: "16px",
    color: "#374151",
    margin: "0 0 20px 0",
    lineHeight: "1.6",
  },

  // Card styles
  summaryCard: {
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 0",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "0 0 16px 0",
  },
  cardDivider: {
    borderColor: "#cbd5e1",
    margin: "16px 0",
  },

  // Summary styles
  summaryItem: {
    fontSize: "14px",
    color: "#4b5563",
    margin: "0 0 12px 0",
    lineHeight: "1.5",
  },
  label: {
    color: "#1e40af",
    fontWeight: "600",
  },
  messageBox: {
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "16px",
  },
  messageLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "0 0 8px 0",
  },
  messageText: {
    fontSize: "14px",
    color: "#374151",
    margin: "0",
    whiteSpace: "pre-wrap" as const,
    lineHeight: "1.5",
  },

  // Timeline styles
  timelineCard: {
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 0",
  },
  timelineTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "0 0 12px 0",
  },
  timelineText: {
    fontSize: "14px",
    color: "#374151",
    margin: "0",
    lineHeight: "1.5",
  },

  // CTA styles
  ctaSection: {
    textAlign: "center" as const,
    margin: "32px 0",
  },
  ctaButton: {
    backgroundColor: "#1e40af",
    color: "#ffffff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    display: "inline-block",
    border: "none",
  },

  // Footer styles
  footer: {
    backgroundColor: "#f8fafc",
    padding: "24px",
    borderRadius: "8px",
    textAlign: "center" as const,
  },
  footerDivider: {
    borderColor: "#e2e8f0",
    margin: "0 0 16px 0",
  },
  footerText: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 12px 0",
    lineHeight: "1.5",
  },
  footerLinks: {
    fontSize: "14px",
    margin: "0 0 16px 0",
  },
  footerLink: {
    color: "#1e40af",
    textDecoration: "none",
    margin: "0 8px",
  },
  footerNote: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "0",
    lineHeight: "1.4",
  },

  // Admin-specific styles
  adminHeader: {
    backgroundColor: "#1e40af",
    padding: "24px",
    borderRadius: "12px 12px 0 0",
    textAlign: "center" as const,
  },
  adminLogo: {
    margin: "0 auto 16px auto",
    display: "block",
    filter: "brightness(0) invert(1)",
  },
  adminTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0",
  },
  adminCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "24px",
    margin: "16px 0",
  },
  adminCardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "0 0 16px 0",
  },
  contactGrid: {
    display: "grid",
    gap: "16px",
  },
  adminField: {
    fontSize: "14px",
    color: "#374151",
    margin: "0 0 16px 0",
    lineHeight: "1.5",
  },
  adminLabel: {
    color: "#1e40af",
    fontWeight: "600",
    fontSize: "13px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  emailLink: {
    color: "#059669",
    textDecoration: "none",
    fontWeight: "500",
  },
  phoneLink: {
    color: "#0891b2",
    textDecoration: "none",
    fontWeight: "500",
  },
  inquiryBadge: {
    backgroundColor: "#ddd6fe",
    color: "#5b21b6",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "capitalize" as const,
  },
  subjectText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1f2937",
  },
  adminMessageBox: {
    backgroundColor: "#f9fafb",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "16px",
  },
  adminMessageText: {
    fontSize: "14px",
    color: "#374151",
    margin: "8px 0 0 0",
    whiteSpace: "pre-wrap" as const,
    lineHeight: "1.6",
  },

  // Action buttons
  adminActions: {
    textAlign: "center" as const,
    margin: "24px 0",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#059669",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    display: "inline-block",
    border: "none",
    margin: "0 6px",
  },
  secondaryButton: {
    backgroundColor: "#6b7280",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    display: "inline-block",
    border: "none",
    margin: "0 6px",
  },

  // Newsletter-specific styles
  benefitsCard: {
    backgroundColor: "#f0f9ff",
    border: "1px solid #bae6fd",
    borderRadius: "8px",
    padding: "24px",
    margin: "24px 0",
  },
  benefitItem: {
    fontSize: "14px",
    color: "#374151",
    margin: "0 0 16px 0",
    lineHeight: "1.6",
    paddingLeft: "4px",
  },
  confirmationCard: {
    backgroundColor: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 0",
    textAlign: "center" as const,
  },
  confirmationTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#059669",
    margin: "0 0 12px 0",
  },
  confirmationText: {
    fontSize: "14px",
    color: "#374151",
    margin: "0",
    lineHeight: "1.5",
  },

  // Admin footer
  adminFooter: {
    backgroundColor: "#f3f4f6",
    padding: "20px",
    borderRadius: "0 0 12px 12px",
    textAlign: "center" as const,
  },
  adminFooterText: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0",
    lineHeight: "1.4",
  },
};
