"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import NewsletterForm from "@/components/ui/NewsletterForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Business", href: "/business" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
    { label: "Media Center", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ];

  const businessSectors = [
    { label: "Energy & Oil", href: "/business/energy" },
    { label: "Manufacturing", href: "/business/manufacturing" },
    { label: "Technology", href: "/business/technology" },
    { label: "Real Estate", href: "/business/real-estate" },
    { label: "Financial Services", href: "/business/financial" },
  ];

  const socialMedia = [
    {
      icon: Twitter,
      href: "https://x.com/oveyGroup?t=me7t4kZ2SIQbDH4tK0jRHQ&s=09",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/ovyegroup",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/ovyegroup",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-300 text-lg">
                Get the latest updates on our business developments,
                sustainability initiatives, and corporate news delivered to your
                inbox.
              </p>
            </div>
            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">OvyeGroup</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              A leading African conglomerate committed to building prosperity
              and empowering communities through innovative business solutions
              across multiple sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+234 1 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@ovyegroup.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Sectors */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Business</h4>
            <ul className="space-y-3">
              {businessSectors.map((sector) => (
                <li key={sector.label}>
                  <Link
                    href={sector.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates on our latest projects and
              initiatives.
            </p>
            <NewsletterForm />
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-3">
              <Link
                href="/investor-relations"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Investor Relations
              </Link>
              <Link
                href="/media/press"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Press Center
              </Link>
              <Link
                href="/careers"
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Career Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} OvyeGroup. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
