import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our projects and services.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience to every project.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are completed on time.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, and we tailor solutions to your needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us | S.K PUF Panel - Leading PUF Panel Manufacturer</title>
        <meta 
          name="description" 
          content="Learn about S.K PUF Panel - A trusted manufacturer of high-quality PUF panels, cold rooms, and fabrication works. Discover our commitment to quality and innovation." 
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            itemProp="headline"
          >
            About S.K PUF Panel
          </motion.h1>
          
          <motion.section 
            className="prose prose-lg max-w-none text-gray-600"
            itemProp="mainContentOfPage"
          >
            <p className="mb-4">
              Welcome to <strong>S.K PUF Panel</strong>, a leading manufacturer and supplier of high-quality PUF (Polyurethane Foam) panels and fabrication works. With years of experience in the industry, we have established ourselves as a trusted name in providing innovative and durable solutions for various industrial and commercial applications.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to deliver superior quality PUF panels and fabrication services that meet the highest industry standards. We are committed to providing energy-efficient, cost-effective, and environmentally friendly solutions to our valued customers.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Premium quality PUF panels with excellent thermal insulation</li>
              <li>Experienced and skilled workforce</li>
              <li>Customized solutions to meet specific requirements</li>
              <li>Timely delivery and reliable after-sales support</li>
              <li>Competitive pricing without compromising on quality</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">PUF Panel Manufacturing</h3>
                <p className="text-gray-600">High-quality PUF panels for cold storage, clean rooms, and industrial applications.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">Fabrication Works</h3>
                <p className="text-gray-600">Custom fabrication services to meet your specific requirements.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          <motion.div 
            className="mt-12 bg-blue-50 p-6 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Interested in our products and services? Contact us today to discuss your requirements and get a free consultation.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              aria-label="Contact us for more information"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.article>
      </main>
    </div>
  );
};

export default AboutUs;