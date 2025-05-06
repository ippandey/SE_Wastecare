// src/pages/Success.jsx
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Request Submitted!
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-lg">
        Thank you for your pickup request. You will receive a confirmation email
        shortly with all the details.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Success;
