// src/Pages/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="font-work py-20 px-4 md:px-20 bg-gray-50">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        About Us
      </motion.h1>

      {/* Company Description */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          Sanchita Enterprises has been a trusted name in the textile industry,
          specializing in the supply of high-quality chemicals such as dyes,
          auxiliaries, and specialty chemicals for decades. Recognizing our
          responsibility towards a sustainable future, we launched{" "}
          <strong>WasteCare</strong> — an initiative focused on promoting
          environmental safety and responsible waste management.
          <br />
          <br />
          Through WasteCare, we offer professional waste collection and
          management services, helping businesses, especially in the industrial
          and commercial sectors, safely dispose of their waste while aligning
          with eco-friendly practices. Partner with us to not only access
          top-quality chemicals but also contribute towards building a cleaner
          and greener tomorrow.
        </p>
      </motion.div>

      {/* Our Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be a pioneer in sustainable chemical supply and waste management,
            bridging the gap between industrial growth and environmental
            stewardship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower our clients with quality chemical products while offering
            them sustainable waste disposal solutions, thereby contributing to a
            healthier environment for future generations.
          </p>
        </motion.div>
      </div>

      {/* Location Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-8"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Location
          </h2>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.270779263438!2d72.86677567496528!3d21.14148478382401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff2e9794c41%3A0xafe465d174a264a3!2sGIDC%20Colony%2C%20Pandesara%2C%20Surat%2C%20Gujarat%20394121%2C%20India!5e0!3m2!1sen!2sin!4v1714315509257!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sanchita Enterprises Location"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
