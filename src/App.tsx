import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import AuthoritySystemsPage from './pages/AuthoritySystemsPage';
import OurWork from './pages/OurWork';
import Insights from './pages/Insights';
import ContactPage from './pages/ContactPage';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';
import WhyDigitalAuthorityBeatsViralMarketing from './pages/insights/WhyDigitalAuthorityBeatsViralMarketing';
import AuthorityWebsiteFramework from './pages/insights/AuthorityWebsiteFramework';
import LocalSeoVsNationalAuthority from './pages/insights/LocalSeoVsNationalAuthority';
import ConvertingVisibilityIntoRevenue from './pages/insights/ConvertingVisibilityIntoRevenue';
import AuthorityContentStrategy from './pages/insights/AuthorityContentStrategy';
import DigitalAuthoritySystems from './pages/insights/DigitalAuthoritySystems';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authority-systems" element={<AuthoritySystemsPage />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/why-digital-authority-beats-viral-marketing" element={<WhyDigitalAuthorityBeatsViralMarketing />} />
          <Route path="/insights/authority-website-framework" element={<AuthorityWebsiteFramework />} />
          <Route path="/insights/local-seo-vs-national-authority" element={<LocalSeoVsNationalAuthority />} />
          <Route path="/insights/converting-visibility-into-revenue" element={<ConvertingVisibilityIntoRevenue />} />
          <Route path="/insights/authority-content-strategy" element={<AuthorityContentStrategy />} />
          <Route path="/insights/digital-authority-systems" element={<DigitalAuthoritySystems />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
