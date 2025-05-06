import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormLoader from "../Components/Loader/FormLoader";

const PickupRequest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    pickupType: "",
    pickupDate: "",
    pickupTime: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Handle form submission
    try {
      const response = await axios.post(
        "https://se-wastecare.onrender.com/api/request-collection",
        formData
      );

      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        pickupType: "",
        pickupDate: "",
        pickupTime: "",
        specialInstructions: "",
      });

      setLoading(false);

      setTimeout(() => {
        window.scrollTo(0, 0);
        navigate("/success");
      }, 500); // Show loader at least for half a second
    } catch (error) {
      setLoading(false);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="font-work min-h-screen py-20 px-4 md:px-20 bg-gray-50">
      {loading && <FormLoader />}

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Request a Pickup
      </motion.h1>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your pickup address"
              className="w-full border border-gray-300 rounded-md h-24 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Pickup Type */}
          <div>
            <label className="block text-gray-700 mb-2">Pickup Type</label>
            <select
              name="pickupType"
              value={formData.pickupType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md h-12 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select Type</option>
              <option value="household">Household Waste</option>
              <option value="commercial">Commercial Waste</option>
              <option value="industrial">Industrial Waste</option>
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pickup Time</label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-gray-700 mb-2">
              Special Instructions (Optional)
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              placeholder="Any extra details for the pickup team?"
              className="w-full border border-gray-300 rounded-md h-24 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-all duration-300"
              disabled={loading}
            >
              Submit Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PickupRequest;
