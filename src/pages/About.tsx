import { Helmet } from "react-helmet-async";
import { Target, Award, TrendingUp, Users } from 'lucide-react';

const stages = [
  {
    title: 'Foundation',
    description: 'Started with a vision to become the best website development company in Mumbai by helping service businesses build authentic digital authority—not just online presence.'
  },
  {
    title: 'Evolution',
    description: 'Refined our approach through diverse industry projects across Mumbai, Navi Mumbai, and Thane—developing proprietary systems for sustainable digital growth.'
  },
  {
    title: 'Refinement',
    description: 'Focused exclusively on authority-first strategies, eliminating tactics that prioritize vanity over value while delivering scalable website and SEO systems.'
  },
  {
    title: 'Today',
    description: 'Recognized as a trusted website development company in Navi Mumbai and a reliable freelance website developer in Mumbai for businesses seeking structured growth.'
  },
  {
    title: 'Vision Ahead',
    description: 'Expanding our impact across Mumbai and Thane by delivering premium website development, transparent website designers in Mumbai charges, and performance-driven digital systems.'
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Best Website Development Company in Mumbai | Perceptra</title>

        <meta
          name="description"
          content="Perceptra is a leading website development company in Mumbai and Navi Mumbai, offering SEO-driven websites, transparent website designers in Mumbai charges, and scalable digital systems for modern businesses."
        />

        <meta
          name="keywords"
          content="Best website development company in Mumbai, Freelance website developer in Mumbai, Website development company in Navi Mumbai, Website designers in Mumbai charges, Website developer in Thane"
        />

        <link rel="canonical" href="https://perceptra.in/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Website Development Company in Mumbai | Perceptra" />
        <meta
          property="og:description"
          content="Discover how Perceptra builds scalable, SEO-optimized websites and digital authority systems for businesses across Mumbai, Navi Mumbai, and Thane."
        />
        <meta property="og:url" content="https://perceptra.in/about" />
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
      <div className="pt-24">
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From being a freelance website developer in Mumbai to becoming a trusted website development company in Navi Mumbai and Thane, our evolution reflects our commitment to building digital authority that lasts.
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
                Perceptra is positioned as the best website development company in Mumbai for service-based businesses seeking structured digital authority. We combine SEO expertise, premium web design, and scalable systems to help brands grow sustainably across Mumbai, Navi Mumbai, and Thane.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To deliver performance-driven websites and digital growth systems with transparent website designers in Mumbai charges, helping businesses dominate competitive markets.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  As a leading website developer in Thane and Mumbai, we build custom authority systems tailored to your business goals—focusing on long-term scalability and measurable growth.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Authority-Led Growth</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  We design SEO-optimized digital ecosystems that position your brand as a trusted authority, ensuring long-term visibility and compounding growth.
                </p>
              </div>

              <div className="bg-black border border-white/10 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Digital Foundations</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Our systems support expansion across Mumbai, Navi Mumbai, and beyond—without compromising performance or authority positioning.
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
                  We build lasting relationships by delivering measurable SEO and website development results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Systems-First Thinking</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Every website is engineered with structured growth systems that scale over time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Standards</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  As a premium website development company in Mumbai, we maintain uncompromising quality in execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}