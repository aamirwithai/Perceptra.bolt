import { useState } from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedService: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedService: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    interestedService: false,
    message: false
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9+\s-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      interestedService: '',
      message: ''
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.interestedService) {
      newErrors.interestedService = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  const handleWhatsAppClick = () => {
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      interestedService: true,
      message: true
    });

    if (!validateForm()) {
      return;
    }

    const whatsappMessage = `*New Contact Request*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interested Service:* ${formData.interestedService}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=917977036723&text=${encodedMessage}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24">
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Let's Build Your Digital Authority</h2>
            <p className="text-xl text-gray-400">Start your journey to digital dominance</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
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
                    onBlur={() => handleBlur('fullName')}
                    className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                      touched.fullName && errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-white/10 focus:border-red-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {touched.fullName && errors.fullName && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle size={14} />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
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
                    onBlur={() => handleBlur('email')}
                    className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-white/10 focus:border-red-500'
                    }`}
                    placeholder="john@company.com"
                  />
                  {touched.email && errors.email && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

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
                  onBlur={() => handleBlur('phone')}
                  className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    touched.phone && errors.phone
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-white/10 focus:border-red-500'
                  }`}
                  placeholder="+91 98765 43210"
                />
                {touched.phone && errors.phone && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.phone}</span>
                  </div>
                )}
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
                  onBlur={() => handleBlur('interestedService')}
                  className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    touched.interestedService && errors.interestedService
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-white/10 focus:border-red-500'
                  }`}
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
                {touched.interestedService && errors.interestedService && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.interestedService}</span>
                  </div>
                )}
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
                  onBlur={() => handleBlur('message')}
                  rows={6}
                  className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors resize-none ${
                    touched.message && errors.message
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-white/10 focus:border-red-500'
                  }`}
                  placeholder="Tell us about your project and goals..."
                />
                {touched.message && errors.message && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}