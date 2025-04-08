"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const menuCards = [
  {
    image: "/Menu/menu1.jpg",
    alt: "Menu Page 1",
  },
  {
    image: "/Menu/menu2.jpg",
    alt: "Menu Page 2",
  },
  {
    image: "/Menu/menu3.jpg",
    alt: "Menu Page 3",
  },
];

const MenuSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = window.innerWidth < 768 ? 250 : 400;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="menu" className="bg-[#fff8ec] py-12 px-4">
      <h3 className="text-center text-2xl md:text-3xl text-red-700 font-semibold mb-6">
        Explore the Magic of Our{" "}
        <span className="italic font-light">Savory Creations</span>
      </h3>

      {/* Scroll Buttons + Image Slider */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex  gap-60 overflow-x-auto scroll-smooth no-scrollbar px-4 md:px-10"
        >
          {menuCards.map((item, idx) => (
            <div
              key={idx}
              className="relative min-w-[420px] md:min-w-[520px] h-[620px] flex-shrink-0 rounded-xl shadow-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          Call Us for Bookings
        </button>
      </div>
    </section>
  );
};

export default MenuSection;
