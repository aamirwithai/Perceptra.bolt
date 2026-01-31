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

export default function Journey() {
  return (
    <section id="about" className="py-24 bg-black">
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
  );
}
