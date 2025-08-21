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
        <div className="px-4 sm:px-8 lg:px-80">
           <HowItWorks/>
           <FAQ/>
           <WorkingWithBest/>
           <div className="mt-10 text-center">
              <h2 className="text-3xl text-black font-bold">Blogs</h2>
              <p className="text-gray-600">
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