import React from "react";

interface FlightResultCardProps {
  logo: React.ReactNode;
  airline: string;
  rating: number;
  reviews: number;
  times: string[];
  duration: string;
  stops: string;
  price: string;
}

const FlightResultCard: React.FC<FlightResultCardProps> = ({
  logo,
  airline,
  rating,
  reviews,
  times,
  duration,

  price,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 mb-6">
      <div className="flex flex-col items-center w-32">
        <div className="mb-2">{logo}</div>
        <div className="font-bold text-xl mb-1">{airline}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="bg-[#F3F1E6] text-[#A08D5F] px-2 py-0.5 rounded font-semibold mr-1">
            {rating}
          </span>
          Very Good
          <span className="ml-1">{reviews} reviews</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {times.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{t}</span>
            <span className="text-gray-400">non stop</span>
            <span className="text-gray-400">{duration}</span>
            <span className="text-gray-400">EWR-BNA</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end gap-2 min-w-[120px]">
        <span className="text-xs text-gray-400">starting from</span>
        <span className="text-[#A08D5F] font-bold text-lg">{price}</span>
        <button className="border rounded p-1 hover:bg-[#F3F1E6]">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
              d="M10 18s-6-4.35-6-8.5A4.5 4.5 0 0110 5a4.5 4.5 0 016 4.5C16 13.65 10 18 10 18z"
              stroke="#A08D5F"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>
        <button className="bg-[#A08D5F] text-white px-6 py-2 rounded-lg font-semibold mt-2">
          View Deals
        </button>
      </div>
    </div>
  );
};

export default FlightResultCard;
