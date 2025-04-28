import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavbarMenu = [
    { title: "Home", path: "/" },
    { title: "Request Pickup", path: "/request-pickup" },
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container flex justify-between items-center py-4 px-6 md:px-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl text-green-700 font-semibold"
          >
            <FaRecycle className="text-3xl" />
            <span>SE Wastecare</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `uppercase text-sm px-2 hover:text-green-600 duration-150 ${
                      isActive ? "text-green-700 font-bold" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <MdMenu
              onClick={() => setOpen(!open)}
              className="text-4xl text-green-800 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} setOpen={setOpen} menu={NavbarMenu} />
    </>
  );
};

export default Navbar;
