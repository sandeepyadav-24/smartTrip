"use client";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Experience from "../components/Experience";
import Explore from "../components/Explore";
import Offer from "../components/Offer";
import Hero from "../components/Hero";
import Search from "../components/Search";

export default function Home() {
  const searchRef = useRef<HTMLElement>(null as unknown as HTMLElement);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchRef={searchRef} />
      <main className="flex-grow">
        <Hero />
        <Search ref={searchRef} />
        <Offer />
        <Experience />
        <Explore />
        <Testimonial />
      </main>
      ¯
      <Footer />
    </div>
  );
}
