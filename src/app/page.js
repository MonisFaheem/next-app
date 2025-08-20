import HomeBanner from "@/components/Banners/HomeBanner";
import HomeCard from "@/components/HomeCard";
import Image from "next/image";
import BrowseByCategory from "@/components/BrowseByCategory";
import Brand from "@/components/Brand";

export default function Home() {
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
        <HomeCard/>
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
    </div>
  );
}
