import logo from "./assets/kevinRushLogo.png"; // Corrected the import path
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
    <h1 className="mx-2 w-10 font-medium text-4xl hover:text-slate-400 transition-all duration-200">Hr</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/Muhammad-Haroon-Aziz/" className="text-white mx-2 hover:text-[#9e9ef7] transition-all duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/Haroon2697" className="text-white mx-2 hover:text-[#ffffffab] transition-all duration-300"> {/* Replace with your logo color */}
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com/@Muhamma65081600" className="text-white mx-2 hover:text-[#78a4fb] transition-all duration-300">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.instagram.com/m.haroon5295/" className="text-white mx-2 hover:text-[#b331b3] transition-all duration-300">
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
