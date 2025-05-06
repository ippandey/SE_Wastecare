import React, { useState, useEffect } from "react";
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
    description: (
      <>
        <p>
          Garbage collection is not just about keeping streets clean. It
          directly impacts public health, safety, and the overall quality of
          life.
        </p>
        <p>
          Regular garbage collection prevents waste from accumulating, which can
          attract pests and rodents, creating unhygienic living conditions. It
          also helps mitigate air and water pollution by properly disposing of
          hazardous materials.
        </p>
        <p>
          Communities with efficient garbage collection systems are healthier
          and more sustainable, ensuring that waste doesn’t pile up in
          neighborhoods, reducing the spread of diseases.
        </p>
        <p>
          When the garbage is collected regularly, the risk of landfill overflow
          and illegal dumping is minimized, ensuring that both the environment
          and the community remain safe.
        </p>
      </>
    ),
    image: blogpic1,
  },
  {
    title: "How to Prepare Your Waste for Easy and Quick Pickup",
    description: (
      <>
        <p>
          Preparing your waste correctly makes a huge difference in the
          efficiency of the garbage pickup process. One of the first steps is to
          segregate wet and dry waste, which is essential for effective
          recycling and composting. Wet waste, like food scraps, should be
          packed in biodegradable bags, while dry waste, such as plastics,
          paper, and metals, should be separated into recyclable bins. By doing
          this, waste management companies can process the materials in a way
          that reduces the environmental impact.
        </p>
        <p>
          In addition to segregation, it is important to ensure that your waste
          is neatly packed in bags or bins, making it easier for waste
          collectors to transport it without spillage or contamination. Heavy
          items like furniture should be disassembled or broken down into
          manageable parts for easier handling. Proper waste preparation also
          helps reduce the time and effort of waste collection, ensuring that
          your waste is picked up in a timely and efficient manner.
        </p>
        <p>
          By taking responsibility for how we dispose of our waste, we can all
          contribute to a cleaner environment, reduce the strain on landfills,
          and encourage recycling practices that help sustain our planet.
        </p>
      </>
    ),
    image: blogpic2,
  },
  {
    title: "The Environmental Benefits of Professional Waste Disposal",
    description: (
      <>
        <p>
          Improper disposal of garbage results in soil contamination, air
          pollution, and harmful greenhouse gas emissions. When waste is not
          disposed of properly, it can end up in landfills, contributing to the
          emission of methane, a potent greenhouse gas. Professional waste
          disposal services help mitigate these environmental risks by ensuring
          that waste is properly sorted, recycled, or treated. For example,
          hazardous materials like chemicals and batteries are safely handled,
          preventing contamination of soil and groundwater.
        </p>
        <p>
          Professional waste disposal services also promote the reduction of
          single-use plastics, which are one of the most pressing environmental
          issues of our time. By providing a system for collecting, sorting, and
          recycling these materials, waste management companies help divert tons
          of plastic waste from ending up in oceans and landfills. Additionally,
          the recycling process helps conserve natural resources and reduces the
          energy required to produce new materials, making waste disposal a key
          component in creating a circular economy.
        </p>
        <p>
          By choosing a professional waste disposal service, you're not only
          keeping your surroundings clean but also playing an active role in
          minimizing your carbon footprint and supporting a healthier planet.
        </p>
      </>
    ),
    image: blogpic3,
  },
  {
    title: "Why Timely Garbage Pickup Matters for Businesses",
    description: (
      <>
        <p>
          Businesses generate significant amounts of waste daily. A delayed
          pickup can lead to unpleasant odors, attracting pests, and creating an
          unsightly environment that can affect a company’s reputation. Whether
          it’s an office, restaurant, or manufacturing plant, efficient waste
          management is crucial to maintaining a hygienic and professional
          atmosphere. A timely garbage pickup ensures that waste doesn’t pile
          up, making the workplace cleaner and more productive for employees and
          customers alike.
        </p>
        <p>
          For industries like food services, timely waste disposal is even more
          critical as improper disposal can lead to health risks such as
          foodborne illnesses. Furthermore, businesses that are unable to manage
          waste efficiently can face fines or regulatory action, particularly if
          waste is improperly disposed of or if it violates environmental codes.
          A reliable waste management service ensures that all legal and
          environmental regulations are met while keeping businesses running
          smoothly.
        </p>
        <p>
          In the competitive business world, sustainability is becoming
          increasingly important. Businesses that maintain cleanliness and
          promote environmentally friendly waste practices can boost their brand
          image and attract eco-conscious customers.
        </p>
      </>
    ),
    image: blogpic4,
  },
  {
    title: "Understanding Waste Segregation: A Beginner’s Guide",
    description: (
      <>
        <p>
          Waste segregation is the first step toward efficient waste management.
          It involves separating waste into categories such as biodegradable
          (wet), recyclable (dry), and non-recyclable. This process is essential
          because it allows waste to be treated, recycled, or composted
          correctly, reducing the burden on landfills and minimizing
          environmental pollution. Proper waste segregation at home, in offices,
          and in commercial spaces ensures that recyclable materials like paper,
          plastic, and metal are kept out of landfills and are reused.
        </p>
        <p>
          In this beginner’s guide, we will explore the importance of each
          category of waste and how to properly segregate it. Wet waste, such as
          food scraps, can be composted, enriching the soil and reducing the
          need for chemical fertilizers. Dry waste, including plastics and
          metals, can be recycled to produce new products, saving raw materials
          and reducing the need for energy-intensive manufacturing processes.
          Finally, non-recyclable waste should be disposed of responsibly, often
          through incineration or sanitary landfills designed to minimize
          environmental impact.
        </p>
        <p>
          Implementing proper waste segregation at the individual and community
          levels is an easy yet effective way to help conserve resources and
          protect the environment. It’s a small change that can have a big
          impact on the planet’s health.
        </p>
      </>
    ),
    image: blogpic5,
  },
  {
    title:
      "How Sanchita Enterprises is Revolutionizing Waste Management Services",
    description: (
      <>
        <p>
          At Sanchita Enterprises, we are not just collecting garbage; we are
          redefining waste management by providing innovative, eco-friendly
          solutions for waste disposal. Our approach is centered around
          sustainability, ensuring that waste is managed in an efficient and
          responsible manner. We offer timely, reliable waste collection
          services, using state-of-the-art technology to track and optimize
          waste pickup schedules, making sure that no waste is left behind.
        </p>
        <p>
          Our team is committed to educating the public on the importance of
          proper waste segregation and recycling, and we provide resources to
          help individuals and businesses transition to more sustainable waste
          practices. We also partner with local recycling centers and composting
          facilities to ensure that waste is processed in the most
          environmentally friendly way possible.
        </p>
        <p>
          At Sanchita Enterprises, we are continuously looking for ways to
          improve our services, integrating green technologies that minimize
          waste-to-landfill ratios and help reduce carbon emissions. By focusing
          on the long-term environmental impact, we are helping to create a
          cleaner, more sustainable future for generations to come.
        </p>
      </>
    ),
    image: blogpic6,
  },
];

const BlogLoader = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 animate-pulse">
      <div className="h-48 w-full rounded-lg bg-green-300 mb-4"></div>
      <div className="h-6 w-3/4 rounded-lg bg-green-400 mb-2"></div>
      <div className="h-6 w-1/2 rounded-lg bg-green-400"></div>
    </div>
  );
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

      {/* Blog Cards or Loaders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, idx) => <BlogLoader key={idx} />)
          : blogData.map((blog, index) => (
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
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button - repositioned */}
              <button
                className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 z-10"
                onClick={() => setSelectedBlog(null)}
              >
                <IoCloseSharp />
              </button>

              {/* Content Wrapper */}
              <div className="p-6 space-y-6">
                {/* Image with proper aspect ratio */}
                <div className="w-full aspect-video overflow-hidden rounded-xl">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover" // Change to object-contain if needed
                  />
                </div>

                {/* Blog Title and Content */}
                <h2 className="text-3xl font-bold">{selectedBlog.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {selectedBlog.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;
