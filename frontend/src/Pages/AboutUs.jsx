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
        About Sanchita Enterprises
      </motion.h1>

      {/* Company Description */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          Sanchita Enterprises is a leading provider of sustainable waste
          management solutions. With a focus on efficiency and eco-friendliness,
          we strive to keep communities clean and reduce environmental impact.
          Our team is dedicated to offering the highest quality service and
          ensuring a better, greener future.
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
            To be a leader in waste management, providing efficient,
            cost-effective, and environmentally-friendly solutions for
            businesses and communities.
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
            Our mission is to provide our clients with reliable and affordable
            waste management services, ensuring a cleaner, healthier environment
            for future generations.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-8"
      >
        {/* Google Maps Embed */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4&key=YOUR_GOOGLE_MAPS_API_KEY`}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
