"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Globe,
  Users,
  Building2,
  Zap,
  Heart,
  Smartphone,
  Filter,
  Search,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All News", icon: Globe },
    { id: "business", name: "Business", icon: TrendingUp },
    { id: "agriculture", name: "Agriculture", icon: Building2 },
    { id: "energy", name: "Energy", icon: Zap },
    { id: "healthcare", name: "Healthcare", icon: Heart },
    { id: "technology", name: "Technology", icon: Smartphone },
    { id: "community", name: "Community", icon: Users },
  ];

  const newsArticles = [
    {
      id: 1,
      title:
        "OvyeGroup Announces $500M Investment in Renewable Energy Projects Across Africa",
      excerpt:
        "The investment will focus on solar and wind energy projects in Nigeria, Ghana, and Kenya, aiming to provide clean energy access to over 2 million households.",
      category: "energy",
      date: "2025-09-20",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      author: "Sarah Johnson",
      tags: ["Renewable Energy", "Investment", "Solar Power", "Wind Energy"],
    },
    {
      id: 2,
      title:
        "Revolutionary Healthcare Initiative Launches in Rural Communities",
      excerpt:
        "OvyeGroup's healthcare division introduces mobile health clinics and telemedicine services to underserved communities across Sub-Saharan Africa.",
      category: "healthcare",
      date: "2025-09-18",
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      featured: true,
      author: "Dr. Michael Adebayo",
      tags: ["Healthcare", "Telemedicine", "Rural Health", "Community Impact"],
    },
    {
      id: 3,
      title: "Digital Agriculture Platform Transforms Farming Practices",
      excerpt:
        "New AI-powered platform helps 50,000 farmers optimize crop yields and reduce waste through precision agriculture and real-time weather monitoring.",
      category: "agriculture",
      date: "2025-09-15",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "James Okafor",
      tags: [
        "Agriculture",
        "AI Technology",
        "Precision Farming",
        "Sustainability",
      ],
    },
    {
      id: 4,
      title:
        "OvyeGroup Partners with Leading Tech Companies for Digital Infrastructure",
      excerpt:
        "Strategic partnerships announced to accelerate digital transformation across Africa, focusing on 5G networks and cloud computing infrastructure.",
      category: "technology",
      date: "2025-09-12",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "Tech Correspondent",
      tags: ["Technology", "5G", "Cloud Computing", "Digital Infrastructure"],
    },
    {
      id: 5,
      title: "Sustainable Mining Operations Set New Industry Standards",
      excerpt:
        "OvyeGroup's mining division implements breakthrough environmental technologies, reducing carbon footprint by 60% while maintaining production efficiency.",
      category: "business",
      date: "2025-09-10",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "Environmental Reporter",
      tags: ["Mining", "Sustainability", "Environment", "Innovation"],
    },
    {
      id: 6,
      title:
        "Educational Excellence: New Universities Open Across Three Countries",
      excerpt:
        "OvyeGroup inaugurates state-of-the-art university campuses in Nigeria, Ghana, and Senegal, focusing on STEM education and innovation.",
      category: "community",
      date: "2025-09-08",
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "Education Desk",
      tags: ["Education", "Universities", "STEM", "Innovation"],
    },
    {
      id: 7,
      title: "Financial Inclusion Program Reaches 1 Million Beneficiaries",
      excerpt:
        "Microfinance and digital banking services expand access to financial services for small businesses and entrepreneurs across rural Africa.",
      category: "business",
      date: "2025-09-05",
      readTime: "3 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "Finance Reporter",
      tags: [
        "Financial Services",
        "Microfinance",
        "Digital Banking",
        "Entrepreneurship",
      ],
    },
    {
      id: 8,
      title:
        "Manufacturing Excellence: New Production Facilities Create 10,000 Jobs",
      excerpt:
        "State-of-the-art manufacturing plants open in East Africa, producing consumer goods and industrial equipment for local and export markets.",
      category: "business",
      date: "2025-09-03",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      featured: false,
      author: "Industrial Correspondent",
      tags: [
        "Manufacturing",
        "Job Creation",
        "Industrial Development",
        "Export",
      ],
    },
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter((article) => article.featured);
  const regularNews = filteredNews.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Latest News</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with OvyeGroup&apos;s latest developments,
              achievements, and impact across Africa&apos;s key sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === "all" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Stories
              </h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/news/${article.id}`}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/20 text-6xl font-bold">
                            NEWS
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center text-blue-600 font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all"
                ? "Latest Updates"
                : `${categories.find((c) => c.id === selectedCategory)?.name} News`}
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {regularNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/news/${article.id}`}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/20 text-4xl font-bold">
                            NEWS
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                              article.category === "energy"
                                ? "bg-yellow-100 text-yellow-800"
                                : article.category === "healthcare"
                                  ? "bg-red-100 text-red-800"
                                  : article.category === "agriculture"
                                    ? "bg-green-100 text-green-800"
                                    : article.category === "technology"
                                      ? "bg-purple-100 text-purple-800"
                                      : article.category === "business"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            By {article.author}
                          </span>

                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important updates about
              OvyeGroup&apos;s impact across Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
