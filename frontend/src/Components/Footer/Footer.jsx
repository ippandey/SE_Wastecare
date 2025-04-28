import React from "react";

const Footer = () => {
  return (
    <footer className="font-work text-[#202025] bg-gray-100 py-16 px-8">
      <div className="flex flex-wrap gap-8 justify-between">
        {/* Contact Us */}
        <div className="w-full sm:w-1/4">
          <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:clientcare@sanchitagroup.com"
              className="text-gray-600 hover:underline"
            >
              clientcare@sanchitagroup.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:6354178148" className="text-gray-600 hover:underline">
              6354178148
            </a>
          </p>
          <p>Hours: Mon – Fri: 9AM – 6PM</p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3 text-[#202025]">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Request Pickup
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-semibold text-lg mb-6">Our Services</h3>
          <ul className="space-y-3 text-[#202025]">
            <li>
              <a href="#" className="hover:underline">
                Residential Pickup
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Commercial Waste
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recycling Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bulk Waste Management
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-1/4">
          <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Subscribe for service updates, tips on waste management, and special
            offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border h-12 border-gray-300 rounded-md px-4 py-2 mb-3"
            />
            <button
              type="submit"
              className="w-full h-12 bg-green-600 text-white rounded-md py-2 hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sanchita Enterprises | Garbage
        Collection Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
