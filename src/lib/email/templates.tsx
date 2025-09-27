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
} from "@react-email/components";

export const ContactFormEmail = {
  User: (data: ContactFormData) => (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.header}>
            Thank You for Contacting OvyeGroup
          </Heading>
          <Section style={styles.section}>
            <Text style={styles.paragraph}>
              Dear {data.firstName} {data.lastName},
            </Text>
            <Text style={styles.paragraph}>
              Thank you for reaching out to OvyeGroup. We have received your
              message and will get back to you as soon as possible.
            </Text>
            <Text style={styles.paragraph}>
              Here&apos;s a summary of your inquiry:
            </Text>
            <Hr style={styles.hr} />
            <Text style={styles.field}>
              <strong>Subject:</strong> {data.subject}
            </Text>
            <Text style={styles.field}>
              <strong>Inquiry Type:</strong> {data.inquiryType}
            </Text>
            <Text style={styles.message}>
              <strong>Your Message:</strong>
              <br />
              {data.message}
            </Text>
            <Hr style={styles.hr} />
            <Text style={styles.paragraph}>
              Our team will review your message and respond within 24-48
              business hours.
            </Text>
            <Text style={styles.paragraph}>
              Best regards,
              <br />
              The OvyeGroup Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  ),
  Admin: (data: ContactFormData) => (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.header}>New Contact Form Submission</Heading>
          <Section style={styles.section}>
            <Heading as="h2" style={styles.subheader}>
              Contact Details
            </Heading>
            <Text style={styles.field}>
              <strong>Name:</strong> {data.firstName} {data.lastName}
            </Text>
            <Text style={styles.field}>
              <strong>Email:</strong> {data.email}
            </Text>
            <Text style={styles.field}>
              <strong>Phone:</strong> {data.phone}
            </Text>
            {data.company && (
              <Text style={styles.field}>
                <strong>Company:</strong> {data.company}
              </Text>
            )}
            <Text style={styles.field}>
              <strong>Inquiry Type:</strong> {data.inquiryType}
            </Text>
          </Section>
          <Hr style={styles.hr} />
          <Section style={styles.section}>
            <Heading as="h2" style={styles.subheader}>
              Message
            </Heading>
            <Text style={styles.message}>{data.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  ),
};

export const NewsletterWelcomeEmail = ({ email }: { email: string }) => (
  <Html>
    <Head />
    <Body style={styles.body}>
      <Container style={styles.container}>
        <Heading style={styles.header}>
          Welcome to OvyeGroup Newsletter!
        </Heading>
        <Section style={styles.section}>
          <Text style={styles.paragraph}>
            Thank you for subscribing to our newsletter. You&apos;ll now receive
            updates about our latest projects, initiatives, and company news.
          </Text>
          <Text style={styles.field}>Your subscription email: {email}</Text>
          <Hr style={styles.hr} />
          <Text style={styles.note}>
            If you didn&apos;t subscribe to our newsletter, please ignore this
            email.
          </Text>
        </Section>
        <Section style={styles.footer}>
          <Text style={styles.paragraph}>Best regards,</Text>
          <Text style={styles.paragraph}>The OvyeGroup Team</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  },
  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "6px",
    marginBottom: "24px",
  },
  header: {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "800",
    color: "#484848",
    padding: "17px 0 0",
  },
  subheader: {
    fontSize: "20px",
    letterSpacing: "-0.3px",
    lineHeight: "1.3",
    fontWeight: "600",
    color: "#484848",
    marginBottom: "16px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.4",
    color: "#3c4149",
    marginBottom: "16px",
  },
  field: {
    fontSize: "14px",
    lineHeight: "1.4",
    color: "#3c4149",
    marginBottom: "8px",
  },
  message: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#3c4149",
    whiteSpace: "pre-wrap",
  },
  note: {
    fontSize: "13px",
    lineHeight: "1.4",
    color: "#9ba0a7",
    marginTop: "16px",
  },
  footer: {
    fontSize: "13px",
    lineHeight: "1.4",
    color: "#9ba0a7",
    marginTop: "32px",
  },
  hr: {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  },
};
