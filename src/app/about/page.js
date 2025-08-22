import React from "react"
import PageBanner from "@/components/Banners/PageBanner"
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import WorkingWithBest from "@/components/WorkingWithBest";
import BlogSection from "@/components/BlogSection";

function page (){
    return(
    <>
        <div>
           <PageBanner title="About us"/>
        </div>
        <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
           <HowItWorks/>
           <FAQ/>
           <WorkingWithBest/>
           <div className="mt-10 text-center">
              <h2 className="text-4xl text-black font-bold">Blogs</h2>
              <p className="text-gray-600 text-xl">
                  Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
                  tristique in dolor
              </p>
            <BlogSection/>
           </div>
           
        </div>
    </>
        
    )
}
export default page;