import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";


import content from '../data/siteContent.json';


export default function Header() {
  const { name, name1, name2, number1, number2, mail, address, aim } = content.ngoInfo;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / NGO Name */}
        <div className="text-xl sm:text-2xl font-bold text-indigo-700 leading-tight">
          {name1}<br className="hidden sm:block" />
          {name2}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="#programs" label="Programs" />
          <div className="relative">
            <button
              className="text-gray-700 hover:text-indigo-600 font-medium flex items-center space-x-1"
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <span>Get Involved</span>
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded py-2 w-48">
                <a href="#volunteer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                  Volunteer
                </a>
                <a href="#partner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                  Partner With Us
                </a>
              </div>
            )}
          </div>
          <NavLink href="#contact" label="Contact" />
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium">
            Donate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 animate-fadeIn">
          <NavLinkMobile href="#about" label="About" />
          <NavLinkMobile href="#programs" label="Programs" />
          <div className="space-y-1">
            <p className="font-medium text-gray-700">Get Involved</p>
            <a href="#volunteer" className="block ml-4 text-sm text-gray-600 hover:text-indigo-600">Volunteer</a>
            <a href="#partner" className="block ml-4 text-sm text-gray-600 hover:text-indigo-600">Partner</a>
          </div>
          <NavLinkMobile href="#contact" label="Contact" />
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium">
            Donate
          </button>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
   return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `text-sm font-medium cursor-pointer ${
          isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"
        }`
      }
    >
      {label}
    </RouterNavLink>
  );
}

      function NavLinkMobile({href, label}) {
  return (
      <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `block text-sm font-medium cursor-pointer ${
          isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"
        }`
      }
    >
      {label}
    </RouterNavLink>
      );
}
