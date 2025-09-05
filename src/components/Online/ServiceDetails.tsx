import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@site/src/data/services';
import { FiArrowLeft, FiPhone, FiMail, FiMapPin, FiCheck } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface ServiceDetailsProps {
  serviceId?: string; // allow passing ID as prop
}

  const socialLinks = [
    { icon: FaWhatsapp, name: 'WhatsApp', link: 'https://wa.me/917024592105', color: 'text-green-500' },
    { icon: FaFacebook, name: 'Facebook', link: '#', color: 'text-blue-500' },
    { icon: FaInstagram, name: 'Instagram', link: '#', color: 'text-pink-500' },
    { icon: FaLinkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/in/ajay-dhangar/', color: 'text-blue-400' }
  ];

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const { id: routeId } = useParams<{ id: string }>();
  const id = serviceId || routeId; // prefer prop, fallback to URL param

  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/online/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/online/services"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Services
            </Link>

            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">{service.icon}</div>
              <div>
                <span className="inline-block bg-blue-500 text-blue-100 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {service.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
              </div>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What is */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What is {service.title}?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.whatIs}
                </p>
              </motion.div>

              {/* Why Needed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Why is it needed?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.whyNeeded}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FiCheck className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How We Help */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  How can we help?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.howWeHelp}
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary">
                    Contact Us Now
                  </Link>
                  <a href="tel:+917024592105" className="btn-secondary">
                    Call +91 7024592105
                  </a>
                </div> */}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Get Quick Support
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Call Us: </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">+91 7024592105</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Email Us: </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">ajaydhangar49@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">Visit Us: </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Gujarda, Mandsaur, MP, India - 458002</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact */}
              <div className="card p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6">Call us directly or WhatsApp for instant support</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917024592105"
                    className="flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FiPhone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917024592105"
                    className="flex items-center text-gray-100 hover:text-white justify-center bg-green-600 hover:bg-green-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow us on social media for updates and tips
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${social.color} hover:scale-110 transform duration-300`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {services
                    .filter(s => s.category === service.category && s.id !== service.id)
                    .slice(0, 3)
                    .map(relatedService => (
                      <Link
                        key={relatedService.id}
                        to={`/online/services/${relatedService.id}`}
                        className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{relatedService.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {relatedService.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
