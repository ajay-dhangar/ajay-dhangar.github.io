import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiPlusCircle, FiPhoneCall, FiUserCheck, FiShield, FiActivity } from 'react-icons/fi';

const HealthcareServices = () => {
  const services = [
    {
      icon: FiHeart,
      title: 'Primary Healthcare',
      description: 'Accessible healthcare services for rural and urban communities',
      features: ['Community health centers', 'Free check-ups', 'Emergency response', 'Preventive healthcare']
    },
    {
      icon: FiPlusCircle,
      title: 'Hospital & Specialist Care',
      description: 'Support for hospital admissions, specialist doctors, and treatments',
      features: ['Hospital OPD/IPD', 'Specialist consultations', 'Diagnostics & lab tests', 'Surgical care']
    },
    {
      icon: FiPhoneCall,
      title: 'Telemedicine & e-Health',
      description: 'Remote medical consultation and digital healthcare platforms',
      features: ['24/7 helpline', 'Video doctor consultations', 'Mobile health apps', 'Digital prescriptions']
    },
    {
      icon: FiUserCheck,
      title: 'Maternal & Child Care',
      description: 'Special services for mothers, newborns, and child healthcare',
      features: ['Antenatal check-ups', 'Nutrition support', 'Child immunization', 'Growth monitoring']
    },
    {
      icon: FiShield,
      title: 'Vaccination & Immunization',
      description: 'Programs for routine immunization and preventive health',
      features: ['Routine child vaccines', 'Adult immunization', 'Covid-19 vaccination', 'Health awareness drives']
    },
    {
      icon: FiActivity,
      title: 'Health Awareness & Wellness',
      description: 'Education and campaigns for disease prevention and wellness',
      features: ['Awareness programs', 'Yoga & wellness camps', 'Lifestyle counseling', 'Nutrition guidance']
    }
  ];

  return (
    <Layout
      title="Healthcare Services"
      description="Affordable and accessible healthcare, telemedicine, vaccination, and wellness programs for all."
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="rn58c9eOt8ij52CdcS8Lk4rx-8yUCjCkRsCDrycQfW4"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/online/more" 
                className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to More Services
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Services</h1>
              <p className="text-xl text-red-100 leading-relaxed max-w-4xl">
                Good health is the foundation of a strong community. Our healthcare services 
                cover primary care, hospitals, telemedicine, vaccination, and wellness programs 
                to ensure every citizen stays healthy and safe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-red-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Healthcare Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We ensure patients receive the right healthcare support through a simple and reliable process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Identify healthcare needs and provide guidance' },
                { step: '02', title: 'Diagnosis', desc: 'Conduct check-ups, lab tests, and specialist reviews' },
                { step: '03', title: 'Treatment', desc: 'Provide medicines, therapies, or hospital care' },
                { step: '04', title: 'Follow-up', desc: 'Monitor recovery and offer continuous support' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Medical Assistance?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Our healthcare team provides expert consultation, hospital support, vaccination drives, and telemedicine services. 
                Get in touch for reliable healthcare support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
                  Contact Us Now
                </Link>
                <a href="tel:+917024592105" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
                  Call +91 70245 92105
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareServices;