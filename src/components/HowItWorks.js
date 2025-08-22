"use client";
import React from "react";
import { FaUserPlus, FaFileAlt, FaBriefcase, FaCheckCircle } from "react-icons/fa";


function HowItWorks() {

    const Data = [
  {
    icon: <FaUserPlus size={32} />,
    title: "Create Account",
    desc: "Nunc sed a nisi purus. Nibh dis faucibus proin lacus.",
  },
  {
    icon: <FaFileAlt size={32} />,
    title: "Upload Resume",
    desc: "Felis eu ultricies a sed massa. Commodo fringilla sed tempor.",
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "Find Jobs",
    desc: "Commodo fringilla sed tempor risus laoreet ultricies ipsum.",
  },
  {
    icon: <FaCheckCircle size={32} />,
    title: "Apply Job",
    desc: "Nisi enim feugiat enim volutpat. Sem quis viverra.",
  },
];


  return (
    <section className="py-12 text-center text-black">
      <h2 className="text-4xl font-bold">How it works</h2>
      <p className="text-gray-600 text-xl mt-2 max-w-xl mx-auto">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {Data.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow-md border flex flex-col items-center border-none text-center"
          >
            <div className="text-teal-600 mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HowItWorks;
