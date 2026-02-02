import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DigitalAuthoritySystems() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          The Digital Authority System Every Service Business Needs | Perceptra
        </title>
        <meta
          name="description"
          content="Learn how the Digital Authority System integrates SEO, content, trust signals, and conversion architecture to help service businesses earn trust and scale sustainably."
        />
        <link
          rel="canonical"
          href="https://www.perceptra.in/insights/digital-authority-systems"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="The Digital Authority System Every Service Business Needs"
        />
        <meta
          property="og:description"
          content="A complete framework explaining how integrated digital authority systems drive trust, conversions, and long-term growth."
        />
        <meta
          property="og:url"
          content="https://www.perceptra.in/insights/digital-authority-systems"
        />
        <meta property="og:type" content="article" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline":
              "The Digital Authority System Every Service Business Needs",
            "description":
              "An in-depth guide to building integrated digital authority systems that earn trust, improve conversions, and compound growth for service businesses.",
            "author": {
              "@type": "Organization",
              "name": "Perceptra"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Perceptra"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id":
                "https://www.perceptra.in/insights/digital-authority-systems"
            }
          })}
        </script>
      </Helmet>

      {/* Page UI */}
      <div className="pt-24 min-h-screen bg-gray-950">
        <div className="container mx-auto px-6 py-16">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded">
                  Authority Systems
                </span>
                <span>10 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                The Digital Authority System Every Service Business Needs
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Authority is engineered through systems that work together to earn trust at scale.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Most service businesses approach digital marketing as a collection of disconnected tactics. A website here, some social media there, maybe occasional content. This fragmented approach fails because authority requires integration.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                The Digital Authority System is a framework that connects every touchpoint into a cohesive trust building machine. When implemented correctly it transforms how prospects discover, evaluate, and choose to work with you.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Component One: Foundation Architecture
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Everything starts with foundation architecture. Your website is not a brochure. It is the central hub where all authority signals converge.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                This foundation must be built for growth. As you add content, expand services, or enter new markets, the architecture scales without requiring rebuilds.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Component Two: Discovery Engines
              </h2>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
                <li>SEO systems that rank for high intent keywords</li>
                <li>Content marketing that attracts organic traffic</li>
                <li>Strategic positioning in directories and buyer platforms</li>
                <li>Referral systems that turn clients into advocates</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Component Three: Trust Accelerators
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trust accelerators compress the time between first contact and buying decision through social proof, expertise, and authority signals.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Component Four: Conversion Architecture
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Conversion architecture turns interest into revenue through aligned offers, friction reduction, nurturing, and tracking.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Component Five: Authority Amplification
              </h2>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
                <li>Strategic content distribution</li>
                <li>Speaking and thought leadership</li>
                <li>Partnerships and media visibility</li>
                <li>Borrowed authority platforms</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                System Integration
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Integrated systems multiply results. Disconnected tactics decay over time.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Measurement and Optimization
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Authority is measured through quality visibility, conversion efficiency, and increasing client value.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Implementation
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Start with foundation, layer strategically, and scale systematically with integration in mind.
              </p>
            </div>

            <div className="mt-16 bg-gradient-to-r from-red-900/20 to-black border border-red-500/20 rounded-lg p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Authority?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Let us discuss how these strategies can work for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg"
              >
                Request Strategy
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
