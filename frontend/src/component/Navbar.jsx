import { User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-[#89a328] text-white min-h-[60px] flex items-center z-30 px-4 sm:px-6 md:px-8">

      {/* LEFT SIDE: Logo + Mobile Menu */}
      <div className="flex items-center gap-4 pl-4 sm:pl-6 md:pl-10">

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-pink-400 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a href="/">
        <img
          src="/image/Right Enterprises logo.png"
          alt="Right Enterprises Logo"
          className="pl-4 md:pl-16 h-10 sm:h-12 w-auto object-contain cursor-pointer"
        />  </a>
      </div>

      {/* Center Navigation Links - Desktop */}
      <div className="hidden md:flex w-full justify-center items-center gap-10 text-[12px] tracking-[0.2em] uppercase">
        <a href="/" className="hover:text-pink-400 transition whitespace-nowrap">
          Home
        </a>
        <a href="#contact" className="hover:text-pink-400 transition whitespace-nowrap">
          Contact
        </a>
        <a href="#book" className="hover:text-pink-400 transition whitespace-nowrap">
          Book Online
        </a>
        <a href="/about" className="hover:text-pink-400 transition whitespace-nowrap">
          About Us
        </a>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[#576a12] md:hidden py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="" 
              className="hover:text-pink-400 transition uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#contact" 
              className="hover:text-pink-400 transition uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#book" 
              className="hover:text-pink-400 transition uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Online
            </a>
            <a 
              href="/about" 
              className="hover:text-pink-400 transition uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
          </div>
        </div>
      )}

      {/* Right Side Login */}
      <div className={`
        ${isMenuOpen ? 'hidden' : 'flex'} 
        absolute right-4 sm:right-6 md:right-12 
        items-center gap-2 text-[12px]
      `}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <User size={16} />
        </div>
        <span className="hover:text-pink-400 transition cursor-pointer">
          Log In
        </span>
      </div>

    </nav>
  );
}
