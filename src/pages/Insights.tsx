import { Helmet } from "react-helmet-async";
import { Target, TrendingUp, Award, Users, ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const insights = [
  {
    category: 'Strategy',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    title: 'Why Digital Authority Beats Viral Marketing for Service Businesses',
    excerpt: 'While viral marketing promises quick wins, digital authority builds sustainable trust. Service businesses need long term credibility, not fleeting attention.',
    slug: 'why-digital-authority-beats-viral-marketing'
  },
  {
    category: 'Web Design',
    date: 'Jan 25, 2026',
    readTime: '7 min read',
    title: 'The Authority Website Framework Building Trust Through Structure',
    excerpt: 'Your website is not just a digital brochure. It is your most powerful authority asset when built strategically.',
    slug: 'authority-website-framework'
  },
  {
    category: 'SEO',
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    title: 'Local SEO vs National Authority Which Strategy Wins',
    excerpt: 'Should you dominate your local market or compete nationally. The real advantage is knowing how to layer both.',
    slug: 'local-seo-vs-national-authority'
  },
  {
    category: 'Conversion',
    date: 'Jan 18, 2026',
    readTime: '7 min read',
    title: 'Converting Visibility into Revenue The Missing Link in Digital Strategy',
    excerpt: 'Traffic does not pay the bills. Conversion systems do.',
    slug: 'converting-visibility-into-revenue'
  },
  {
    category: 'Content Strategy',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    title: 'How Authority Content Compounds Trust and Revenue',
    excerpt: 'Expert driven content builds credibility that compounds over time turning attention into long term growth.',
    slug: 'authority-content-strategy'
  },
  {
    category: 'Authority Systems',
    date: 'Jan 12, 2026',
    readTime: '10 min read',
    title: 'The Digital Authority System Every Service Business Needs',
    excerpt: 'Authority is engineered through systems that work together to earn trust at scale.',
    slug: 'digital-authority-systems'
  }
];

const reasons = [
  {
    icon: Target,
    title: 'Authority-First Approach',
    description: 'We don\'t just build websites, we build digital authority that establishes your business as the trusted choice.'
  },
  {
    icon: TrendingUp,
    title: 'Strategy-Led Execution',
    description: 'Every project begins with deep strategic planning, ensuring your digital presence drives real business outcomes.'
  },
  {
    icon: Award,
    title: 'Premium Design Standards',
    description: 'World-class design and development that reflects the quality and professionalism of your brand.'
  },
  {
    icon: Users,
    title: 'Long-Term Partnerships',
    description: 'We invest in your success with ongoing support, optimization, and strategic guidance as you grow.'
  }
];

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights & Perspectives on Digital Authority | Perceptra</title>
        <meta
          name="description"
          content="Read Perceptra’s insights on digital authority, SEO, conversion systems, and strategic growth frameworks for service businesses."
        />
        <link rel="canonical" href="https://www.perceptra.in/insights" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Insights & Perspectives on Digital Authority | Perceptra"
        />
        <meta
          property="og:description"
          content="Strategic insights and practical frameworks for building sustainable digital authority and business growth."
        />
        <meta
          property="og:url"
          content="https://www.perceptra.in/insights"
        />
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
      <div className="pt-24">
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Insights & Perspectives
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strategic thinking and practical frameworks for building digital authority in competitive markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {insights.map((insight, index) => (
                <article
                  key={index}
                  className="bg-gray-950 border border-white/10 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col"
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded">
                        {insight.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {insight.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {insight.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} />
                        {insight.readTime}
                      </span>
                      <Link
                        to={`/insights/${insight.slug}`}
                        className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Why Perceptra
              </h2>
              <p className="text-xl text-gray-400">
                Your partner in building lasting digital authority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-black border border-red-500/20 rounded-lg p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Growth-Focused Systems
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Every system we build is designed with one goal: sustainable growth. From first contact to long-term retention, we engineer digital experiences that convert visitors into loyal customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
