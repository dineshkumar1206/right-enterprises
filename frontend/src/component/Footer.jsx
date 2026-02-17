import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left - Logo & About */}
        <div>
            <Link to={"/"} className="cursor-pointer">
          <img
            src="/image/Right Enterprises logo.png"
            alt="Right Enterprises Logo"
            className="h-12 mb-4"
          />
          </Link>

          {/* <p className="text-sm text-white/80 leading-relaxed">
            Quality Printing & Packaging Solutions with Perfect Impression.
          </p> */}
        </div>

        {/* Center - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-white/80">

            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <p>
                11/2, Carpenter St, opposite Sri Srinivasa Hotel,
                Neelam Garden, Sembiyan, Perambur,
                Chennai, Tamil Nadu 600011.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:9841382107" className="hover:text-gray-300 transition">
                98413 82107
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:rightenterprises19@gmail.com"
                className="hover:text-gray-300 transition"
              >
                rightenterprises19@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
           <a
      href="https://wa.me/919841382107"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-14 bottom-3 opacity-0 group-hover:opacity-100 transition bg-white text-black text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap">
        Contact Us
      </span>

      {/* WhatsApp Icon */}
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <MessageCircle size={28} className="text-white" />
      </div>
    </a>

          </div>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <Link to="/gallery" className="hover:text-gray-300 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Right Enterprises. All Rights Reserved.
      </div>
    </footer>
  );
}
