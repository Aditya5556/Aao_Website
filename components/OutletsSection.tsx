'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const outlets = [
  { src: '/outlet/blue.jpg', name: 'Gianis Red Icecream' },
  { src: '/outlet/vanila.jpg', name: 'Gianis Blue Icecream' },
  { src: '/outlet/choco.jpg', name: 'Gianis Choco Delight' },
  { src: '/outlet/red.jpg', name: 'Gianis Vanilla Blast' },
];

export default function OutletsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#d9c588] py-16 px-4 md:px-12">
      <div className="text-center mb-8">
        <h4 className="text-red-600 uppercase tracking-wider text-sm mb-1">Outlets</h4>
        <h2 className="text-3xl font-semibold text-red-700">
          Relish Every <span className="italic">Sweet</span> Bite with Gianis
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth no-scrollbar px-10"
        >
          {outlets.map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[400px] flex-shrink-0">
              <Image
                src={item.src}
                alt={item.name}
                width={400}
                height={300}
                className="rounded-xl w-full h-[250px] object-cover"
              />
              <p className="text-center mt-2 text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
