import React from 'react';
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiBookOpen, FiAward, FiUsers, FiMonitor, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const EducationServices = () => {
  const services = [
    {
      icon: FiBookOpen,
      title: 'School Education',
      description: 'Support for primary, secondary, and higher secondary education in rural and urban areas',
      features: ['School enrollment', 'Exam guidance', 'Free textbooks', 'Mid-day meal program']
    },
    {
      icon: FiAward,
      title: 'Scholarships & Grants',
      description: 'Access to government and private scholarships for students of all categories',
      features: ['Merit-based scholarships', 'Caste-based scholarships', 'Minority scholarships', 'Post-matric support']
    },
    {
      icon: FiUsers,
      title: 'Skill Development',
      description: 'Enhancing employability through vocational training and job-oriented courses',
      features: ['Vocational training programs', 'Youth skill initiatives', 'Job readiness workshops', 'Certificate courses']
    },
    {
      icon: FiMonitor,
      title: 'Digital Learning',
      description: 'Access to e-learning, online courses, and digital classrooms for modern education',
      features: ['E-learning portals', 'Smart classroom support', 'Computer literacy programs', 'Online course enrollment']
    },
    {
      icon: FiGlobe,
      title: 'Adult & Rural Literacy',
      description: 'Special initiatives for adult literacy and rural education campaigns',
      features: ['Adult literacy programs', 'Community education centers', 'Evening schools', 'Awareness campaigns']
    },
    {
      icon: FiTrendingUp,
      title: 'Higher Education & Career',
      description: 'Guidance for university admissions, competitive exams, and career counseling',
      features: ['College admission support', 'Competitive exam coaching', 'Career counseling', 'Study abroad guidance']
    }
  ];

  return (
    <Layout
      title="Education Services"
      description="Comprehensive support for education, scholarships, skill development, and digital learning."
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
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/online/more" 
                className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to More Services
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Services</h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-4xl">
                Education is the foundation of progress. We provide end-to-end support for school education, 
                scholarships, digital learning, and skill development programs to empower students of all backgrounds.
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
                    <service.icon className="h-12 w-12 text-purple-600 mr-4" />
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
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></span>
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
                How We Support Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our step-by-step process ensures students and families get the right educational support without obstacles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Counseling', desc: 'Identify student needs, goals, and eligibility' },
                { step: '02', title: 'Application Support', desc: 'Help with school, scholarship, or course applications' },
                { step: '03', title: 'Training & Guidance', desc: 'Provide coaching, resources, and mentorship' },
                { step: '04', title: 'Success Tracking', desc: 'Monitor progress and ensure continued support' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
        <section className="section-padding bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help With Education Services?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Our team provides expert guidance for school admissions, scholarships, digital learning, and career development. 
                Contact us to unlock your educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#" className="btn-primary bg-white text-purple-600 hover:bg-gray-100">
                  Contact Us Now
                </Link>
                <a href="tel:+917024592105" className="btn-secondary border-white text-white hover:bg-white hover:text-purple-600">
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

export default EducationServices;