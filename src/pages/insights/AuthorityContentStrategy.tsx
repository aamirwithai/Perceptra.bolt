import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AuthorityContentStrategy() {
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
              <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded">Content Strategy</span>
              <span>9 min read</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              How Authority Content Compounds Trust and Revenue
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Expert driven content builds credibility that compounds over time turning attention into long term growth.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Content marketing fails when treated as a volume game. Publishing dozens of shallow articles will not build authority. What works is strategic expert driven content that demonstrates real understanding of your client's challenges.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Authority Content Difference</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Authority content is not created for algorithms. It is created for decision makers who need answers. Every piece serves a strategic purpose in the buyer journey. It educates, builds trust, and positions your business as the obvious choice.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Compounding Trust Effect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you consistently publish valuable content several things happen:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
              <li>Search engines recognize your topical authority and rank you higher</li>
              <li>Prospects discover multiple pieces of your content building familiarity</li>
              <li>Referrals increase because your expertise is visible and shareable</li>
              <li>Sales cycles shorten because prospects arrive pre educated and trusting</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-6">
              This is the compounding effect. Each piece of content builds on previous work creating an expanding foundation of authority that competitors cannot easily replicate.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Makes Content Authority Driven</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Authority content has specific characteristics:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
              <li>Deep topic coverage that answers questions completely</li>
              <li>Practical frameworks prospects can immediately apply</li>
              <li>Clear point of view backed by experience</li>
              <li>Strategic positioning that differentiates your approach</li>
              <li>Natural demonstration of expertise without explicit selling</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Strategic Content Framework</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Building authority through content requires a framework not random publishing. Start by mapping the questions your ideal clients ask at each stage of their journey. Create comprehensive answers that showcase your expertise while guiding them toward working with you.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Organize content into topic clusters that demonstrate deep knowledge in specific areas. Link related pieces together creating pathways that keep prospects engaged with your expertise.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Distribution Amplifies Authority</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Great content hidden on your website builds nothing. Authority requires strategic distribution. Share insights where your prospects spend time. Repurpose core ideas across multiple formats and channels. Let your expertise reach people before they even know they need your services.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Measuring What Matters</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pageviews and likes are vanity metrics. Authority content is measured by qualified leads generated, sales conversations started, and how often prospects mention your content during sales calls. Track how content moves prospects through your pipeline not just how many people see it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Long Term Play</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Authority content is a long term investment that pays compounding returns. The content you publish today will attract and convert prospects years from now. While competitors chase quick wins through paid ads your authority content works 24/7 building trust and driving revenue.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              This is how service businesses win in competitive markets. Not through louder marketing but through demonstrated expertise that makes the buying decision obvious.
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
              Request Strategy
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
