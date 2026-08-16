import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menubar, setMenubar] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-16 bg-sky-700 flex items-center px-6 z-20">
      
      {/* Logo */}
      <h1 className="text-white font-bold text-xl">
        Portfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="ml-auto hidden md:flex gap-8 text-gray-300">
        <li>
          <a href="#home" className="hover:text-white font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-white font-bold">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-white font-bold">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-white font-bold">
            Projects
          </a>
        </li>
       
        <li>
          <a href="#experience" className="hover:text-white font-bold">
            Experience
          </a>
        </li>
         <li>
          <a href="#contact" className="hover:text-white font-bold">
            Contact
          </a>
        </li>
      
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenubar(!menubar)}
        className="ml-auto text-white text-2xl md:hidden"
      >
        {menubar ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menubar && (
        <ul className=" fixed top-16 left-0 w-full bg-sky-700 text-white text-center z-1 py-4 md:hidden">
          <li className="py-2">
            <a href="#home" onClick={() => setMenubar(false)}>
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#about" onClick={() => setMenubar(false)}>
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#skills" onClick={() => setMenubar(false)}>
              Skills
            </a>
          </li>
          <li className="py-2">
            <a href="#projects" onClick={() => setMenubar(false)}>
              Projects
            </a>
          </li>
         
          <li className="py-2">
            <a href="#experience" onClick={() => setMenubar(false)}>
              Experience
            </a>
          </li>
           <li className="py-2">
            <a href="#contact" onClick={() => setMenubar(false)}>
              Contact
            </a>
          </li>
        
        </ul>
      )}
    </nav>
  );
}

export default Navbar;