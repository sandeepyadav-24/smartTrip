import React from "react";

const FlightFiltersSidebar = () => {
  return (
    <aside className="w-full max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filters</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="range"
            min={50}
            max={1200}
            className="w-full accent-[#A08D5F]"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>$50</span>
            <span>$1200</span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Departure Time
          </label>
          <input
            type="range"
            min={0}
            max={24}
            className="w-full accent-[#A08D5F]"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>12:01AM</span>
            <span>11:56PM</span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((r) => (
              <button
                key={r}
                className="border rounded px-2 py-1 text-xs font-medium hover:bg-[#A08D5F] hover:text-white transition"
              >
                {r}+
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Airlines</label>
          <div className="flex flex-col gap-2 text-sm">
            {["Emirated", "Fly Dubai", "Qatar", "Etihad"].map((airline) => (
              <label key={airline} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A08D5F]" />
                {airline}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Trips</label>
          <div className="flex flex-col gap-2 text-sm">
            {[
              "Round trip",
              "On Way",
              "Multi-City",
              "My Dates Are Flexible",
            ].map((trip) => (
              <label key={trip} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#A08D5F]" />
                {trip}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FlightFiltersSidebar;
