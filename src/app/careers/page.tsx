"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths with mentorship and leadership development programs.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Continuous learning opportunities including training, certifications, and conferences.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, wellness programs, and mental health support.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "Work across our 15 African markets and gain international business experience.",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description:
        "Diverse and inclusive workplace that celebrates different perspectives and backgrounds.",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Performance-based rewards, recognition programs, and competitive compensation packages.",
    },
  ];

  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦8M - ₦12M annually",
      description:
        "Join our fintech team to build innovative financial solutions for African markets.",
      requirements: [
        "5+ years experience",
        "React/Node.js",
        "Fintech experience preferred",
      ],
    },
    {
      title: "Operations Manager",
      department: "Manufacturing",
      location: "Accra, Ghana",
      type: "Full-time",
      salary: "$45K - $60K annually",
      description:
        "Lead manufacturing operations and drive efficiency improvements.",
      requirements: [
        "MBA preferred",
        "7+ years operations",
        "Manufacturing experience",
      ],
    },
    {
      title: "Business Development Manager",
      department: "Energy",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "$40K - $55K annually",
      description:
        "Develop new business opportunities in renewable energy sector.",
      requirements: [
        "Energy sector experience",
        "Business development skills",
        "Fluent English",
      ],
    },
    {
      title: "Financial Analyst",
      department: "Corporate",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦4M - ₦6M annually",
      description:
        "Support financial planning and analysis across business units.",
      requirements: [
        "CFA/ACA preferred",
        "Excel/Financial modeling",
        "3+ years experience",
      ],
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$30K - $40K annually",
      description:
        "Drive digital marketing initiatives across African markets.",
      requirements: [
        "Digital marketing",
        "Social media expertise",
        "Analytics skills",
      ],
    },
    {
      title: "Graduate Trainee",
      department: "Various",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "Competitive",
      description: "Join our comprehensive graduate development program.",
      requirements: [
        "Recent graduate",
        "Strong academics",
        "Leadership potential",
      ],
    },
  ];

  const workplaceStats = [
    { label: "Team Members", value: "50K+", icon: Users },
    { label: "Countries", value: "15", icon: Globe },
    { label: "Employee Satisfaction", value: "94%", icon: Heart },
    { label: "Internal Promotions", value: "80%", icon: TrendingUp },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="pt-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/team.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Build your career while building Africa&apos;s future. Discover
              opportunities to make an impact across our diverse business
              portfolio.
            </p>
            <div className="mt-12">
              <Link
                href="#openings"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors gap-2"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workplace Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {workplaceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform to make a
              meaningful impact while growing your career across Africa&apos;s
              most dynamic markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Culture
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Innovation-Driven
                  </h3>
                  <p className="text-gray-700">
                    We encourage creative thinking and provide resources to turn
                    innovative ideas into reality across all our business
                    sectors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Collaborative
                  </h3>
                  <p className="text-gray-700">
                    Our success comes from teamwork, knowledge sharing, and
                    building strong relationships across all levels of the
                    organization.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Impact-Focused
                  </h3>
                  <p className="text-gray-700">
                    Every role contributes to our mission of building
                    sustainable businesses that create positive change across
                    African communities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">
                    Employee Testimonial
                  </h3>
                  <blockquote className="text-lg leading-relaxed mb-6">
                    &ldquo;Working at OvyeGroup has been transformative. The
                    opportunities to work across different markets and business
                    sectors have accelerated my career growth beyond what I
                    imagined possible.&rdquo;
                  </blockquote>
                  <cite className="text-blue-200">
                    - Sarah Okonkwo, Senior Business Analyst
                  </cite>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities across our business portfolio and
              find the perfect role to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {job.department}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don&apos;t see the perfect role? We&apos;re always looking for
              exceptional talent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors gap-2"
            >
              Send Us Your CV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the
              best talent while providing a great candidate experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description:
                  "Submit your application through our careers portal with your CV and cover letter.",
              },
              {
                step: "2",
                title: "Initial Review",
                description:
                  "Our HR team reviews applications and conducts initial screening calls.",
              },
              {
                step: "3",
                title: "Interview Process",
                description:
                  "Participate in interviews with hiring managers and potential team members.",
              },
              {
                step: "4",
                title: "Welcome Aboard",
                description:
                  "Complete onboarding and begin your journey with comprehensive orientation.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
