import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/perceptra_logo.png" alt="Perceptra" className="h-12 mb-6" />
            <p className="text-gray-400 leading-relaxed">
              Crafting digital authority for service-based businesses that seek growth, trust, and long-term success.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/authority-systems" className="block text-gray-400 hover:text-white transition-colors">
                Authority Systems
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Powai, Mumbai<br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:hello@perceptra.in" className="text-gray-400 hover:text-white transition-colors">
                  hello@perceptra.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 79770 36723
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Location</h3>
            <div className="rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30164.02092956956!2d72.89659!3d19.11715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8318b0ad4f1%3A0xb1a6b3e3f3b3e3e3!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Perceptra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
