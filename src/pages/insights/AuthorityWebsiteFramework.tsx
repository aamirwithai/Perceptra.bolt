import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AuthorityWebsiteFramework() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>The Authority Website Framework | Building Trust Through Structure | Perceptra</title>
        <meta
          name="description"
          content="Learn how the Authority Website Framework builds trust, improves conversions, and turns websites into long-term authority assets for service businesses."
        />
        <link
          rel="canonical"
          href="https://www.perceptra.in/insights/authority-website-framework"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="The Authority Website Framework – Building Trust Through Structure"
        />
        <meta
          property="og:description"
          content="A strategic framework for building authority-driven websites that convert trust into revenue."
        />
        <meta
          property="og:url"
          content="https://www.perceptra.in/insights/authority-website-framework"
        />
        <meta property="og:type" content="article" />

        {/* ARTICLE STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Authority Website Framework – Building Trust Through Structure",
            "description":
              "The Authority Website Framework explains how structured design, trust signals, and conversion pathways build digital authority.",
            "author": {
              "@type": "Organization",
              "name": "Perceptra"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Perceptra",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.perceptra.in/logo.png"
              }
            },
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.perceptra.in/insights/authority-website-framework"
            }
          })}
        </script>
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
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
                  Web Design
                </span>
                <span>7 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                The Authority Website Framework Building Trust Through Structure
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* CONTENT UNCHANGED */}
              ...
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
