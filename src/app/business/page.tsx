"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Factory,
  Smartphone,
  Building2,
  CreditCard,
  Heart,
  Sprout,
  Pickaxe,
  Truck,
  GraduationCap,
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
      id: "agriculture",
      title: "Agriculture & Food",
      icon: Sprout,
      description:
        "Africa has vast arable land and favorable climatic conditions for agriculture. We invest in modern farming techniques, irrigation systems, agribusiness, and value-added processing to boost agricultural productivity, food security, and export opportunities.",
      highlights: [
        "Modern Farming Techniques",
        "Irrigation Systems",
        "Agribusiness Solutions",
        "Value-Added Processing",
      ],
      stats: { projects: "50+", productivity: "40%↑", countries: "8" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "finance",
      title: "Financial Services",
      icon: CreditCard,
      description:
        "We address Africa's infrastructure deficit by mobilizing global capital and allocating it to sectors that will power Africa to prosperity. Our comprehensive financial services include banking, insurance, and investment management.",
      highlights: [
        "Capital Mobilization",
        "Infrastructure Investment",
        "Commercial Banking",
        "Investment Management",
      ],
      stats: { capital: "$2B+", customers: "2M+", branches: "150+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "healthcare",
      title: "Healthcare Services",
      icon: Heart,
      description:
        "To ensure the well-being and productivity of our populace, we prioritize establishing dependable and accessible healthcare services. We invest in top-tier health facilities, cutting-edge equipment, and quality services.",
      highlights: [
        "Health Facilities",
        "Medical Equipment",
        "Quality Healthcare Services",
        "Telemedicine Solutions",
      ],
      stats: { facilities: "50+", patients: "1M+", coverage: "85%" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "mining",
      title: "Mining & Resources",
      icon: Pickaxe,
      description:
        "Responsible extraction and processing of Africa's mineral wealth. Our mining operations focus on sustainable practices while maintaining the highest environmental and safety standards across all projects.",
      highlights: [
        "Resource Extraction",
        "Sustainable Mining",
        "Environmental Compliance",
        "Safety Standards",
      ],
      stats: { operations: "25+", output: "2.5M oz", safety: "99.8%" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "fashion",
      title: "Fashion",
      icon: Zap,
      description:
        "Developing fashion and textile projects across Africa. We're committed to promoting local artisans and sustainable practices in the fashion industry.",
      highlights: [
        "Sustainable Fashion",
        "Local Artisans",
        "Textile Innovation",
        "Ethical Production",
      ],
      stats: { capacity: "2.5GW", projects: "45+", households: "3M+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "sports",
      title: "Sports",
      icon: Factory,
      description:
        "Modern sports facilities and programs promoting athletic excellence and community engagement. We're dedicated to fostering talent and providing opportunities for athletes across Africa.",
      highlights: [
        "Athlete Development",
        "Sports Infrastructure",
        "Community Engagement",
        "Talent Identification  ",
      ],
      stats: { facilities: "30+", products: "500+", exports: "40%" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "power-and-energy",
      title: "Power and Energy",
      icon: Smartphone,
      description:
        "Africa's energy sector is undergoing a significant transformation, with a growing emphasis on renewable energy sources. We invest in both renewable energy projects and traditional power generation facilities to provide reliable and affordable energy while supporting Africa's transition to clean energy solutions.",
      highlights: [
        "Renewable Energy",
        "Telecommunications",
        "Traditional Power Generation",
        "Digital Infrastructure",
      ],
      stats: { users: "10M+", apps: "25+", coverage: "85%" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Building2,
      description:
        "Manufacturing is a key driver of economic diversification and job creation in Africa. We operate modern manufacturing facilities producing consumer goods, industrial equipment, and construction materials. Our operations focus on quality, efficiency, and supporting local supply chains across Africa.",
      highlights: [
        "Modern manufacturing hubs",
        "Job Creation",
        "Consumer Goods",
        "Industrial Equipment",
      ],
      stats: { projects: "100+", units: "25K+", cities: "20+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "technology",
      title: "Technology",
      icon: Truck,
      description:
        "Innovative technology solutions driving digital transformation and e-commerce across Africa.",
      highlights: [
        "E-Commerce Platforms",
        "Digital Payment Solutions",
        "Cloud Computing",
        "Cybersecurity",
      ],
      stats: { vehicles: "2K+", warehouses: "50+", routes: "200+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "blockchain",
      title: "Blockchain",
      icon: GraduationCap,
      description:
        "Blockchain technology is revolutionizing various sectors across Africa. We invest in blockchain solutions that enhance transparency, security, and efficiency in transactions and data management.",
      highlights: [
        "Smart Contracts",
        "Decentralized Finance (DeFi)",
        "Supply Chain Transparency",
        "Digital Identity Solutions",
      ],
      stats: { students: "75K+", institutions: "80+", graduates: "200K+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "entertainment",
      title: "Entertainment",
      icon: GraduationCap,
      description:
        "The entertainment industry in Africa is rapidly evolving, with a focus on digital content creation and distribution. We support innovative media projects that showcase African talent and stories.",
      highlights: [
        "Film Production",
        "Music & Arts",
        "Digital Distribution",
        "Content Creation",
      ],
      stats: { students: "75K+", institutions: "80+", graduates: "200K+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "venture-capital",
      title: "Venture Capital",
      icon: GraduationCap,
      description:
        "Venture capital is crucial for fostering innovation and entrepreneurship in Africa. We invest in promising startups and emerging businesses, providing them with the resources and support needed to scale and succeed.",
      highlights: [
        "Startup Funding",
        "Business Development",
        "Market Expansion",
        "Mentorship & Support",
      ],
      stats: { students: "75K+", institutions: "80+", graduates: "200K+" },
      image: "/api/placeholder/600/400",
    },
    {
      id: "health",
      title: "Health",
      icon: GraduationCap,
      description:
        "The health sector in Africa is rapidly evolving, with a focus on improving access to quality healthcare services. We support innovative health projects that enhance patient care and outcomes.",
      highlights: [
        "Telemedicine",
        "Health Education",
        "Digital Health Records",
        "Community Health Initiatives",
      ],
      stats: { students: "75K+", institutions: "80+", graduates: "200K+" },
      image: "/api/placeholder/600/400",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "35%",
      description: "Year-over-year growth across all business sectors",
    },
    {
      icon: Users,
      title: "Employment",
      value: "150K+",
      description: "Direct and indirect jobs created across Africa",
    },
    {
      icon: Globe,
      title: "Market Presence",
      value: "20",
      description: "Countries with active operations and partnerships",
    },
    {
      icon: Factory,
      title: "Total Facilities",
      value: "500+",
      description: "Combined facilities across all business sectors",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="pt-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/business2.png')" }}
      >
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

      {/* Business Sectors Grid Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All Business Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio spanning across{" "}
              {businessSectors.length} key sectors driving Africa&apos;s
              economic transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  document
                    .getElementById(`sector-${sector.id}`)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <sector.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {sector.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
