"use client";
import Image from "next/image";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Store the token in localStorage
      localStorage.setItem("token", data.token);
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <Image
            src="/login.png"
            alt="Travel"
            className="w-full h-full object-cover rounded-l-3xl"
            width={1000}
            height={1000}
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
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B08968] text-white py-3 rounded-lg font-medium hover:bg-[#997559] transition-colors disabled:opacity-50"
              >
                {loading ? "Loading..." : isLogin ? "Login" : "Register"}
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
                  <FaGoogle className="text-2xl" />
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaFacebook className="text-2xl" />
                </button>
                <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaApple className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Register Link */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#B08968] hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>

          {/* Bottom Landmarks */}
        </div>
      </div>
    </div>
  );
}
