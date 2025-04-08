"use client";

import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    text: "Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip!",
    name: "Suresh Naithani",
  },
  {
    text: "I've tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing, and they've got a fun, hygienic setup!",
    name: "Rekha Dixit",
  },
  {
    text: "Stopped by Aaoji and felt wow! The food was served hot, tasty, and full of flavor. Great experience!",
    name: "Sarthak Singh",
  },
  {
    text: "The ambience was lovely and the service was top-notch. Would definitely recommend it to my friends and family!",
    name: "Aman Verma",
  },
  {
    text: "Best roadside dhaba I've been to! Super hygienic and quick service. Great stop for travelers.",
    name: "Priya Thakur",
  },
  {
    text: "We loved every dish we tried. The staff was courteous and the food arrived hot and fresh!",
    name: "Rajeev Kapoor",
  },
];

const TestimonialAndContactSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;

    const scrollTestimonials = () => {
      scrollInterval = setInterval(() => {
        if (container && !isHovered) {
          container.scrollBy({
            left: 1,
            behavior: "smooth",
          });
        }
      }, 30);
    };

    scrollTestimonials();

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <section className="bg-[#f9efd4] py-12 px-4">
      <h4 className="text-center text-red-700 text-sm mb-2 tracking-wide uppercase">
        Testimonials
      </h4>
      <h3 className="text-center text-2xl md:text-3xl text-red-700 font-semibold mb-8">
        Raving Reviews/: Hear from Our Happy Foodie/!
      </h3>

      {/* Scrollable testimonials */}
      <div
        ref={scrollRef}
        className="overflow-auto scroll-smooth no-scrollbar px-2 md:px-10 mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 w-max">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[300px] bg-white border border-red-200 rounded-md p-4 shadow-md flex flex-col justify-between"
            >
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                ❝ {item.text}
              </p>
              <p className="font-semibold text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 mt-10">
        <div className="bg-white border border-red-200 rounded-md h-96 flex items-center justify-center text-red-600 font-semibold text-sm shadow-md">
          MAP HERE
        </div>

        <div className="bg-white border border-red-200 rounded-md p-6 shadow-md">
          <h4 className="text-red-700 font-semibold mb-4 text-sm uppercase">
            Fill in detail/ to book a private party!
          </h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your full name*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-red-400"
            />
            <div className="flex gap-2">
              <select className="w-1/3 px-4 py-2 border border-gray-300 rounded-md text-sm">
                <option value="+91">+91 IND</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile number*"
                className="w-2/3 px-4 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            />
            <textarea
              rows={3}
              placeholder="Tell us something about your enquiry!"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md text-sm hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndContactSection;
