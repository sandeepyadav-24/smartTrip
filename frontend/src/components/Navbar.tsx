"use client";
import { useState, RefObject, useEffect } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";

import { IoLogoWhatsapp } from "react-icons/io";
const tabs = [
  { id: "flights", label: "Flights" },
  { id: "hotels", label: "Hotels" },
  { id: "cruises", label: "Cruises" },
  { id: "packages", label: "Packages" },
  { id: "cabs", label: "Cabs" },
  // ...add icons if needed
];

export default function Navbar({
  searchRef,
}: {
  searchRef: RefObject<HTMLElement>;
}) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showSearchInNavbar, setShowSearchInNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("flights");

  useEffect(() => {
    function handleScroll() {
      if (!searchRef?.current) return;
      const rect = searchRef.current.getBoundingClientRect();
      setShowSearchInNavbar(rect.top <= 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchRef]);

  return (
    <nav className="w-full bg-white z-50 sticky top-0 shadow-sm">
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

          {showSearchInNavbar && (
            <div className="flex gap-6 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded ${
                    activeTab === tab.id
                      ? "bg-[#B08968] text-white"
                      : "text-[#232d19] hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Divider and Profile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-8">
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
