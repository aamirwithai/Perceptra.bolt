import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Perceptra</title>

        {/* IMPORTANT: 404 pages must NOT be indexed */}
        <meta name="robots" content="noindex, follow" />

        {/* Optional but clean */}
        <meta
          name="description"
          content="The page you are looking for could not be found. Explore Perceptra’s authority systems, insights, and digital growth solutions."
        />

        {/* Open Graph (optional) */}
        <meta property="og:title" content="404 – Page Not Found | Perceptra" />
        <meta
          property="og:description"
          content="This page no longer exists. Discover Perceptra’s digital authority frameworks and insights."
        />
      </Helmet>

      {/* EXISTING UI — UNCHANGED */}
      <div className="pt-24 min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
              <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-400 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg"
              >
                <Home size={24} />
                Go to Homepage
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg border border-white/10"
              >
                <ArrowLeft size={24} />
                Go Back
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-500 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About
                </Link>
                <Link to="/authority-systems" className="text-gray-400 hover:text-red-500 transition-colors">
                  Authority Systems
                </Link>
                <Link to="/our-work" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Work
                </Link>
                <Link to="/insights" className="text-gray-400 hover:text-red-500 transition-colors">
                  Insights
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
