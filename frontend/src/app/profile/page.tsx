"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AddCardModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("United States");
  const [saveInfo, setSaveInfo] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative animate-fade-in">
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-2xl text-gray-700 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-8 text-center">Add a new Card</h2>
        <form className="space-y-5">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="4321 4321 4321 4321"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 pr-16 text-lg focus:outline-none focus:ring-2 focus:ring-[#B08968]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                <Image
                  src="/images/visa.png"
                  alt="Visa"
                  width={32}
                  height={20}
                />
              </span>
            </div>
          </div>
          {/* Exp Date & CVC */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Exp. Date
              </label>
              <input
                type="text"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                placeholder="02/27"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#B08968]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">CVC</label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#B08968]"
              />
            </div>
          </div>
          {/* Name on Card */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#B08968]"
            />
          </div>
          {/* Country or Region */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Country or Region
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#B08968]"
            >
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Canada</option>
            </select>
          </div>
          {/* Save info checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="w-5 h-5 accent-[#232d19]"
              id="saveInfo"
            />
            <label
              htmlFor="saveInfo"
              className="text-sm font-medium select-none"
            >
              Securely save my information for 1-click checkout
            </label>
          </div>
          {/* Add Card Button */}
          <button
            type="submit"
            className="w-full bg-[#B08968] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#97775A] transition-colors mt-2"
          >
            Add Card
          </button>
          {/* Info text */}
          <p className="text-xs text-gray-500 text-center mt-2">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account");
  const [bookingTab, setBookingTab] = useState("flights");
  const [showAddCard, setShowAddCard] = useState(false);
  const dummyRef = useRef<HTMLElement>(null as unknown as HTMLElement);

  // Example bookings data
  const bookings = [
    {
      airlineLogo: "/images/emirates-logo.png",
      from: "Newark(EWR)",
      to: "Newark(EWR)",
      depart: "12:00 pm",
      arrive: "6:00 pm",
      date: "12-11-22",
      gate: "A12",
      seat: "128",
      flightTime: "Newark(EWR)",
    },
    {
      airlineLogo: "/images/emirates-logo.png",
      from: "Newark(EWR)",
      to: "Newark(EWR)",
      depart: "12:00 pm",
      arrive: "6:00 pm",
      date: "12-11-22",
      gate: "A12",
      seat: "128",
      flightTime: "Newark(EWR)",
    },
    {
      airlineLogo: "/images/emirates-logo.png",
      from: "Newark(EWR)",
      to: "Newark(EWR)",
      depart: "12:00 pm",
      arrive: "6:00 pm",
      date: "12-11-22",
      gate: "A12",
      seat: "128",
      flightTime: "Newark(EWR)",
    },
  ];

  // Example stays data
  const stays = [
    {
      hotelLogo: "/images/cvk-logo.png",
      hotelName: "CVK Park Bosphorus Hotel Istanbul",
      checkIn: "Thur, Dec 8",
      checkOut: "Fri, Dec 9",
      checkInTime: "12:00pm",
      checkOutTime: "11:30am",
      room: "On arrival",
    },
    {
      hotelLogo: "/images/cvk-logo.png",
      hotelName: "CVK Park Bosphorus Hotel Istanbul",
      checkIn: "Thur, Dec 8",
      checkOut: "Fri, Dec 9",
      checkInTime: "12:00pm",
      checkOutTime: "11:30am",
      room: "On arrival",
    },
    {
      hotelLogo: "/images/cvk-logo.png",
      hotelName: "CVK Park Bosphorus Hotel Istanbul",
      checkIn: "Thur, Dec 8",
      checkOut: "Fri, Dec 9",
      checkInTime: "12:00pm",
      checkOutTime: "11:30am",
      room: "On arrival",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col">
      <Navbar searchRef={dummyRef} />
      <AddCardModal open={showAddCard} onClose={() => setShowAddCard(false)} />
      <main className="flex-grow max-w-4xl mx-auto w-full mt-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/473401474_1000810801932553_7346626993380358886_n.jpg?ccb=11-4&oh=01_Q5Aa1QGoOwZQoEb4OfuDw0v2aqaqnbh35bJ5E5aueuzitjdCUA&oe=68294A4C&_nc_sid=5e03e0&_nc_cat=107"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-md"
            />
            <span className="absolute bottom-2 right-2 bg-[#B08968] rounded-full p-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6l11-11a2.828 2.828 0 00-4-4L5 17v4z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold">John Doe.</h2>
          <p className="text-gray-500">john.doe@gmail.com</p>
        </div>

        {/* Tabs */}
        <div className="mt-8 bg-white rounded-xl shadow-sm flex">
          <button
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === "account"
                ? "border-b-2 border-[#6C3483] text-[#6C3483]"
                : "text-gray-500 hover:text-[#6C3483]"
            }`}
            onClick={() => setActiveTab("account")}
          >
            Account
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === "bookings"
                ? "border-b-4 border-[#6C3483] text-[#232d19]"
                : "text-gray-500 hover:text-[#6C3483]"
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            Tickets/Bookings
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === "payment"
                ? "border-b-4 border-[#B08968] text-[#232d19]"
                : "text-gray-500 hover:text-[#B08968]"
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Payment methods
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "account" && (
          <section className="bg-white rounded-xl shadow-sm mt-6 p-8">
            <h3 className="text-2xl font-semibold mb-6">Account</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Name</div>
                  <div>John Doe</div>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div>john.doe@gmail.com</div>
                </div>
                <div>
                  <div className="font-medium">Password</div>
                  <div>**********</div>
                </div>
                <div>
                  <div className="font-medium">Phone number</div>
                  <div>+1 000-000-0000</div>
                </div>
                <div>
                  <div className="font-medium">Address</div>
                  <div>St 32 main downtown, Los Angeles, California, USA</div>
                </div>
                <div>
                  <div className="font-medium">Date of birth</div>
                  <div>01-01-1992</div>
                </div>
              </div>
              <div className="space-y-4 flex flex-col items-end">
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Change
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8m-4-4v8" />
                  </svg>
                  Add another email
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Change
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Change
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Change
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Change
                </button>
              </div>
            </div>
          </section>
        )}
        {activeTab === "bookings" && (
          <section className="mt-10">
            <h3 className="text-3xl font-semibold mb-8">Tickets/Bookings</h3>
            <div className="bg-white rounded-2xl shadow p-8">
              {/* Sub-tabs */}
              <div className="flex items-center gap-8 mb-4">
                <button
                  className={`flex items-center gap-2 text-lg font-medium pb-2 border-b-4 ${
                    bookingTab === "flights"
                      ? "border-[#4B2354] text-[#232d19]"
                      : "border-transparent text-gray-500"
                  }`}
                  onClick={() => setBookingTab("flights")}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.5 19.5L21.5 12.5M2.5 19.5L6.5 2.5M2.5 19.5L12.5 12.5M21.5 12.5L17.5 2.5M21.5 12.5L12.5 12.5M17.5 2.5L12.5 12.5" />
                  </svg>
                  Flights
                </button>
                <button
                  className={`flex items-center gap-2 text-lg font-medium pb-2 border-b-4 ${
                    bookingTab === "stays"
                      ? "border-[#4B2354] text-[#232d19]"
                      : "border-transparent text-gray-500"
                  }`}
                  onClick={() => setBookingTab("stays")}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21V9a2 2 0 012-2h14a2 2 0 012 2v12" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                  Stays
                </button>
                <div className="ml-auto">
                  <button className="flex items-center gap-1 text-[#232d19] font-medium">
                    Upcoming
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Divider */}
              <div className="h-1 bg-[#4B2354] rounded mb-6" />
              {/* Bookings List */}
              {bookingTab === "flights" && (
                <div className="space-y-6">
                  {bookings.map((b, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow flex flex-col md:flex-row items-center md:items-stretch p-6 gap-6"
                    >
                      {/* Airline Logo */}
                      <div className="flex items-center justify-center w-24 h-24 bg-[#faf7fd] rounded-xl border border-gray-100">
                        <Image
                          src={b.airlineLogo}
                          alt="Airline"
                          width={60}
                          height={60}
                        />
                      </div>
                      {/* Flight Info */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                          <div className="text-center md:text-left">
                            <div className="text-gray-500 text-sm">
                              {b.from}
                            </div>
                            <div className="text-2xl font-bold">{b.depart}</div>
                          </div>
                          <div className="text-2xl font-bold text-gray-400">
                            —
                          </div>
                          <div className="text-center md:text-left">
                            <div className="text-gray-500 text-sm">{b.to}</div>
                            <div className="text-2xl font-bold">{b.arrive}</div>
                          </div>
                        </div>
                        {/* Details */}
                        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#B08968]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="4"
                                  width="18"
                                  height="18"
                                  rx="2"
                                />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">Date</div>
                              <div className="font-medium">{b.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#B08968]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">
                                Flight time
                              </div>
                              <div className="font-medium">{b.flightTime}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#B08968]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                />
                                <path d="M7 7h10v10H7z" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">Gate</div>
                              <div className="font-medium">{b.gate}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#B08968]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                />
                                <path d="M9 9h6v6H9z" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">
                                Seat no.
                              </div>
                              <div className="font-medium">{b.seat}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex flex-col gap-2 min-w-[180px]">
                        <button className="bg-[#4B2354] text-white px-6 py-2 rounded-lg font-medium mb-2">
                          Download Ticket
                        </button>
                        <button className="border border-gray-300 rounded-lg p-2 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {bookingTab === "stays" && (
                <div className="space-y-6">
                  {stays.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow flex flex-col md:flex-row items-center md:items-stretch p-6 gap-6"
                    >
                      {/* Hotel Logo */}
                      <div className="flex items-center justify-center w-24 h-24 bg-[#faf7fd] rounded-xl border border-gray-100">
                        <Image
                          src={s.hotelLogo}
                          alt="Hotel"
                          width={60}
                          height={60}
                        />
                      </div>
                      {/* Stay Info */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                          <div className="text-center md:text-left">
                            <div className="text-gray-500 text-sm">
                              Check-In
                            </div>
                            <div className="text-lg font-bold">{s.checkIn}</div>
                          </div>
                          <div className="text-2xl font-bold text-gray-400">
                            —
                          </div>
                          <div className="text-center md:text-left">
                            <div className="text-gray-500 text-sm">
                              Check Out
                            </div>
                            <div className="text-lg font-bold">
                              {s.checkOut}
                            </div>
                          </div>
                        </div>
                        {/* Details */}
                        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#4B2354]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">
                                Check-in time
                              </div>
                              <div className="font-medium">{s.checkInTime}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#4B2354]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">
                                Check-in out
                              </div>
                              <div className="font-medium">
                                {s.checkOutTime}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#e5dac7] rounded p-1">
                              <svg
                                className="w-5 h-5 text-[#4B2354]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                />
                                <path d="M9 9h6v6H9z" />
                              </svg>
                            </span>
                            <div>
                              <div className="text-xs text-gray-500">
                                Room no.
                              </div>
                              <div className="font-medium">{s.room}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex flex-col gap-2 min-w-[180px]">
                        <button className="bg-[#4B2354] text-white px-6 py-2 rounded-lg font-medium mb-2">
                          Download Ticket
                        </button>
                        <button className="border border-gray-300 rounded-lg p-2 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {activeTab === "payment" && (
          <section className="mt-10">
            <h3 className="text-3xl font-semibold mb-8">Payment methods</h3>
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8 items-center">
              {/* Card */}
              <div className="w-full md:w-1/2 max-w-md">
                <div className="relative bg-[#4B2354] text-white rounded-2xl p-6 h-48 flex flex-col justify-between shadow-md">
                  <div className="flex justify-between items-start">
                    <div className="text-xl tracking-widest font-semibold">
                      **** **** ****
                    </div>
                    <button className="bg-white bg-opacity-20 rounded-full p-1 hover:bg-opacity-40 transition-colors">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 6h18M6 6v12a2 2 0 002 2h8a2 2 0 002-2V6" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-3xl font-bold">4321</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-gray-200">Valid Thru</div>
                      <div className="text-lg font-semibold">02/27</div>
                    </div>
                    <div className="bg-white rounded px-2 py-1 flex items-center gap-1">
                      <span className="text-[#4B2354] font-bold text-xs">
                        VISA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Card */}
              <div className="w-full md:w-1/2 max-w-md flex items-center justify-center">
                <div className="w-full h-48 border-2 border-dashed border-[#4B2354] rounded-2xl flex items-center justify-center">
                  <button
                    className="flex flex-col items-center justify-center"
                    onClick={() => setShowAddCard(true)}
                  >
                    <span className="border-2 border-[#4B2354] rounded-full w-12 h-12 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#4B2354]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6v12M6 12h12" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
