import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LocalSeoVsNationalAuthority() {
  return (
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
              <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded">SEO</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Local SEO vs National Authority Which Strategy Wins
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Should you dominate your local market or compete nationally? The answer is not either or. Discover how to layer local SEO foundations with national authority building to create a competitive advantage that works at every scale.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Should you dominate your local market or compete nationally? The answer is both done strategically.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Local SEO The Foundation</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              For service businesses local SEO is non negotiable. If you serve clients in person or in specific regions local visibility drives immediate business. Google Business Profile local citations and location specific content create fast wins.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">National Authority The Amplifier</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Local SEO alone limits growth. National authority positions you as an industry leader attracts higher value clients and unlocks opportunities beyond geography.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Layered Approach</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Smart businesses layer both:
            </p>
            <ol className="list-decimal list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
              <li>Start local and dominate your immediate market</li>
              <li>Build authority through content and thought leadership</li>
              <li>Scale strategically into new markets with credibility</li>
            </ol>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">When to Prioritize Which</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Early stage businesses should focus local. Established brands should add national authority. The key is knowing when to shift resources while maintaining both.
            </p>
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-900/20 to-black border border-red-500/20 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Authority?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Let us discuss how these strategies can work for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg"
            >
              Request Strategy Session
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
