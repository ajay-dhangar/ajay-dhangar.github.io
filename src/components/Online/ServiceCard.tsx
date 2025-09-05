import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Service } from '../../data/services';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div>
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full font-medium mb-2">
              {service.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <Link
          to={`/online/services/${service.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
        >
          Learn More
          <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;