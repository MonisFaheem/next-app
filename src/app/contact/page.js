import React from 'react'
import PageBanner from '@/components/Banners/PageBanner';
import { FiPhone, FiMail } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomButton from '@/components/CustomButton';


const Page = () => {
  return (
    <>
      <PageBanner title='Contact Us' />
      <main className="mt-5 py-5 px-20 mx-auto">
        <div className="text-white flex">
          {/* left section */}
          <div className="mt-20 text-black flex-[1.2] space-x-4">
            <h1 className="font-bold text-5xl">
              You Will Grow, You Will <br /> Succeed. We Promise That
            </h1>
            <p className="text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              tempore nobis molestiae. Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet consectetur.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="mt-5">
                <FiPhone className="text-teal-600 text-[26px]" />
                <h4 className="pt-3 font-bold text-[24px]">Call for inquiry</h4>
                <p className="pt-3 text-[20px]">+257-999-000</p>
              </div>

              <div className="mt-5">
                <FiMail className="text-teal-600 text-[26px]" />
                <h4 className="pt-3 font-bold text-[24px]">Send us email</h4>
                <p className="pt-3 text-[20px]">hamzarasheed201@gmail.com</p>
              </div>

              <div className="mt-8 pt-5">
                <MdAccessTime className="text-teal-600 text-[26px]" />
                <h4 className="pt-3 font-bold text-[24px]">Opening hours</h4>
                <p className="pt-3 text-[20px]">Mon - Fri: 10am - 10pm</p>
              </div>

              <div className="mt-8 pt-5">
                <IoLocationOutline className="text-teal-600 text-[26px]" />
                <h4 className="pt-3 font-bold text-[24px]">Office</h4>
                <p className="pt-3 text-[20px]">19 Northroad ABC.</p>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="text-black bg-[#EBF5F4] flex-[0.8] px-8 py-10 rounded-xl">
            <h4 className="font-bold text-3xl pt-10 justify-center items-center flex">
              Contact Info
            </h4>
            <p className="pt-5 flex justify-center items-center">
              Lorem ipsum dolor sit amet.
            </p>

            <form action="#">
              <div className="flex flex-col sm:flex-row mt-5 pt-5 gap-5 w-full">
                <div className="flex-1 flex flex-col">
                  <label className="font-semibold">First Name</label>
                  <input
                    className="bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mt-2"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-semibold">Last Name</label>
                  <input
                    className="bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mt-2"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-7">
                <label className="font-semibold">Email Address</label>
                <input
                  className="bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mt-2"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>

              <div className="flex flex-col mt-7">
                <label className="font-semibold">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="bg-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mt-2 mb-5 h-40"
                ></textarea>
              </div>

              <CustomButton className="mt-5 text-white" title="Send Message" />
            </form>
          </div>
        </div>

        {/* map */}
        <div className="mt-20">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176311.46403328853!2d-79.54534331491368!3d46.33234211301733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2854b13122e2ef%3A0x5037b28c7232700!2sNorth%20Bay%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1755796124084!5m2!1sen!2s"
             className='w-full h-full'
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
