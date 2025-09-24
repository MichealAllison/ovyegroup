"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Factory,
  Smartphone,
  Building,
  CreditCard,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BusinessPage() {
  const businessSectors = [
    {
      id: "energy",
      title: "Energy & Oil",
      icon: Zap,
      description:
        "Leading Africa's energy transformation with sustainable oil and gas operations, renewable energy projects, and innovative energy solutions.",
      highlights: [
        "Oil & Gas Exploration",
        "Renewable Energy Projects",
        "Energy Infrastructure",
        "Power Generation",
      ],
      stats: { projects: "50+", capacity: "2.5GW", countries: "8" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Factory,
      description:
        "World-class manufacturing facilities producing quality consumer goods, industrial products, and building materials for African and global markets.",
      highlights: [
        "Consumer Goods",
        "Industrial Equipment",
        "Building Materials",
        "Packaging Solutions",
      ],
      stats: { facilities: "25", employees: "15K+", revenue: "$800M+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "technology",
      title: "Technology",
      icon: Smartphone,
      description:
        "Driving digital transformation across Africa through innovative fintech solutions, telecommunications, and enterprise software development.",
      highlights: [
        "Fintech Solutions",
        "Telecommunications",
        "Enterprise Software",
        "Digital Platforms",
      ],
      stats: { users: "5M+", apps: "12", markets: "10" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      icon: Building,
      description:
        "Developing modern commercial and residential properties that shape Africa's urban landscape and provide world-class living and working spaces.",
      highlights: [
        "Commercial Developments",
        "Residential Projects",
        "Mixed-Use Complexes",
        "Infrastructure Development",
      ],
      stats: { projects: "100+", sqft: "50M+", cities: "12" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "financial",
      title: "Financial Services",
      icon: CreditCard,
      description:
        "Providing comprehensive financial services including banking, insurance, investment management, and microfinance solutions across Africa.",
      highlights: [
        "Commercial Banking",
        "Insurance Services",
        "Investment Management",
        "Microfinance",
      ],
      stats: { customers: "2M+", branches: "150+", assets: "$5B+" },
      image: "/api/placeholder/600/400",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "25%",
      description: "Year-over-year growth across all business sectors",
    },
    {
      icon: Users,
      title: "Employment",
      value: "50K+",
      description: "Direct jobs created across Africa",
    },
    {
      icon: Globe,
      title: "Market Presence",
      value: "15",
      description: "Countries with active operations",
    },
    {
      icon: Factory,
      title: "Facilities",
      value: "100+",
      description: "Manufacturing and service facilities",
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
              Our Business
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Diversified across multiple sectors, we create sustainable value
              and drive economic growth throughout Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Business Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diversified business portfolio spans key sectors of the
              African economy, creating synergies and driving sustainable
              growth.
            </p>
          </div>

          <div className="space-y-20">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {sector.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {sector.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(sector.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/business/${sector.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                    {/* Placeholder for business sector image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <sector.icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics that demonstrate our impact and growth across all
              business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Investment Philosophy
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Long-term Value Creation
                  </h3>
                  <p className="text-gray-600">
                    We focus on building businesses that create sustainable
                    value over decades, not just quarters.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Impact
                  </h3>
                  <p className="text-gray-600">
                    Every investment decision considers the positive impact on
                    local communities and economies.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Strategic Synergies
                  </h3>
                  <p className="text-gray-600">
                    We leverage synergies across our portfolio to maximize
                    efficiency and create competitive advantages.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Strategic Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Essential services and infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Technology-enabled solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Sustainable and renewable energy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Financial inclusion and access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Quality manufacturing and production</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Explore partnership opportunities across our diverse business
              portfolio. Let&apos;s build Africa&apos;s future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors gap-2"
              >
                Learn More
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
