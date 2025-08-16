import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Wrench, Snowflake, Hammer, Mail, Phone } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Welding Work',
      description: 'Professional welding services for all your industrial and commercial needs.'
    },
    {
      icon: <Snowflake className="w-12 h-12 text-blue-600" />,
      title: 'Cold Rooms',
      description: 'Complete cold room solutions with installation and maintenance services.'
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: 'Fabrication Works',
      description: 'Custom metal fabrication services with precision and quality craftsmanship.'
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: 'All Type of Staircase',
      description: 'Design and installation of various types of staircases for residential and commercial spaces.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SK PUF Panel (Formerly SK Enterprises) | PUF Panel Work & Installation Services</title>
        <meta 
          name="description" 
          content="SK PUF Panel (formerly SK Enterprises) - Leading PUF panel manufacturer & installer in Mathura. Expert PUF panel work, cold room installation, and fabrication services. Get a free quote today!" 
        />
        <meta 
          name="keywords" 
          content="SK PUF Panel, SK Enterprises, S.K. Enterprises, PUF panel work, PUF panel installation, PUF panel contractor Mathura, cold room installation, PUF panel manufacturer, industrial PUF panels, PUF panel services Mathura" 
        />
        <meta property="og:title" content="SK PUF Panel (Formerly SK Enterprises) | PUF Panel Experts" />
        <meta property="og:description" content="Formerly known as SK Enterprises, we are now SK PUF Panel - your trusted PUF panel work and installation experts in Mathura." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skpufpanel.com" />
        <link rel="canonical" href="https://skpufpanel.com" />
      </Helmet>
      
      {/* Hero Section */}
      <motion.header
        role="banner"
        aria-label="Main header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            SK PUF Panel <span className="text-blue-200">(Formerly SK Enterprises)</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100" 
            aria-label="Tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your Trusted PUF Panel Experts in Mathura Since 2020
          </motion.p>
        </div>
      </motion.header>

      {/* About Our Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive engineering solutions with years of expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('work')}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setCurrentPage('work')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:mthakur35610@gmail.com" className="hover:text-blue-400 transition-colors">
                    mthakur35610@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="tel:9068324872" className="hover:text-blue-400 transition-colors">
                    9068324872
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                All Rights Reserved &copy; S.K PUF Panel
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Owner: Bhoopendra Singh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;