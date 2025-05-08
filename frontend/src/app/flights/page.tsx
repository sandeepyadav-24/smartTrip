import React from "react";
import FlightSearchBar from "../../components/FlightSearchBar";
import FlightFiltersSidebar from "../../components/FlightFiltersSidebar";
import FlightSortTabs from "../../components/FlightSortTabs";
import FlightResultCard from "../../components/FlightResultCard";
import FlightShowMoreButton from "../../components/FlightShowMoreButton";

const flightResults = [
  {
    airline: "Emirates",
    logo: <img src="/images/emirates.png" alt="Emirates" className="h-12" />, // Replace with actual logo path
    rating: 4.2,
    reviews: 54,
    times: ["12:00 pm - 01:28 pm", "12:00 pm - 01:28 pm"],
    duration: "2h 28m",
    stops: "non stop",
    price: "₹10000",
  },
  {
    airline: "flydubai",
    logo: <img src="/images/flydubai.png" alt="flydubai" className="h-12" />, // Replace with actual logo path
    rating: 4.2,
    reviews: 54,
    times: ["12:00 pm - 01:28 pm", "12:00 pm - 01:28 pm"],
    duration: "2h 28m",
    stops: "non stop",
    price: "₹10000",
  },
  {
    airline: "Qatar",
    logo: <img src="/images/qatar.png" alt="Qatar" className="h-12" />, // Replace with actual logo path
    rating: 4.2,
    reviews: 54,
    times: ["12:00 pm - 01:28 pm", "12:00 pm - 01:28 pm"],
    duration: "2h 28m",
    stops: "non stop",
    price: "₹10000",
  },
  {
    airline: "Etihad",
    logo: <img src="/images/etihad.png" alt="Etihad" className="h-12" />, // Replace with actual logo path
    rating: 4.2,
    reviews: 54,
    times: ["12:00 pm - 01:28 pm", "12:00 pm - 01:28 pm"],
    duration: "2h 28m",
    stops: "non stop",
    price: "₹10000",
  },
];

const FlightsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F3] py-8 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FlightSearchBar />
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-1/4 w-full">
            <FlightFiltersSidebar />
          </div>
          <div className="md:w-3/4 w-full">
            {/* Map and route section placeholder */}
            <div className="bg-white rounded-xl shadow p-4 mb-6 h-48 flex items-center justify-center">
              <span className="text-gray-400">
                [Map & Route Visualization Here]
              </span>
            </div>
            <FlightSortTabs />
            <div>
              <div className="text-sm text-gray-500 mb-2">
                Showing 4 of 257 places
              </div>
              {flightResults.map((flight, idx) => (
                <FlightResultCard key={idx} {...flight} />
              ))}
              <FlightShowMoreButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
