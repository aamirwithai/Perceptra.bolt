import { Globe, Target, Search, TrendingUp, Users, Shield, FileText, ShoppingCart, RefreshCw } from 'lucide-react';

const systems = [
  {
    number: '01',
    icon: Globe,
    title: 'Authority Websites',
    description: 'Premium, conversion-focused websites that establish your brand as the industry leader.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Brand Positioning & Messaging',
    description: 'Strategic brand development that clearly communicates your unique value and expertise.'
  },
  {
    number: '03',
    icon: Search,
    title: 'Local Digital Authority (SEO)',
    description: 'Dominate local search results and become the go-to choice in your service area.'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Performance Marketing Infrastructure',
    description: 'Data-driven advertising systems that consistently generate qualified leads.'
  },
  {
    number: '05',
    icon: Users,
    title: 'Lead & Conversion Systems',
    description: 'Automated systems that nurture prospects and convert them into loyal clients.'
  },
  {
    number: '06',
    icon: Shield,
    title: 'Reputation & Trust Assets',
    description: 'Build credibility through reviews, testimonials, and social proof frameworks.'
  },
  {
    number: '07',
    icon: FileText,
    title: 'Content & Social Presence',
    description: 'Strategic content that positions you as a thought leader and engages your audience.'
  },
  {
    number: '08',
    icon: ShoppingCart,
    title: 'E-commerce & Platform Solutions',
    description: 'Scalable digital platforms for selling products and services online.'
  },
  {
    number: '09',
    icon: RefreshCw,
    title: 'Maintenance & Growth Retainers',
    description: 'Ongoing optimization and support to ensure sustained growth and performance.'
  }
];

export default function AuthoritySystemsPage() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Authority Systems</h2>
            <p className="text-xl text-gray-400">Comprehensive solutions for digital dominance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {systems.map((system, index) => {
              const Icon = system.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0f1729] to-[#0a0f1c] border border-white/5 rounded-xl p-8 hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-[90px] font-bold text-white/5 leading-none pointer-events-none">
                    {system.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{system.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{system.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
