import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Digital Authority
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We help service-based businesses build trust, visibility, and growth through structured digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg hover:scale-105"
            >
              Request Strategy
            </Link>
            <Link
              to="/our-work"
              className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg hover:scale-105"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-400">Digital Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">₹50 Cr+</div>
              <div className="text-gray-400">Business Value Enabled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
