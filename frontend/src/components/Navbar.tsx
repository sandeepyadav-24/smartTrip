"use client";
import { useState } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";

import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-[#4B2354]">
                SmartTrip.ai
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-[#B08968] font-semibold text-lg hover:text-[#B08968] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[#232d19] font-bold text-lg hover:text-[#B08968] transition-colors"
            >
              About
            </Link>
            {/* Login and Register Buttons */}
            <button
              className="ml-6 text-[#4B2354] font-semibold text-base px-4 py-1 rounded hover:text-[#B08968] transition-colors"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login
            </button>
            <button
              className="ml-2 bg-[#B08968] text-white font-semibold text-base px-5 py-2 rounded-full hover:bg-[#997559] transition-colors"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Register
            </button>
          </div>

          {/* Divider and Profile */}
          <div className="flex items-center gap-4">
            <span className="h-8 w-[2px] bg-[#4B2354] mx-4 block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#4B2354] text-lg">
                <Link href="/profile">Profile</Link>
              </span>
            </div>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <IoLogoWhatsapp className="text-green-600 text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}
