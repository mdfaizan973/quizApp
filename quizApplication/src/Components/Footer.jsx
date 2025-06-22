import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* About */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-300">
            About QuizLand 🎈
          </h2>
          <p className="text-white/90 leading-relaxed">
            QuizLand is a fun and interactive platform for kids to explore
            knowledge through exciting quizzes. Learn, play, and grow your brain
            power!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-300">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {["Home", "Quizzes", "Leaderboard", "About Us", "Profile"].map(
              (link) => (
                <li key={link}>
                  <a href="#" className="hover:text-yellow-300 transition">
                    ➤ {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-300">
            Connect With Us
          </h2>
          <p className="mb-2">📧 support@quizland.com</p>
          <p className="mb-4">📞 +91 98765 43210</p>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-yellow-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-white/70 text-xs">
        © 2025 QuizLand. All rights reserved.
      </div>
    </footer>
  );
}
