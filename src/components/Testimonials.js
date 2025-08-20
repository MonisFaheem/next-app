"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useState } from "react";
import reviews from "../constant/ReviewsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  const latestReviews = reviews.slice(-3);

  const CustomButtonGroup = ({ next, previous }) => {
  return (
    <>
      {/* Left Arrow */}
      <button
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 
                   bg-teal-600 text-white p-3 rounded-full shadow"
        onClick={previous}
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 
                   bg-teal-600 text-white p-3 rounded-full shadow"
        onClick={next}
      >
        <ChevronRight />
      </button>
    </>
  );
};


  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative m-0">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        renderDotsOutside={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup />}
        arrows={false}
      >
        {latestReviews.map((review) => {
          const isExpanded = expanded[review.id] || false;
          const feedback = review.feedback;

          return (
            <div key={review.id} className="px-4 h-full">
              <div className="bg-white shadow-md rounded-xl p-6 min-h-[320px] flex flex-col justify-between">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  {review.dp ? (
                    <Image
                      src={review.dp}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white text-lg font-bold">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-black">{review.name}</h3>
                    <div className="flex text-yellow-500">
                      {"⭐".repeat(review.stars)}
                    </div>
                  </div>
                </div>

                {/* Title + Feedback */}
                <h4 className="text-lg font-bold mb-2">{review.title}</h4>
                <p className="text-gray-600 flex-grow">
                  {isExpanded
                    ? feedback
                    : feedback.slice(0, 100) +
                      (feedback.length > 100 ? "..." : "")}
                </p>

                {/* Read More / Less */}
                {feedback.length > 100 && (
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="mt-2 text-teal-600 font-semibold text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;

