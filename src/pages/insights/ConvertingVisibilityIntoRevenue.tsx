import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ConvertingVisibilityIntoRevenue() {
  return (
    <>
      <Helmet>
        <title>
          Converting Visibility into Revenue | Digital Strategy Framework | Perceptra
        </title>
        <meta
          name="description"
          content="Visibility alone does not drive business growth. Learn how conversion systems turn traffic, attention, and awareness into consistent revenue."
        />
        <link
          rel="canonical"
          href="https://www.perceptra.in/insights/converting-visibility-into-revenue"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Converting Visibility into Revenue – The Missing Link in Digital Strategy"
        />
        <meta
          property="og:description"
          content="Why traffic without conversion systems fails, and how to turn visibility into measurable revenue."
        />
        <meta
          property="og:url"
          content="https://www.perceptra.in/insights/converting-visibility-into-revenue"
        />
        <meta property="og:type" content="article" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline":
              "Converting Visibility into Revenue – The Missing Link in Digital Strategy",
            "description":
              "This article explains why visibility alone does not drive growth and how structured conversion systems turn attention into revenue.",
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
            "datePublished": "2026-01-18",
            "dateModified": "2026-01-18",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id":
                "https://www.perceptra.in/insights/converting-visibility-into-revenue"
            }
          })}
        </script>
      </Helmet>

      {/* UI — unchanged */}
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
                  Conversion
                </span>
                <span>7 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Converting Visibility into Revenue The Missing Link in Digital Strategy
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Traffic does not pay the bills. Conversions do. Most digital strategies stop at visibility missing the systems required to turn attention into revenue.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                The Visibility Trap
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Getting traffic is easy. SEO ads and social media create visibility. Visibility without conversion systems is expensive entertainment.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                The Conversion Gap
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Between visitor and client lies a gap most businesses fail to bridge. You need:
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
                <li>Clear compelling offers</li>
                <li>Conversion paths aligned to buyer intent</li>
                <li>Follow up systems that nurture trust</li>
                <li>Analytics that show real performance</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Building the Infrastructure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We build conversion systems in layers:
              </p>
              <ol className="list-decimal list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
                <li>Offer clarity</li>
                <li>Path optimization</li>
                <li>Lead nurturing</li>
                <li>Conversion tracking</li>
              </ol>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                The Compounding Effect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Once conversion systems are in place every improvement compounds. Better traffic converts better. Better offers close faster.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Visibility creates attention. Conversion systems create revenue.
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
