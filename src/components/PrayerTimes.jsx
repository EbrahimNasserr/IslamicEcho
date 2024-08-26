"use client";
import Loader from "@/app/loading";
import { useGetPrayerTimesByCityQuery } from "@/services/prayerTimeApi";
import { useState, useCallback } from "react";

const PrayerTimes = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const { data, error, isLoading } = useGetPrayerTimesByCityQuery(location);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setLocation((prevLocation) => ({
      ...prevLocation,
      [id]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The actual query is triggered automatically when location changes
  };

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Prayer Times</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-lg mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            value={location.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-slate-500 outline-none bg-transparent rounded-lg"
            required
            aria-label="City"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            id="country"
            value={location.country}
            onChange={handleInputChange}
            className="w-full p-2 border border-slate-500 outline-none bg-transparent rounded-lg"
            required
            aria-label="Country"
          />
        </div>
      </form>
      {isLoading && <Loader />}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 text-center items-center gap-2">
          {Object.entries(data.data.timings)
            .slice(0, 7)
            .map(([name, time]) => (
              <div
                key={name}
                className="bg-gradient-to-b from-transparent to-amber-500 h-28 rounded-lg shadow-lg flex flex-col justify-center items-center p-6"
              >
                <p className="text-xl font-semibold">{name}:</p>
                <p className="text-lg">{time}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PrayerTimes;
