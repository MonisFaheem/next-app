"use client";
import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const StatsBanner = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center md:items-start md:justify-between text-white">
        {/* Left side (Text) */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Create A Better Future For Yourself
          </h1>
          <p className="mt-4 text-gray-300">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus…
          </p>
          <div className="mt-6">
            <CustomButton title='Search job'></CustomButton>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-full h-[200px] flex items-center justify-center">
            <Image
                src='/images/StateHero.png'
                alt="Hero Section"
                fill
                className="object-cover"
                priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
