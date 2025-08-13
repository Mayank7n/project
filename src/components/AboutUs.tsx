import React from 'react';
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
            About S.K Enterprises
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              S.K Enterprises has been a trusted name in the engineering and fabrication industry, 
              providing comprehensive solutions to meet diverse industrial and commercial needs. 
              Our journey began with a simple vision: to deliver exceptional quality and service 
              that exceeds our clients' expectations.
            </p>
            <p className="mb-6">
              Over the years, we have built a reputation for excellence through our commitment to 
              quality craftsmanship, innovative solutions, and reliable service. Our team of skilled 
              professionals brings together decades of combined experience in welding, fabrication, 
              cold room installation, and staircase construction.
            </p>
            <p>
              We take pride in our ability to handle projects of all sizes, from small residential 
              installations to large commercial and industrial projects. Our dedication to continuous 
              improvement and customer satisfaction has made us a preferred partner for businesses 
              and individuals seeking reliable engineering solutions.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
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
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To provide innovative, reliable, and cost-effective engineering solutions while 
            maintaining the highest standards of quality and safety. We strive to build 
            lasting relationships with our clients through exceptional service and 
            professional excellence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;