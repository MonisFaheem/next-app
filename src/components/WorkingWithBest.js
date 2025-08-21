import React from "react";
import Image from "next/image";

function WorkingWithBest() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-black">
        {/* Left side images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src="/images/blog1.jpg"
              alt="Job 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src="/images/blog1.jpg"
              alt="Job 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 rounded-xl col-span-2 overflow-hidden">
            <Image
              src="/images/blog1.jpg"
              alt="Job 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side text */}
        <div>
          <h2 className="text-4xl font-bold">
            We’re Only Working <br/> With The Best
          </h2>
          <p className="text-gray-600 mt-7">
            Ultricies purus dolor viverra malesuada at cursus justo. Ultrices purus diam
            egestas amet faucibus tempor blandit.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-15 text-xl font-semibold">
            <div className="flex items-center gap-2">
              <Image src="/icons/Frame1.png" alt="Quality" width={60} height={60} />
              <p>Quality Job</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/Frame3.png" alt="Resume" width={60} height={60} />
              <p>Resume Builder</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/Frame2.png" alt="Company" width={60} height={60} />
              <p>Top Companies</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/Frame4.png" alt="Talents" width={60} height={60} />
              <p>Top Talents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingWithBest;
