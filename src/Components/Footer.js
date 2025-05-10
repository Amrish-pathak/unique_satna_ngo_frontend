import React from "react";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialButtons from "./SocialButtons";
import content from '../data/siteContent.json';

const Footer = () => {
  const { name, number1, number2, mail, address, aim } = content.ngoInfo;

  const links = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" }
  ];


  return (
    <motion.footer
      className="relative bg-[#0a0a0a] text-white py-12 px-6 md:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-8 border-b border-gray-800">

        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src="/IMAGES/Logo.jpg"
              alt="Logo"
              className="h-12 w-12 rounded-full shadow-lg transition hover:scale-105"
            />
            <h2 className="text-2xl font-bold text-[#00aaff]">{name}</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {aim}
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#00aaff]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {links.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: "#00aaff" }}
                transition={{ duration: 0.2 }}
              >
                <Link to={link.path} className="flex items-center space-x-2">
                  <i className="fa fa-chevron-right"></i>
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#00aaff]">Contact Us</h3>
          <ul className="space-y-3">
            {[
              { icon: "/IMAGES/mail-icon.png", text: mail },
              { icon: "/IMAGES/contact-icon.png", text: number1 },
              { icon: "/IMAGES/location_pin_0.png", text: address }
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <img src={item.icon} alt="Icon" className="h-6 w-6 opacity-75 hover:opacity-100 transition" />
                <span className="hover:text-[#00aaff] transition">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} {name} | All Rights Reserved</p>

        {/* Social Media */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <SocialButtons />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
