"use client";

import { useState } from "react";
import Image from "next/image";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-[1200px] min-h-[600px] relative flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Side - Image */}
        <div className="w-1/2 relative hidden md:block">
          <img
            src="/images/login-bg.jpg"
            alt="Travel"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div className="max-w-md mx-auto w-full">
            {/* Plane Icon and Welcome */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#B08968]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 14.58c0-.36-.19-.69-.5-.87L16 11.33V7c0-.55-.45-1-1-1s-1 .45-1 1v4.33l-4.5 2.38c-.31.18-.5.51-.5.87V16c0 .55.45 1 1 1h.5l3.5-1.5V20c0 .55.45 1 1 1s1-.45 1-1v-4.5l3.5 1.5h.5c.55 0 1-.45 1-1v-1.42z" />
                </svg>
              </div>
              <h2 className="text-5xl font-light text-[#B08968] mb-2">
                Welcome
              </h2>
              <p className="text-gray-500">Login with Email</p>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email / Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B08968] font-medium">
                    SEND OTP
                  </button>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
                />
              </div>

              <button className="w-full bg-[#B08968] text-white py-3 rounded-lg hover:bg-[#97775A] transition-colors">
                LOGIN
              </button>

              <div className="relative text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <span className="relative bg-white px-4 text-gray-500 text-sm">
                  OR
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img
                    src="/images/google.png"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img
                    src="/images/apple.png"
                    alt="Apple"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Register Link */}
            <p className="text-center mt-8 text-gray-600">
              Don't have account?{" "}
              <a href="#" className="text-[#B08968] font-medium">
                Register Now
              </a>
            </p>
          </div>

          {/* Bottom Landmarks */}
          <div className="mt-auto pt-8 flex justify-between">
            <img
              src="/images/taj-mahal.png"
              alt="Taj Mahal"
              className="h-16 opacity-20"
            />
            <img
              src="/images/italy.png"
              alt="Italy Landmarks"
              className="h-16 opacity-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
