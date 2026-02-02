import { Helmet } from "react-helmet-async";
import { Target, Award, TrendingUp, Users } from 'lucide-react';

const stages = [
  {
    title: 'Foundation',
    description: 'Started with a vision to help service businesses build authentic digital authority, not just online presence.'
  },
  {
    title: 'Evolution',
    description: 'Refined our approach through diverse industry projects, developing proprietary systems for sustainable growth.'
  },
  {
    title: 'Refinement',
    description: 'Focused exclusively on authority-first strategies, eliminating tactics that prioritize vanity over value.'
  },
  {
    title: 'Today',
    description: 'Trusted partner for ambitious service businesses seeking systematic, scalable digital authority systems.'
  },
  {
    title: 'Vision Ahead',
    description: 'Expanding our impact by empowering more businesses to build lasting digital authority and market leadership.'
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Perceptra | Crafting Digital Authority</title>
        <meta
          name="description"
          content="Learn about Perceptra’s journey, mission, and authority-first approach to building scalable, high-performance digital brands."
        />
        <link rel="canonical" href="https://www.perceptra.in/about" />

        {/* Optional Open Graph for social sharing */}
        <meta property="og:title" content="About Perceptra | Crafting Digital Authority" />
        <meta
          property="og:description"
          content="Discover how Perceptra helps service businesses build lasting digital authority through structured systems and premium execution."
        />
        <meta property="og:url" content="https://www.perceptra.in/about" />
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
      <div className="pt-24">
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From vision to execution, our evolution reflects our commitment to building digital authority that lasts.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 md:pl-16">
                <div className="absolute left-2 md:left-6 top-0 bottom-0 w-0.5 bg-red-600/30" />

                <div className="space-y-12">
                  {stages.map((stage, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-[-2rem] md:left-[-2.5rem] top-0 w-4 h-4 bg-red-600 rounded-full ring-4 ring-black" />

                      <div className="transition-all duration-300 hover:translate-x-2">
                        <h3 className="text-2xl font-bold text-white mb-3">{stage.title}</h3>
                        <p className="text-lg text-blue-300/80 leading-relaxed">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">About PERCEPTRA</h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                We're on a mission to help service-based businesses build lasting digital authority through structured systems, strategic thinking, and premium execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower service-based businesses with the digital authority systems they need to build trust, attract ideal clients, and achieve sustainable growth in competitive markets.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  We don't chase trends or offer one-size-fits-all solutions. We build custom authority systems tailored to your business, market, and growth goals—designed to compound value over time.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Authority-Led Growth</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  We design digital ecosystems that position your brand as the trusted authority in your industry, enabling long-term visibility, credibility, and compounding business growth across channels.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Digital Foundations</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Our systems are engineered to scale—supporting business expansion, increasing demand, and evolving market needs without sacrificing performance, consistency, or brand authority.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">What Sets Us Apart</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Long-Term Partnerships</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  We invest in relationships, not transactions. Your success is our success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Systems-First Thinking</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  We build infrastructure that scales with your business and compounds over time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Standards</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Every project reflects the authority you want to project no shortcuts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
