import React from "react";
import jobs from "../../../constant/jobs.json";
import Image from "next/image";
import { LuBriefcaseBusiness, LuWallet } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import PageBanner from "@/components/Banners/PageBanner";
import CustomButton from "@/components/CustomButton";
import JobMap from "@/components/map/JobMap";
import HomeCard from "@/components/HomeCard";

const JobDetailPage = async ({ params }) => {
  const { id } = await params;

  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return (
      <p className="text-center mt-10 text-red-500">Job not found!</p>
    );
  }

  const similarJobs = jobs.filter(
    (j) =>
      j.id !== job.id &&
      j.tags?.some((tag) => job.tags?.includes(tag))
  );

  return (
    <>
      <PageBanner title="Job Details" />

      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md text-black">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <Image
              src={job.logo}
              alt="logo"
              width={70}
              height={70}
            />

            <div>
              <span className="inline-block text-green-500 text-sm mb-2 px-2 bg-[#EBF5F4] rounded">
                {job.time}
              </span>

              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-lg text-gray-600">{job.company}</p>

              <div className="flex flex-wrap gap-6 mt-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <LuBriefcaseBusiness className="text-teal-600" />
                  {job.category}
                </div>

                <div className="flex items-center gap-2">
                  <MdAccessTime className="text-teal-600" />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <LuWallet className="text-teal-600" />
                  {job.salary}
                </div>

                <div className="flex items-center gap-2">
                  <IoLocationOutline className="text-teal-600" />
                  {job.location}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <h2 className="text-2xl font-semibold mb-3">
            Job Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {job.description}
          </p>

          {/* Responsibilities */}
          <h2 className="text-2xl font-semibold mb-3">
            Key Responsibilities
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            {job.responsibilities?.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>

          {/* Skills */}
          <h2 className="text-2xl font-semibold mb-3">
            Professional Skills
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            {job.skills?.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex gap-3 flex-wrap mt-6">
            {job.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#EBF5F4] text-teal-600 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
          {/* Apply Button */}
          <CustomButton
            title="Apply Job"
            className="w-full py-3 text-white"
          />

          {/* Job Overview */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Job Overview
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><b>Job Title:</b> {job.title}</li>
              <li><b>Job Type:</b> {job.type}</li>
              <li><b>Category:</b> {job.category}</li>
              <li><b>Experience:</b> {job.experience}</li>
              <li><b>Degree:</b> {job.degree}</li>
              <li><b>Offered Salary:</b> {job.salary}</li>
              <li><b>Location:</b> {job.location}</li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
            <JobMap
              latitude={job.latitude}
              longitude={job.longitude}
              location={job.location}
            />
          </div>

          {/* Contact Form */}
          <form className="space-y-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />

            <CustomButton
              title="Send Message"
              className="w-full py-3 text-white"
            />
          </form>
        </div>
      </div>

      {/* Similar Jobs */}
      <div className="px-6 max-w-7xl mx-auto mt-12">
        <h2 className="text-4xl text-black font-bold mb-6">
          Similar Jobs
        </h2>

        {similarJobs.length > 0 ? (
          <HomeCard jobs={similarJobs} />
        ) : (
          <p>No similar jobs found.</p>
        )}
      </div>
    </>
  );
};

export default JobDetailPage;