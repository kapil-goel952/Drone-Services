import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { Phone, Mail, MapPin, Clock3, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#072b12] bottom-0 via-[#0d3f1b] to-[#0f5c28] text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div className="lg:col-span-1">

            <img
              src={logo}
              alt="Rawal Drones"
              className="w-40 mb-5"
            />

            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering farmers with advanced drone technology
              for smarter, faster and more profitable farming.
            </p>


          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">

              <Link to="/" className="hover:text-white transition-colorsduration-300">
                Home
              </Link>
              <Link to="/services"  className="hover:text-white transition-colorsduration-300">Services</Link>
              <Link to="/coverage"  className="hover:text-white transition-colorsduration-300">Coverage Areas</Link>
              <Link to="/about"  className="hover:text-white transition-colorsduration-300">About Us</Link>
              <Link to="/contact"  className="hover:text-white transition-colorsduration-300">Contact</Link>

            </div>
          </div>

          {/* Services */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">

              <p>Crop Spraying</p>
              <p>Fertilizer Spraying</p>
              <p>Seed Spreading</p>
              <p>Mapping & Surveying</p>
              <p>Crop Health Analytics</p>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-300">

              <div className="flex gap-3">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <Mail size={16} />
                <span>info@rawaldrones.in</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={16} />
                <span>Kurukshetra, Haryana</span>
              </div>

              <div className="flex gap-3">
                <Clock3 size={16} />
                <span>Mon - Sat 8 AM - 6 PM</span>
              </div>

            </div>
          </div>

          {/* Book Service */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Book a Service
            </h3>

            <p className="text-sm text-gray-300 mb-5">
              Fill the form and our team will get back to you.
            </p>

            <button
              className="bg-white text-green-900 px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
              Quick Inquiry
            </button>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-white/10 mt-10 pt-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-400">
              © 2026 Rawal Drones. All Rights Reserved.
            </p>

            <div className="flex gap-5 text-sm text-gray-400">

              <Link to="/privacy">
                Privacy Policy
              </Link>

              <Link to="/terms">
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;