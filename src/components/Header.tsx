import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/perceptra_logo.png" alt="Perceptra" className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="relative text-gray-300 hover:text-white transition-colors group">
              Home
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative text-gray-300 hover:text-white transition-colors group">
              About
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/authority-systems" className="relative text-gray-300 hover:text-white transition-colors group">
              Authority Systems
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/our-work" className="relative text-gray-300 hover:text-white transition-colors group">
              Our Work
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/insights" className="relative text-gray-300 hover:text-white transition-colors group">
              Insights
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="relative text-gray-300 hover:text-white transition-colors group">
              Contact
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
          >
            Request Strategy
          </Link>
        </div>
      </div>
    </header>
  );
}
