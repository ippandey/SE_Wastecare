import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../Components/HomePage/FAQSection";
import truckpic from "../assets/truck-pic.png";
import commercialwaste from "../assets/commercial-waste.png";
import residentialwaste from "../assets/residential-waste.png";
import recycling from "../assets/recycling.png";
import team from "../assets/team.png";

const HomePage = () => {
  return (
    <div className="font-work">
      {/* Hero Section */}
      <section className="relative bg-green-100 flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-green-700"
          >
            Clean Cities, Better Lives.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700 text-lg"
          >
            We provide reliable garbage collection, recycling solutions, and
            eco-friendly waste management for a greener tomorrow.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700"
          >
            Request Pickup
          </motion.button>
        </div>

        {/* Hero Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={truckpic} // 📸 Image needed: Garbage truck with city background
          alt="Garbage Truck"
          className="md:w-1/2 rounded-xl"
        />
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={residentialwaste}
              alt="Residential"
              className="mb-6 rounded-t-lg"
            />{" "}
            {/* 📸 Image: House garbage pickup */}
            <h3 className="font-semibold text-xl mb-3">Residential Pickup</h3>
            <p className="text-gray-600">
              Doorstep garbage collection for homes and societies with a
              commitment to hygiene and timely service.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 rounded-lg p-6 shadow-md text-center"
          >
            <div className="relative">
              <img
                src={commercialwaste}
                alt="Commercial"
                className="mb-6 rounded-t-lg"
              />
            </div>
            <h3 className="font-semibold text-xl mb-3">Commercial Waste</h3>
            <p className="text-gray-600">
              Professional waste management solutions for businesses, offices,
              and industries to stay clean and compliant.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={recycling}
              alt="Recycling"
              className="mb-6 rounded-t-lg"
            />{" "}
            {/* 📸 Image: Recycling symbol or activity */}
            <h3 className="font-semibold text-xl mb-3">Recycling Solutions</h3>
            <p className="text-gray-600">
              We help segregate recyclable materials and ensure they are reused
              to build a sustainable environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-green-100">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Why Choose Sanchita Enterprises?
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/2 space-y-6"
          >
            <h3 className="text-xl font-semibold">Eco-Friendly Operations</h3>
            <p className="text-gray-700">
              We use environment-friendly vehicles and proper waste segregation
              techniques to reduce our carbon footprint.
            </p>
            <h3 className="text-xl font-semibold">Affordable Pricing</h3>
            <p className="text-gray-700">
              Transparent and competitive pricing suitable for all —
              individuals, societies, and businesses.
            </p>
            <h3 className="text-xl font-semibold">On-Time Collection</h3>
            <p className="text-gray-700">
              Our dedicated team ensures your garbage is picked up without any
              delay, keeping your surroundings clean.
            </p>
          </motion.div>

          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={team} // 📸 Image: Team doing eco-friendly waste management
            alt="Eco Team"
            className="md:w-1/2 rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-green-700 text-white text-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Join Us in Building a Cleaner Future!
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100"
        >
          Schedule Your Pickup
        </motion.button>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-white">
        <h1 className="text-4xl text-center font-bold py-10">
          Welcome to Sanchita Enterprises
        </h1>

        <FAQSection />
      </section>
    </div>
  );
};

export default HomePage;
