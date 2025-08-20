"use client";
import React, { useState, useEffect } from "react";
import StatsBanner from "./Banners/StatsBanner";

const Stats = () => {
    const statsData = [
  { id: 1, value: "12k+", label: "Clients worldwide" },
  { id: 2, value: "20k+", label: "Active resumes" },
  { id: 3, value: "18k+", label: "Companies" },
];


  const [stats, setStats] = useState([]);

  useEffect(() => {
    // simulate setting data (later you’ll fetch from backend)
    setStats(statsData);
  }, []);

   return (
  <div className="bg-white w-screen relative left-[50%] right-[50%] -mx-[50vw] py-20">
    <StatsBanner />

    <div className="max-w-6xl mx-auto px-6 mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12">
        {stats.map((stat) => (
          <div key={stat.id}>
            <h2 className="text-3xl font-bold text-teal-600">{stat.value}</h2>
            <p className="text-lg text-black font-semibold mt-2">{stat.label}</p>
            <p className="text-gray-500 mt-2">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              Blandit a massa elementum id scelerisque rhoncus…
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};


export default Stats;
