import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    title: 'About PERCEPTRA',
    content: (
      <>
        <p className="mb-4">
          PERCEPTRA is a digital branding and web presence studio that helps businesses build a credible, strategic, and growth-oriented digital identity. Our services may include, but are not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Website design and development</li>
          <li>Digital branding and positioning</li>
          <li>UX/UI structuring and content flow</li>
          <li>Digital audits and consultations</li>
          <li>Ongoing digital optimisation and support</li>
        </ul>
        <p>
          All services are delivered on a strategy-led and effort-based model and do not guarantee specific commercial outcomes.
        </p>
      </>
    )
  },
  {
    title: 'Scope of Services',
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>The scope of work is clearly defined through written communication such as proposals, invoices, emails, WhatsApp confirmations, or service agreements.</li>
        <li>Any work beyond the agreed scope requires written approval and may be charged additionally.</li>
        <li>Timelines are indicative and depend on client responsiveness, content availability, and approval cycles.</li>
        <li>PERCEPTRA reserves the right to adapt methods and execution styles while remaining aligned with agreed objectives.</li>
      </ul>
    )
  },
  {
    title: 'Client Responsibilities',
    content: (
      <>
        <p className="mb-4">Clients agree to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Provide accurate business information, content, and brand assets</li>
          <li>Ensure ownership or usage rights for all supplied materials</li>
          <li>Review and approve deliverables within reasonable timeframes</li>
          <li>Make payments as agreed</li>
        </ul>
        <p>
          Delays caused by missing inputs or feedback may impact delivery schedules without liability on PERCEPTRA.
        </p>
      </>
    )
  },
  {
    title: 'Pricing, Payments & Billing',
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>All pricing is communicated and mutually agreed upon before project initiation.</li>
        <li>Payments may be upfront, milestone-based, or recurring, depending on the service.</li>
        <li>Once work has commenced, payments are non-refundable unless explicitly stated otherwise in writing.</li>
        <li>Applicable taxes (including GST, if required) will be charged as per Indian regulations.</li>
        <li>Non-payment may result in service suspension or withholding of deliverables.</li>
      </ul>
    )
  },
  {
    title: 'No Guarantee of Results',
    content: (
      <>
        <p className="mb-4">
          While PERCEPTRA applies expertise, strategy, and industry best practices, we do not guarantee:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Sales or revenue growth</li>
          <li>Lead volume or conversion rates</li>
          <li>Search engine rankings</li>
          <li>Advertising performance or reach</li>
        </ul>
        <p>
          Digital outcomes depend on multiple external variables beyond PERCEPTRA's control.
        </p>
      </>
    )
  },
  {
    title: 'Intellectual Property Rights',
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>All creative work, designs, strategies, and deliverables remain the intellectual property of PERCEPTRA until full payment is received.</li>
        <li>Upon complete payment, clients are granted usage rights for the agreed deliverables.</li>
        <li>PERCEPTRA reserves the right to showcase completed projects in portfolios, social media, or case studies unless restricted in writing.</li>
        <li>Clients may not resell, sublicense, or commercially exploit PERCEPTRA's work without prior consent.</li>
      </ul>
    )
  },
  {
    title: 'Confidentiality',
    content: (
      <p>
        Both parties agree to maintain confidentiality of proprietary business information, internal discussions, and strategic materials shared during the engagement.
      </p>
    )
  },
  {
    title: 'Revisions & Change Requests',
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Reasonable revisions are included as per the agreed scope.</li>
        <li>Requests that significantly alter direction or exceed the scope may incur additional charges.</li>
        <li>Major change requests may also affect timelines.</li>
      </ul>
    )
  },
  {
    title: 'Third-Party Tools & Services',
    content: (
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>PERCEPTRA may integrate or work with third-party platforms such as hosting providers, domain registrars, plugins, analytics tools, or AI services.</li>
        <li>PERCEPTRA is not liable for third-party service interruptions, policy changes, or limitations.</li>
        <li>Clients are responsible for maintaining their third-party subscriptions unless explicitly stated otherwise.</li>
      </ul>
    )
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <p className="mb-4">To the fullest extent permitted under Indian law:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>PERCEPTRA shall not be liable for indirect, incidental, or consequential damages.</li>
          <li>Any liability shall not exceed the total amount paid by the client for the specific service engaged.</li>
        </ul>
      </>
    )
  },
  {
    title: 'Termination of Engagement',
    content: (
      <>
        <p className="mb-4">Either party may terminate the engagement if there is:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Breach of these terms</li>
          <li>Prolonged payment delays</li>
          <li>Misrepresentation or unethical conduct</li>
        </ul>
        <p>
          Work completed up to the termination date will be chargeable, and no refunds will apply for effort already invested.
        </p>
      </>
    )
  },
  {
    title: 'Professional Conduct',
    content: (
      <p>
        All communication is expected to remain respectful and professional. PERCEPTRA reserves the right to disengage from clients whose conduct is abusive, unethical, or misaligned with professional standards.
      </p>
    )
  },
  {
    title: 'Governing Law & Jurisdiction',
    content: (
      <p>
        These Terms & Conditions shall be governed by the laws of India, with jurisdiction in the courts of Mumbai, Maharashtra, unless otherwise agreed in writing.
      </p>
    )
  },
  {
    title: 'Updates to These Terms',
    content: (
      <p>
        PERCEPTRA may revise these Terms & Conditions periodically. Continued use of the website or services signifies acceptance of the updated terms.
      </p>
    )
  }
];

export default function TermsAndConditions() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            By accessing our website, engaging with our services, or communicating with us in any form, you agree to comply with and be bound by the following Terms & Conditions.
          </p>
          <p className="text-gray-500">Effective Date: [Insert Date]</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-300 leading-relaxed">
            Welcome to <span className="text-white font-semibold">PERCEPTRA</span>. These terms are designed to ensure transparency, professionalism, and mutual alignment in every engagement. If you do not agree with these terms, please refrain from using our website or services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-16">
            <div className="absolute left-2 md:left-6 top-0 bottom-0 w-0.5 bg-red-600/30" />

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-[-2rem] md:left-[-2.5rem] top-0 w-4 h-4 bg-red-600 rounded-full ring-4 ring-black" />

                  <div className="transition-all duration-300">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-center justify-between hover:translate-x-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                          {section.title}
                        </h3>
                        <div className="text-red-600 group-hover:text-red-500 transition-colors">
                          {openSections.includes(index) ? (
                            <ChevronUp size={24} />
                          ) : (
                            <ChevronDown size={24} />
                          )}
                        </div>
                      </div>
                    </button>

                    {openSections.includes(index) && (
                      <div className="mt-4 text-lg text-blue-300/80 leading-relaxed animate-fadeIn">
                        {section.content}
                      </div>
                    )}
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
