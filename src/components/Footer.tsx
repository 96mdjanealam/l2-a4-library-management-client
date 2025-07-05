import { BookA } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-8 items-center">
        <Link to={"/"} className="flex gap-2 items-center">
          <BookA className="text-white" size={30} />
          <h1 className="text-xl text-white font-bold">BookSync</h1>
        </Link>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Designed to simplify how libraries and organizations handle book
          lending, availability, and inventory updates in real-time.
        </p>
      </div>
      <div className="border-t border-[#3B1A7A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          BookSync ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
