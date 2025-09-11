import HomeBanner from "@/components/Banners/HomeBanner";
import HomeCard from "@/components/HomeCard";
import Image from "next/image";
import BrowseByCategory from "@/components/BrowseByCategory";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CustomButton from "@/components/CustomButton";
import BlogSection from "@/components/BlogSection";
import Brand from "@/components/Brand";
import jobs from '../constant/jobs.json';

export default function Home() {
  const recentJobs = jobs.slice(0, 5);
  return (
    <div >
      <HomeBanner/>
      <section>
      <Brand/>
      </section>
      <section className="mt-10 px-10">
        <div className="px-8">
        <h1 className="font-bold text-black text-5xl mb-1">Recent Jobs Availaible</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, perspiciatis?</p>
        </div>
        <div className="flex justify-end mb-4 mr-12">
          <CustomButton title='View all' />
        </div>
        <HomeCard jobs={recentJobs}/>
      </section>
      <section className=" bg-[#E6F2F0]">
        <div className="text-center mt-10 pt-10">
        <h2 className="text-4xl text-black font-bold mb-2">Browse by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id scel...
        </p>
        </div>
        <BrowseByCategory/>
      </section>
      <section>
        <Stats/>
      </section>
      <section className="bg-teal-50">
        <div className="text-center pt-10">
        <h2 className="text-4xl text-black font-bold mb-2">Browse by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id scel...
        </p>
        </div>
        <Testimonials/>
      </section>
      <section className="bg-white" >
        <div className="flex justify-between text-black items-center mb-0 max-w-6xl mx-auto px-6 relative pb-0 pt-20">
        <div>
          <h2 className="text-3xl font-bold">Blogs</h2>
          <p className="text-gray-600">
            Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
            tristique in dolor
          </p>
        </div>
        <CustomButton
         title="View all"
         className="bg-transparent text-teal-600 font-semibold hover:underline hover:bg-transparent"
         />
        
      </div>
        <BlogSection/>
      </section>
    </div>
  );
}
