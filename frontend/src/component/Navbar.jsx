import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-[#5a0034] text-white h-[70px] flex items-center z-30">
      
      {/* Center Navigation Links */}
      <div className="w-full flex justify-center items-center gap-15 text-[12px] tracking-[0.2em] uppercase">
        <a href="#" className="hover:text-pink-400 transition">
          Home
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          Contact
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          Book Online
        </a>
      </div>

      {/* Log In Section */}
      <div className="absolute right-12 flex items-center gap-3 text-[12px] tracking-wide">
        <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center">
          <User size={16} />
        </div>
        <span className="hover:text-pink-400 transition cursor-pointer">
          Log In
        </span>
      </div>
    </nav>
  );
}
