import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AboutWork from './components/AboutWork';
import StructuredData from './components/StructuredData';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showLanding) {
    return <LandingPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'work':
        return <AboutWork setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <title>S.K PUF Panel - Premium PUF Panel Solutions</title>
        <meta name="description" content="Leading manufacturer and supplier of high-quality PUF Panels, cold rooms, and fabrication works. Get durable and energy-efficient PUF panel solutions." />
      </Helmet>
      <StructuredData />
      {showLanding ? (
        <LandingPage />
      ) : (
        <>
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main role="main" id="main-content">
            {renderPage()}
          </main>
        </>
      )}
    </div>
  );
}

export default App;