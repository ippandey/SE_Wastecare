import React from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-16 px-8"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="font-semibold text-xl">
            1. What services do you offer?
          </h3>
          <p className="text-gray-600 mt-2">
            We offer professional garbage collection services, catering to both
            residential and commercial properties.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">
            2. How do I schedule a pickup?
          </h3>
          <p className="text-gray-600 mt-2">
            You can easily schedule a pickup through our online form or by
            contacting our customer service.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">
            3. What items can I dispose of?
          </h3>
          <p className="text-gray-600 mt-2">
            We collect general waste, recyclables, and special waste like
            electronics and hazardous materials. Please refer to our guidelines
            for more details.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">
            4. Do you offer recycling services?
          </h3>
          <p className="text-gray-600 mt-2">
            Yes! We offer recycling services for plastics, paper, and metal.
            Please separate these materials when scheduling a pickup.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
