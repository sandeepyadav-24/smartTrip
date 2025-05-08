import React from "react";

const FlightSearchBar = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 items-end w-full">
      <div className="flex flex-col flex-1 min-w-[180px]">
        <label className="text-xs font-medium mb-1">From - To</label>
        <div className="relative flex items-center">
          <input
            className="border rounded-lg px-3 py-2 w-full pr-10"
            placeholder="Delhi-Dubai"
          />
          <span className="absolute right-2 cursor-pointer">
            {/* Swap Icon SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M7.5 4.167V6.25a.833.833 0 01-1.667 0V2.5A.833.833 0 016.667 1.667h3.75a.833.833 0 010 1.666H8.333l5.059 5.059a.833.833 0 01-1.179 1.179L7.5 4.167zm5 11.666v-2.083a.833.833 0 011.667 0v3.75a.833.833 0 01-.834.833h-3.75a.833.833 0 010-1.666h2.084l-5.06-5.059a.833.833 0 111.18-1.179l5.06 5.059z"
                fill="#A08D5F"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col min-w-[120px]">
        <label className="text-xs font-medium mb-1">Trip</label>
        <select className="border rounded-lg px-3 py-2">
          <option>Return</option>
          <option>One Way</option>
          <option>Multi-City</option>
        </select>
      </div>
      <div className="flex flex-col min-w-[180px]">
        <label className="text-xs font-medium mb-1">Depart - Return</label>
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="07 Nov 25 - 13 Nov 25"
          type="text"
        />
      </div>
      <div className="flex flex-col min-w-[180px]">
        <label className="text-xs font-medium mb-1">Passenger - Class</label>
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="1 Passenger, Economy"
          type="text"
        />
      </div>
      <button className="bg-[#A08D5F] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
          <path d="M7.5 13.5l5-4.5-5-4.5v9z" fill="currentColor" />
        </svg>
        Search
      </button>
    </div>
  );
};

export default FlightSearchBar;
