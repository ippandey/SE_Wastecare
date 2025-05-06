import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, onClose }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div
            ref={menuRef}
            className="text-xl font-semibold uppercase bg-green-600 text-white py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <Link to="/" onClick={onClose} className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={onClose} className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/request-pickup"
                  onClick={onClose}
                  className="hover:underline"
                >
                  Request Pickup
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
