import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Phone, X } from 'lucide-react';
import pufPanelToilet from '../assets/pufpaneltoilet.jpg';
import pufPanelserventroom from '../assets/pufpanelserventroom.jpg';
import pufPanelcoldroom from '../assets/pufpanelcoldroom.jpg';
import windowsacstand from '../assets/windowacstand.jpg';
import guardroom from '../assets/pufpanelguardroom.jpg';
import slider from '../assets/slidingdoors.jpg'; 
interface AboutWorkProps {
  setCurrentPage: (page: string) => void;
}

const AboutWork: React.FC<AboutWorkProps> = ({ setCurrentPage }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectTitle: '',
    message: ''
  });
  const [selectedProject, setSelectedProject] = useState('');

  const handleContactClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowContactForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*New Project Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Project Title:* ${selectedProject}%0A` +
      `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/917895848563?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectTitle: '',
      message: ''
    });
    setShowContactForm(false);
  };
  const projects = [
    {
      id: 1,
      title: 'Puf Panel Toilet 4*12 Feet',
      category: 'PUF TOILET',
      image: pufPanelToilet,
      description: 'High-quality PUF panel toilet construction with dimensions 4x12 feet, providing excellent insulation and durability.'
    },
    {
      id: 2,
      title: 'Puf panel servant room size 15*30',
      category: 'SERVENT ROOMS',
      image: pufPanelserventroom,
      description: 'Spacious 15x30 feet PUF panel servant room offering superior thermal insulation and soundproofing.'
    },
    {
      id: 3,
      title: 'Puf panel cold room 15*30',
      category: 'COLD ROOMS',
      image: pufPanelcoldroom,
      description: 'Efficient 15x30 feet PUF panel cold room solution for optimal temperature control and energy efficiency.'
    },
    {
      id: 4,
      title: 'Windows ac stand',
      category: 'AC STAND',
      image: windowsacstand,
      description: 'Sturdy and durable window AC stand designed for secure installation and optimal air conditioning performance.'
    },
    {
      id: 5,
      title: 'Puff panel guard room size 6*4',
      category: 'GUARD ROOM',
      image: guardroom,
      description: 'Compact 6x4 feet PUF panel guard room providing weather-resistant and comfortable security post solution.'
    },
    {
      id: 6,
      title: 'Sliding Doors',
      category: 'WINDOWS AND DOORS',
      image: slider,
      description: 'Smooth-operating sliding doors with modern design, perfect for space-saving and elegant entryways.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Work Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of completed projects showcasing our expertise 
            in welding, fabrication, cold rooms, and staircase installations.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative" style={{ height: '250px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleContactClick(project.title)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact for Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Let us bring your vision to life with our expert craftsmanship and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Free Quote
            </motion.button>
            <motion.a
              href="tel:9068324872"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact for Project Details</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Title
                    </label>
                    <input
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      value={selectedProject}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide details about your project requirements..."
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 14c1.38 0 2.5-1.12 2.5-2.5S18.88 9 17.5 9 15 10.12 15 11.5s1.12 2.5 2.5 2.5zm-13-2c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2zm14.5 0c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2 .672-2 1.5-2 1.5.895 1.5 2z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutWork;