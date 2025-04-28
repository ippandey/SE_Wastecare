import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import blogpic1 from "../assets/blogpic1.png";
import blogpic2 from "../assets/blogpic2.png";
import blogpic3 from "../assets/blogpic3.png";
import blogpic4 from "../assets/blogpic4.png";
import blogpic5 from "../assets/blogpic5.png";
import blogpic6 from "../assets/blogpic6.png";
const blogData = [
  {
    title:
      "The Importance of Regular Garbage Collection for a Healthier Society",
    description:
      "Garbage collection is not just about keeping streets clean. It directly impacts public health, environmental safety, and the overall quality of life. Regular and professional waste management prevents diseases, promotes recycling, and maintains the aesthetic beauty of our neighborhoods. At Sanchita Enterprises, we ensure that your waste is handled responsibly, contributing towards a cleaner, greener tomorrow. Don't let unmanaged waste harm your surroundings—choose timely pickups today!",
    image: blogpic1,
  },
  {
    title: "How to Prepare Your Waste for Easy and Quick Pickup",
    description:
      "Preparing your waste correctly makes a huge difference. Always segregate wet and dry waste, use strong garbage bags, and avoid overfilling bins. Label hazardous or electronic waste separately. This not only ensures faster collection but also protects our workers and enables better recycling processes. Trust Sanchita Enterprises to handle your waste efficiently—your little steps lead to bigger change!",
    image: blogpic2,
  },
  {
    title: "The Environmental Benefits of Professional Waste Disposal",
    description:
      "Improper disposal of garbage results in soil contamination, air pollution, and harmful greenhouse gas emissions. By choosing professional services like Sanchita Enterprises, you ensure that waste is disposed of or recycled following eco-friendly methods. Together, we help reduce landfill overflow, promote sustainable living, and fight climate change. Every waste pickup with us is a step towards a healthier Earth!",
    image: blogpic3,
  },
  {
    title: "Why Timely Garbage Pickup Matters for Businesses",
    description:
      "Businesses generate significant amounts of waste daily. A delayed pickup can lead to unpleasant odors, pest problems, and an unhygienic environment, harming your reputation. Scheduled and timely waste collection keeps your workplace clean and your clients happy. Partner with Sanchita Enterprises for professional, on-time waste management services designed to meet your commercial needs!",
    image: blogpic4,
  },
  {
    title: "Understanding Waste Segregation: A Beginner’s Guide",
    description:
      "Waste segregation is the first step toward efficient waste management. Separate biodegradable (food waste) and non-biodegradable (plastic, metal) materials, and keep e-waste in a different container. Not only does it make recycling easier, but it also reduces the amount of waste that ends up in landfills. At Sanchita Enterprises, we encourage and support our customers in practicing waste segregation for a better future.",
    image: blogpic5,
  },
  {
    title:
      "How Sanchita Enterprises is Revolutionizing Waste Management Services",
    description:
      "At Sanchita Enterprises, we are not just collecting garbage; we are redefining waste management with technology, transparency, and efficiency. From instant online bookings to reliable pickups and environmentally responsible disposal methods, we ensure a seamless experience for our customers. Join our mission to create a cleaner city—one pickup at a time!",
    image: blogpic6,
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="font-work py-20 px-4 md:px-20 bg-gray-50 relative">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Our Latest Blog Posts
      </motion.h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => setSelectedBlog(blog)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
              <div className="flex justify-end text-primary text-2xl">
                <GoArrowRight />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Blog Popup */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative"
            >
              <button
                className="absolute top-1 right-1 text-3xl text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedBlog(null)}
              >
                <IoCloseSharp />
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
              <p className="text-gray-700">{selectedBlog.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;
