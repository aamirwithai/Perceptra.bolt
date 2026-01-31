export default function OurWork() {
  const clients = [
    'Tech Innovators',
    'Healthcare Plus',
    'Legal Partners',
    'Financial Group',
    'Real Estate Pro',
    'Education Hub',
    'Consulting Firm',
    'Design Studio'
  ];

  return (
    <div className="pt-24">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Trusted By Growing Businesses</h2>
            <p className="text-xl text-gray-400">Partnerships built on results and trust</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-white/10 rounded-lg p-8 flex items-center justify-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <span className="text-gray-500 group-hover:text-gray-300 font-semibold text-lg transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">
              Join 100+ businesses that trust Perceptra for their digital growth
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
