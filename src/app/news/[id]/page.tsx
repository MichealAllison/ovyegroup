"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  User,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";

export default function NewsArticlePage() {
  const params = useParams();
  const articleId = params.id as string;

  // This would typically come from a database or API
  const getArticleById = (id: string) => {
    const articles = [
      {
        id: "1",
        title:
          "OvyeGroup Announces $500M Investment in Renewable Energy Projects Across Africa",
        excerpt:
          "The investment will focus on solar and wind energy projects in Nigeria, Ghana, and Kenya, aiming to provide clean energy access to over 2 million households.",
        content: `
          <p>OvyeGroup has announced a landmark $500 million investment in renewable energy projects across Africa, marking one of the largest private sector commitments to clean energy on the continent. The comprehensive initiative will focus on developing solar and wind energy infrastructure in Nigeria, Ghana, and Kenya over the next five years.</p>

          <h3>Transforming Africa's Energy Landscape</h3>
          <p>The investment represents a significant step forward in addressing Africa's energy deficit while supporting the continent's transition to sustainable energy sources. The projects are expected to generate over 1.5 gigawatts of clean energy capacity, providing electricity access to more than 2 million households across the three target countries.</p>

          <p>"This investment underscores our commitment to powering Africa's development through sustainable and innovative solutions," said CEO James Ovye. "By harnessing the continent's abundant solar and wind resources, we're not just addressing energy challenges – we're creating opportunities for economic growth, job creation, and environmental stewardship."</p>

          <h3>Project Details and Timeline</h3>
          <p>The renewable energy portfolio will include:</p>
          <ul>
            <li>12 large-scale solar power plants across Nigeria, with a combined capacity of 800MW</li>
            <li>8 wind energy farms in Ghana's coastal regions, generating 450MW</li>
            <li>6 hybrid solar-wind installations in Kenya, contributing 250MW to the national grid</li>
          </ul>

          <p>Construction is set to begin in early 2026, with the first phase of projects expected to come online by late 2027. The entire portfolio is projected to be fully operational by 2030.</p>

          <h3>Economic and Social Impact</h3>
          <p>Beyond providing clean energy access, the projects are expected to create approximately 15,000 direct jobs during the construction phase and 3,000 permanent positions for operations and maintenance. Local communities will benefit from skills development programs, with particular emphasis on training women and youth in renewable energy technologies.</p>

          <p>The initiative also includes partnerships with local financial institutions to provide affordable energy financing options for small and medium enterprises, supporting broader economic development in the target regions.</p>

          <h3>Environmental Commitment</h3>
          <p>The renewable energy projects align with OvyeGroup's broader sustainability strategy and commitment to achieving carbon neutrality across all operations by 2035. The clean energy generated is expected to reduce carbon emissions by approximately 2.5 million tons annually, equivalent to removing 500,000 cars from the road.</p>

          <p>Dr. Sarah Kimani, OvyeGroup's Chief Sustainability Officer, emphasized the environmental significance: "This investment represents our dedication to responsible business practices that benefit both people and planet. We're demonstrating that profitability and sustainability can go hand in hand."</p>

          <h3>Strategic Partnerships</h3>
          <p>The renewable energy initiative involves strategic partnerships with leading international technology providers, development finance institutions, and local governments. Key partners include the African Development Bank, which is providing $150 million in co-financing, and several European technology companies supplying state-of-the-art solar panels and wind turbines.</p>

          <p>Government support has been secured in all three target countries, with special economic zones designated for manufacturing renewable energy components locally, further boosting the projects' economic impact.</p>
        `,
        category: "energy",
        date: "2025-09-20",
        readTime: "8 min read",
        author: "Sarah Johnson",
        authorTitle: "Energy Correspondent",
        tags: [
          "Renewable Energy",
          "Investment",
          "Solar Power",
          "Wind Energy",
          "Sustainability",
        ],
        relatedArticles: [2, 5],
      },
      {
        id: "2",
        title:
          "Revolutionary Healthcare Initiative Launches in Rural Communities",
        excerpt:
          "OvyeGroup's healthcare division introduces mobile health clinics and telemedicine services to underserved communities across Sub-Saharan Africa.",
        content: `
          <p>OvyeGroup's healthcare division has launched an ambitious initiative to bring quality healthcare services to underserved rural communities across Sub-Saharan Africa. The program combines mobile health clinics with cutting-edge telemedicine technology to bridge the healthcare access gap that affects millions of people in remote areas.</p>

          <h3>Addressing Healthcare Inequity</h3>
          <p>The initiative directly addresses one of Africa's most pressing challenges: healthcare access in rural areas. According to recent studies, over 70% of Sub-Saharan Africa's population lives in rural areas, yet these communities have access to less than 30% of the continent's healthcare infrastructure.</p>

          <p>"Healthcare should not be a privilege determined by geography," stated Dr. Michael Adebayo, Director of OvyeGroup's Healthcare Division. "Our mobile clinics and telemedicine platform ensure that quality healthcare reaches every corner of our communities, regardless of how remote they may be."</p>

          <h3>Comprehensive Service Offering</h3>
          <p>The mobile health clinics are equipped with state-of-the-art medical equipment and staffed by qualified healthcare professionals. Services include:</p>
          <ul>
            <li>Primary healthcare consultations and preventive care</li>
            <li>Maternal and child health services</li>
            <li>Chronic disease management and monitoring</li>
            <li>Vaccination programs and health education</li>
            <li>Emergency medical response and stabilization</li>
          </ul>

          <h3>Technology Integration</h3>
          <p>The telemedicine component connects rural patients with specialist doctors in urban centers, enabling:</p>
          <ul>
            <li>Real-time consultations via high-definition video calls</li>
            <li>Remote diagnostics using portable medical devices</li>
            <li>Electronic health records accessible across the network</li>
            <li>Prescription management and medication tracking</li>
          </ul>

          <p>The platform operates on robust satellite internet connectivity, ensuring reliable service even in areas with limited telecommunications infrastructure.</p>

          <h3>Community Impact and Reach</h3>
          <p>The initial rollout covers 15 rural districts across Nigeria, Ghana, and Tanzania, with plans to expand to additional countries based on the program's success. Each mobile clinic serves approximately 20 communities on a rotating schedule, ensuring regular healthcare access for over 500,000 people in the first phase.</p>

          <p>Local community health workers receive training to provide basic services between clinic visits and to facilitate telemedicine consultations. This approach ensures continuity of care and builds local healthcare capacity.</p>
        `,
        category: "healthcare",
        date: "2025-09-18",
        readTime: "6 min read",
        author: "Dr. Michael Adebayo",
        authorTitle: "Healthcare Division Director",
        tags: [
          "Healthcare",
          "Telemedicine",
          "Rural Health",
          "Community Impact",
          "Technology",
        ],
        relatedArticles: [3, 6],
      },
      // Add more articles as needed
    ];

    return articles.find((article) => article.id === id);
  };

  const article = getArticleById(articleId);

  if (!article) {
    return (
      <div>
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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

      {/* Article Header */}
      <article className="pt-20">
        {/* Back Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
          </div>
        </div>

        {/* Article Hero */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category and Tags */}
              <div className="mb-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${
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

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{article.author}</span>
                  {article.authorTitle && (
                    <span className="text-sm">• {article.authorTitle}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-12 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-8xl font-bold">NEWS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Tags
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/news/2" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/20 text-4xl font-bold">
                          NEWS
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        Revolutionary Healthcare Initiative Launches in Rural
                        Communities
                      </h3>
                      <p className="text-gray-600 text-sm">
                        OvyeGroup's healthcare division introduces mobile health
                        clinics and telemedicine services...
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/news/3" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/20 text-4xl font-bold">
                          NEWS
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        Digital Agriculture Platform Transforms Farming
                        Practices
                      </h3>
                      <p className="text-gray-600 text-sm">
                        New AI-powered platform helps 50,000 farmers optimize
                        crop yields and reduce waste...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
