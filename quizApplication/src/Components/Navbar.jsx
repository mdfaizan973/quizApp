import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Home", "Quizzes", "Leaderboard", "About", "Profile"];

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-purple-700 text-white shadow-md transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold select-none text-white font-[Comic Sans MS, cursive]">
          Quiz<span className="text-yellow-300">Land</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold border border-transparent rounded-xl bg-white/10 hover:bg-yellow-300 hover:text-purple-800 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col px-4 pb-4 gap-2 bg-purple-700 border-t border-purple-600">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block w-full px-4 py-2 text-sm font-semibold border border-transparent rounded-xl bg-white/10 hover:bg-yellow-300 hover:text-purple-800 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
