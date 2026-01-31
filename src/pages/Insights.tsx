import { Target, TrendingUp, Award, Users } from 'lucide-react';

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
    <div className="pt-24">
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why Perceptra</h2>
            <p className="text-xl text-gray-400">Your partner in building lasting digital authority</p>
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
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-black border border-red-500/20 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Growth-Focused Systems</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every system we build is designed with one goal: sustainable growth. From first contact to long-term retention, we engineer digital experiences that convert visitors into loyal customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
