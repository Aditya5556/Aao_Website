import Image from "next/image";


export default function HeroSection() {
    return (
      <section className="relative bg-[#D9C07C] px-6 py-10 md:py-20 overflow-hidden">
  {/* Curve at bottom-left */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    {/* <svg
      className="w-[600px] h-[200px]"
      viewBox="20 0 60 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 Q30 20, 60 20 L60 0 Z"
        fill="#f8f5e4" // this should match the section below this one (main background color)
      />
    </svg> */}
  </div>

  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
    {/* Left Content */}
    <div className="space-y-6 animate-fadeInLeft">
      <h4 className="text-[#b30808] font-semibold text-lg border-l-4 pl-3 border-[#b30808]">
        Aaoji:
      </h4>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#b30808] leading-tight">
        Bold Flavors, Fun Vibes,<br />Authentic Taste
      </h1>
      <p className="text-[#3a2e13] text-lg leading-relaxed">
        Aaoji is your perfect pit stop on the highway, serving up bold, authentic flavors that are fast, fun, and full of taste.
        Whether you are craving a quick bite or a satisfying meal on the go, Aaoji brings the perfect blend of tradition and excitement
        to your journey. Stop by for a flavorful adventure – no detours needed!
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 pt-4">
        <a
          href="#"
          className="bg-white text-[#b30808] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#b30808] hover:text-white transition-all"
        >
          Call Us for Bookings
        </a>
        <a
          href="#"
          className="text-[#b30808] underline font-medium hover:text-black transition-all"
        >
          Explore Menu
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative w-full h-full animate-fadeInRight">
      <div className="overflow-hidden border-[16px] border-[#600808] rounded-tl-[50%] rounded-tr-[50%] shadow-xl">
        <Image
          src="/hero-image.jpg"
          alt="Dish" width={100} height={60}
          className="object-cover w-full h-full rounded-tl-[40%] rounded-tr-[40%]"
        />
      </div>
    </div>
  </div>
</section>
    )
  }
  
  