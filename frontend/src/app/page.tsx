import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Experience from "../components/Experience";
import Explore from "../components/Explore";
import Offer from "../components/Offer";
import Hero from "../components/Hero";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Search />
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
