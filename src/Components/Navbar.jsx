import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://img.icons8.com/?size=100&id=nojRpDaog5PI&format=png&color=1A1A1A"
              alt="Rawal Drones"
              className="w-10 h-10"
            />

            <div className="leading-none">
              <h1 className="text-2xl font-bold tracking-wide text-black">
                RAWAL
              </h1>

              <p className="text-sm tracking-[6px] text-green-700">
                DRONES
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition ${isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition ${isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              Service
            </NavLink>

            <NavLink
              to="/coverage"
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition ${isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              Coverage Areas
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition ${isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium pb-1 transition ${isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Language Switch */}
            <div className="text-sm text-gray-700">
              <span className="font-medium">EN</span>

              <span className="mx-2 text-gray-400">|</span>

              <span>हिंदी</span>
            </div>

            {/* CTA */}
            <Link
              to="/service"
              className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col p-6 gap-5">

            <Link to="/">Home</Link>

            <Link to="/service">
              Service
  
            </Link>

            <Link to="/coverage">
              Coverage Areas
            </Link>

            <Link to="about">
              About Us
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <div className="pt-3 border-t">
              EN | हिंदी
            </div>

            <Link
              to="/service"
              className="bg-green-800 text-white text-center py-3 rounded-xl"
            >
              Book Service
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;