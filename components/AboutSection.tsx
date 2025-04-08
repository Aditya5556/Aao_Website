"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#F4E2B6] px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Styled Image Grid */}
        <div className="grid grid-cols-2 gap-8 md:gap-6">
          <Image
            src="/Gallery/burger.jpg"
            alt=""
            width={500}
            height={500}
            className="rounded-[0_30%_0_0] object-cover w-full h-auto"
          />
          <Image
            src="/about2.jpg"
            alt="Noodles"
            width={500}
            height={500}
            className="rounded-[0_30%_0_0] object-cover w-full h-auto"
          />
          <Image
            src="/about3.jpg"
            alt="Kebab"
            width={500}
            height={500}
            className="rounded-[0_0_30%_0] object-cover w-full h-auto"
          />
          <Image
            src="/about4.jpg"
            alt="Drink"
            width={500}
            height={500}
            className="rounded-[0_0_0_30%] object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h4 className="text-[#b30808] text-xl font-medium border-b-2 border-[#b30808] inline-block">
            The Story
          </h4>
          <h2 className="text-4xl font-bold text-[#b30808]">
            What Aaoji is all about!
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Founded in 2020, Aaoji was born out of a passion for bringing
            authentic, bold flavors to the streets, offering a fun twist on
            traditional cuisine. We’ve quickly become a favorite destination for
            locals and travelers alike, serving up not just meals, but
            unforgettable experiences.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Whether you are stopping by for a quick bite or settling in for a
            leisurely meal, we take pride in offering delicious dishes made from
            the finest, locally sourced ingredients.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-[#b30808] text-white px-6 py-3 rounded-full text-sm hover:bg-[#a10707] transition">
              Call Us for Bookings
            </button>
            <a
              href="#menu"
              className="text-[#b30808] underline underline-offset-4 text-sm"
            >
              Explore Menu
            </a>
          </div>
          <div className="text-center mt-4">
            
          </div>
        </div>
      </div>
    </section>
  );
}
