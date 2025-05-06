import React from "react";
import { motion } from "framer-motion";

const FormLoader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full"
      ></motion.div>
    </div>
  );
};

export default FormLoader;
