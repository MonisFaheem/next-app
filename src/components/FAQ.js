"use client";
import React from "react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import faqData from "@/constant/faqData";
import { CiCirclePlus } from "react-icons/ci";


function FAQ() {
const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-black">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-500 mt-2">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
      </p>

      {/* FAQ list */}
      <div className="mt-8 gap-7 space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-lg p-4 transition cursor-pointer ${
                isOpen ? "bg-teal-50 border-teal-200" : "border-none"
              }`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* ID Number */}
                  <span
                    className={`font-bold text-2xl ${
                      isOpen ? "text-teal-600" : "text-gray-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Question */}
                  <h3
                    className={`text-lg font-bold ${
                      isOpen ? "text-teal-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Icon */}
                {isOpen ? (
                  <FiX className="text-teal-600 text-xl" />
                ) : (
                  <CiCirclePlus className="text-teal-600 text-3xl" />
                )}
              </div>

              {/* Answer */}
              {isOpen && <p className="mt-3 ml-8 text-gray-600">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;