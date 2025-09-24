"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Award,
  Building2,
  Lightbulb,
  Heart,
  Target,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const stats = [
    { label: "Years of Excellence", value: "25+", icon: Award },
    { label: "Employees Worldwide", value: "50K+", icon: Users },
    { label: "Countries of Operation", value: "15", icon: Globe },
    { label: "Annual Revenue", value: "$2.5B+", icon: TrendingUp },
  ];

  const businessSectors = [
    {
      title: "Energy & Oil",
      description:
        "Leading the energy transformation across Africa with sustainable and innovative solutions.",
      image: "/api/placeholder/400/300",
      link: "/business/energy",
    },
    {
      title: "Manufacturing",
      description:
        "World-class manufacturing facilities producing quality goods for local and international markets.",
      image: "/api/placeholder/400/300",
      link: "/business/manufacturing",
    },
    {
      title: "Technology",
      description:
        "Driving digital transformation and innovation across various industries.",
      image: "/api/placeholder/400/300",
      link: "/business/technology",
    },
    {
      title: "Real Estate",
      description:
        "Developing modern commercial and residential properties that shape skylines.",
      image: "/api/placeholder/400/300",
      link: "/business/real-estate",
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to drive progress.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards and transparency.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering exceptional value.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We are committed to empowering communities and creating shared prosperity.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Building a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Prosperous Africa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              OvyeGroup is a diversified African conglomerate committed to
              creating sustainable value across multiple industries while
              empowering communities and driving economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors gap-2 text-lg"
                >
                  Discover Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/business"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors gap-2 text-lg"
                >
                  Our Business
                  <Building2 className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Africa&apos;s Economic Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For over two decades, OvyeGroup has been at the forefront of
                Africa&apos;s economic development. We believe in the potential
                of our continent and are committed to creating sustainable
                businesses that provide essential services and products while
                generating employment and prosperity for local communities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Diversified portfolio across key industries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Commitment to sustainable development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Strong focus on community empowerment
                  </span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors gap-2"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl inset-0 bg-[url('/images/visionimg.png')] bg-cover bg-center p-8 text-white">
                <div className="h-full w-full flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    To be Africa&apos;s most respected conglomerate, creating
                    sustainable value for all stakeholders while contributing to
                    the continent&apos;s prosperity and development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Business Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We operate across diverse industries, delivering innovative
              solutions and creating value for our stakeholders and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <Link
                    href={sector.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors gap-2 group-hover:gap-3 group-hover:transition-all"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every action we take
              as we build sustainable businesses across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join us in building a prosperous future for Africa. Explore
              partnership opportunities, career options, or learn more about our
              commitment to sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors gap-2"
              >
                Explore Careers
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
