"use client"

import { useState } from "react"
//import { Menu } from "lucide-react"
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-10 py-4 bg-[#D9C07C] shadow-md">
      
      <div className="text-3xl font-bold text-[#b30808] flex items-center">
        <img src="logo.png" alt="" className="h-10 w-auto mr-2" />
        <span className="hidden sm:block"></span>
      </div>

      
      <nav className="hidden md:flex gap-8 text-gray-900 font-medium text-lg ml-170">
        <a href="#">About Us</a>
        <a href="#">Menu</a>
        <a href="#">Testimonials</a>
        <a href="#">Gallery</a>
      </nav>

   
      <div className="flex items-center gap-4">
      <a href="#" className="text-[#b30808] text-2xl hover:text-black transition-all">
        <FaInstagram />
      </a>
      <a href="#" className="text-[#b30808] text-2xl hover:text-black transition-all">
        <FaFacebook />
      </a>
    </div>
    </header>
  )
}
