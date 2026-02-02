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
