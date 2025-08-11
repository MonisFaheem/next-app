import HomeBanner from "@/components/Banners/HomeBanner";
import HomeCard from "@/components/HomeCard";
import Image from "next/image";
import BrowseByCategory from "@/components/BrowseByCategory";

export default function Home() {
  return (
    <div >
      <HomeBanner/>
      <section className="mt-10 px-10">
        {/* <h1 className="font-bold text-4xl mb-5">Recent Jobs Availaible</h1>
        <p className="text-sm mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, perspiciatis?</p> */}
        <HomeCard/>
<BrowseByCategory/>
      </section>
    </div>
  );
}
