import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    interestedService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          interested_service: formData.interestedService,
          message: formData.message
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessType: '',
        interestedService: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Let's Build Your Digital Authority</h2>
          <p className="text-xl text-gray-400">Start your journey to digital dominance</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-300 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-gray-300 mb-2 font-medium">
                  Business Type *
                </label>
                <input
                  type="text"
                  id="businessType"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="E.g., Healthcare, Legal"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interestedService" className="block text-gray-300 mb-2 font-medium">
                Interested Service *
              </label>
              <select
                id="interestedService"
                required
                value={formData.interestedService}
                onChange={(e) => setFormData({ ...formData, interestedService: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="authority-websites">Authority Websites</option>
                <option value="brand-positioning">Brand Positioning & Messaging</option>
                <option value="local-seo">Local Digital Authority (SEO)</option>
                <option value="performance-marketing">Performance Marketing</option>
                <option value="lead-systems">Lead & Conversion Systems</option>
                <option value="reputation">Reputation & Trust Assets</option>
                <option value="content-social">Content & Social Presence</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="maintenance">Maintenance & Growth Retainers</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Tell us about your project and goals..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 text-green-400">
                Thank you for your interest! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                There was an error submitting your form. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-all font-medium text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Request Strategy Session'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
