import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const HeroImg = "/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white overflow-hidden p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="relative section-padding min-h-[80vh]">
        <div className="container-max mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              MP Online Digital Services
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-200">
                One Stop Solution for All Digital Needs
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-8 mb-8 text-xl"
            >
              <span className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Fast
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Reliable
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Affordable
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl"
            >
              From government certificates to digital payments, banking services
              to educational forms - we provide comprehensive digital solutions
              to make your life easier. Experience hassle-free service with our
              expert team and modern technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                Explore Services
                <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:block w-1/2">
            <img
              src={HeroImg}
              alt="Description"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
