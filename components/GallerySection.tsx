"use client"

import Image from "next/image"

const galleryImages = [
  { src: "/Gallery/burger.jpg", alt: "Burger" },
  { src: "/Gallery/brownie.jpg", alt: "Brownie" },
  { src: "/Gallery/noodles.jpg", alt: "Paratha Basket" },
  { src: "/Gallery/choco.jpg", alt: "South Indian Meal" },
  { src: "/Gallery/paratha.jpg", alt: "Stuffed Paratha" },
  { src: "/Gallery/pizza.jpg", alt: "Pizza" },
  { src: "/Gallery/shrikhand.jpg", alt: "Veg Starter" },
  { src: "/Gallery/tandoori.jpg", alt: "Kesari Dessert" },
  { src: "/Gallery/vada.jpg", alt: "Veg Noodles" },
]

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-[#dec68c] py-12 px-4">
      <h3 className="text-center text-lg text-red-800 font-semibold uppercase tracking-widest mb-2">
        Explore Our Gallery
      </h3>
      <h2 className="text-center text-2xl md:text-3xl font-medium text-red-700 mb-10">
        Taste the Story: <span className="italic font-light">A Visual Journey Through Our Dishes!</span>
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="break-inside-avoid rounded-xl shadow-lg overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          Visit Instagram
        </button>
      </div>
    </section>
  )
}

export default GallerySection;
