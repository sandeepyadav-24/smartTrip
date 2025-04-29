import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-900">
                SmartTrip
              </span>
              <span className="text-2xl font-bold text-purple-900">.ai</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#C4A484] hover:text-[#B08968] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#C4A484] hover:text-[#B08968] transition-colors"
            >
              About
            </Link>
          </div>

          {/* Auth Buttons and Contact */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#C4A484] hover:text-[#B08968] transition-colors hidden md:block"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#B08968] text-white px-6 py-2 rounded-full hover:bg-[#997559] transition-colors"
            >
              Register
            </Link>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.14 15.88c-3.88 0-7.02-3.14-7.02-7.02 0-3.88 3.14-7.02 7.02-7.02 3.88 0 7.02 3.14 7.02 7.02 0 3.88-3.14 7.02-7.02 7.02zm3.72-9.84c-.42-.42-1.52-.88-2.13-.94-.61-.06-1.2.39-1.56.75-.36.36-.96.95-1.32.59-.36-.36-1.02-2.1-1.38-2.46s-.84-.42-1.2-.42c-.36 0-1.08.18-1.44.54-.36.36-.6.9-.6 1.44 0 .54.24 1.08.6 1.44l1.08 1.08c.36.36.9.6 1.44.6.54 0 1.08-.24 1.44-.6l.96-.96c.36-.36.6-.9.6-1.44 0-.54-.24-1.08-.6-1.44l-1.08-1.08c-.36-.36-.9-.6-1.44-.6-.54 0-1.08.24-1.44.6l-.96.96"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
