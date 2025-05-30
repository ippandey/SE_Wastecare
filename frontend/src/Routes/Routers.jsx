import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PickupRequest from "../Pages/PickupRequest";
import Blogs from "../Pages/Blogs";
import AboutUs from "../Pages/AboutUs";
import Success from "../Pages/Success";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/request-pickup" element={<PickupRequest />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default Routers;
