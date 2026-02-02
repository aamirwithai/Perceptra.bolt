import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AuthorityWebsiteFramework() {
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
              <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded">Web Design</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              The Authority Website Framework Building Trust Through Structure
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Your website is not just a digital brochure. It is your most powerful authority asset when built strategically.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Most websites fail because they focus on aesthetics over authority. A beautiful site means nothing if it does not convert visitors into clients. The Authority Website Framework fixes this by prioritizing trust building architecture.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Foundation Layer Trust Signals</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Authority websites start with trust signals embedded into every element:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
              <li>Clear value propositions that speak to specific pain points</li>
              <li>Social proof strategically placed where decisions are made</li>
              <li>Professional design that matches the premium nature of your service</li>
              <li>Content structure that guides visitors through a logical journey</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Content Architecture</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Content is not just blog posts. It is the strategic deployment of information that builds credibility. Every page should answer a core question your ideal client has and move them closer to a decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conversion Pathways</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Authority websites guide visitors through intentional pathways. From awareness to consideration to decision, each step is designed to reduce friction and build trust. Clear calls to action appear at natural decision points, not randomly scattered across pages.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Technical Excellence</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Speed, security, and mobile optimization are not optional. These technical factors directly impact how prospects perceive your authority. A slow or broken site signals low quality service.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Compound Effect</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              When these elements work together, your website becomes a 24/7 authority building machine. It attracts the right prospects, educates them effectively, and converts them into clients while you focus on delivering exceptional service.
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
