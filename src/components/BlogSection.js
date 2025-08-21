"use client";
import Image from "next/image";
import { blogs } from "@/constant/Blogs";
import CustomButton from "./CustomButton";

const BlogSection = () => {
  // only show latest 2 blogs
  const latestBlogs = blogs.slice(0, 2);

  return (
    <section className="flex justify-center text-black bg-white">
  <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 pt-8 pb-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {latestBlogs.map((blog) => (
        <div key={blog.id} className="rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm">{blog.date}</p>
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <CustomButton
              className="bg-transparent hover:bg-transparent text-teal-600 text-sm mt-3 inline-flex items-center"
              title="Read more"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default BlogSection;
