import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiUsers,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";
import { Target, Eye, Users, Award, CheckCircle, Star } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Ajay Dhangar",
      role: "Founder & CEO",
      image:
        "https://github.com/ajay-dhangar.png",
      description: "Expert in government processes with 15+ years experience",
    },
    {
      name: "Pankaj Vishwakarma",
      role: "Operations Manager",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      description: "Ensures smooth operations and customer satisfaction",
    },
    {
      name: "Balaram Mehar",
      role: "Technical Lead",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
      description: "Digital solutions architect and system optimization expert",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Our team consists of certified professionals with extensive experience in government processes",
    },
    {
      icon: CheckCircle,
      title: "Quick Turnaround",
      description:
        "We ensure fast processing of applications with regular status updates",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description:
        "99% customer satisfaction rate with personalized service approach",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 customer support to help you with any queries or concerns",
    },
  ];

  // const values = [
  //   {
  //     icon: FiTarget,
  //     title: "Our Mission",
  //     description:
  //       "To simplify digital services and bridge the technology gap for every citizen, making government and digital services accessible to all.",
  //   },
  //   {
  //     icon: FiEye,
  //     title: "Our Vision",
  //     description:
  //       "To become the most trusted digital service provider in Madhya Pradesh, empowering communities through technology.",
  //   },
  //   {
  //     icon: FiHeart,
  //     title: "Our Values",
  //     description:
  //       "Integrity, reliability, customer-first approach, and commitment to making technology work for everyone.",
  //   },
  // ];

  const features = [
    {
      icon: FiUsers,
      title: "Expert Team",
      description:
        "Trained professionals with deep knowledge of government processes and digital services",
    },
    {
      icon: FiAward,
      title: "Quality Service",
      description:
        "Commitment to excellence with 99.9% success rate and customer satisfaction",
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Growth",
      description:
        "Constantly expanding our services to meet evolving digital needs",
    },
  ];

  return (
    <Layout
          title={`Online Digital Services`}
          description="Welcome to our online digital services page."
        >
          <Head>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
              crossOrigin="anonymous"
            />
            <script
              async
              custom-element="amp-auto-ads"
              src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
            />
            <meta
              name="google-site-verification"
              content="rn58c9eOt8ij52CdcS8Lk4rx-8yUCjCkRsCDrycQfW4"
            />
          </Head>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white section-padding dark:from-blue-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are dedicated to making digital services accessible, reliable,
              and affordable for every citizen. Our journey began with a simple
              mission: to bridge the digital divide and empower communities
              through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      {/* <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <value.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                To simplify government processes and make digital services accessible to everyone. 
                We aim to bridge the gap between citizens and government services by providing 
                efficient, reliable, and transparent solutions that save time and reduce bureaucratic hassles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                To become the leading digital service provider in Madhya Pradesh, enabling a 
                paperless and hassle-free experience for all government-related services. We envision 
                a future where every citizen can access services with just a few clicks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded with the vision of making digital services accessible
                  to everyone, MP Online Digital Services started as a small
                  initiative to help people navigate the complex world of
                  government documentation and digital transactions.
                </p>
                <p>
                  Over the years, we've grown to serve thousands of customers
                  across Madhya Pradesh, helping them with everything from birth
                  certificates to digital payments. Our success is built on
                  trust, reliability, and a deep understanding of our customers'
                  needs.
                </p>
                <p>
                  Today, we continue to expand our services, embrace new
                  technologies, and train our team to provide the best possible
                  experience for our customers. We believe that technology
                  should simplify life, not complicate it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  10,000+
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Happy Customers Served
                </p>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  50+
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Different Services Offered
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  99.9%
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We stand out through our commitment to excellence and customer
              satisfaction and we provide exceptional service with professionalism and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}

        <div className="max-w-7xl mx-auto py-4">          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to providing you the best
              service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their
              digital service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-secondary bg-white text-blue-600 hover:bg-gray-100"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="btn-primary bg-blue-500 hover:bg-blue-600"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default About;
