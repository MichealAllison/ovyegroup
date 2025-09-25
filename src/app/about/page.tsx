"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  Globe,
  TrendingUp,
  Heart,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "OvyeGroup was established with a vision to transform Africa through sustainable business practices.",
    },
    {
      year: "2005",
      title: "Energy Expansion",
      description:
        "Entered the energy sector with major investments in oil and gas operations across West Africa.",
    },
    {
      year: "2010",
      title: "Manufacturing Growth",
      description:
        "Expanded into manufacturing with state-of-the-art facilities producing goods for local and export markets.",
    },
    {
      year: "2015",
      title: "Technology Innovation",
      description:
        "Launched technology division focusing on digital transformation and fintech solutions.",
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description:
        "Strengthened commitment to environmental sustainability and community development programs.",
    },
    {
      year: "2024",
      title: "Continental Expansion",
      description:
        "Extended operations to 15 African countries, becoming a truly pan-African conglomerate.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Adebayo Ovye",
      position: "Chairman & CEO",
      bio: "Visionary leader with over 30 years of experience in African business development and strategic planning.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Mrs. Fatima Akinola",
      position: "Chief Operating Officer",
      bio: "Expert in operational excellence with a proven track record in scaling businesses across multiple sectors.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Mr. James Okafor",
      position: "Chief Financial Officer",
      bio: "Financial strategist with extensive experience in capital markets and corporate finance.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Dr. Amina Hassan",
      position: "Chief Technology Officer",
      bio: "Technology innovator leading digital transformation initiatives across the group.",
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About OvyeGroup
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building sustainable businesses that create lasting value for
              Africa and its people
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create technologies that solve major problems and accelerate
                the world&apos;s transition to a sustainable tech system. We are
                keen on identifying prolonged problems existing in emerging
                communities and providing corresponding solutions for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create solution-centric products that improve living
                conditions and increase economic profitability in Africa, while
                becoming the leading innovator in sustainable technology
                solutions for emerging communities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to continental leadership, our journey
              reflects our unwavering commitment to African development.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <div
                    className={`${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team combines global expertise with
              deep understanding of African markets and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden group-hover:scale-105 transition-transform"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {leader.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These core values guide every decision we make and shape our
              corporate culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We embrace creativity and technological advancement to solve complex challenges.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical responsibility.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We are committed to empowering communities and creating shared prosperity.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in all our endeavors and continuously improve.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
