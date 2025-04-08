import {
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
  } from "react-icons/fa6";
  
  const Footer = () => {
    return (
      <footer className="bg-[#e1c97f] pt-10 text-sm text-gray-800">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
  
          
          <div>
            <img
              src="/logo.png" 
              alt="Aaoji"
              className="w-24 mb-3"
            />
            <p className="mb-4 text-sm">
              Bold Flavors, Fun Vibes, <br />
              Authentic Taste
            </p>
            <div className="flex space-x-3 text-red-700 text-lg">
              <a href="#" className="hover:text-red-900"><FaInstagram /></a>
              <a href="#" className="hover:text-red-900"><FaXTwitter /></a>
              <a href="#" className="hover:text-red-900"><FaFacebookF /></a>
            </div>
          </div>
  
        
          <div>
            <h4 className="text-red-700 font-semibold mb-2 tracking-wide">
              QUICK LINK<span className="text-xs">/</span>
            </h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
            </ul>
          </div>
  
          
          <div>
            <h4 className="text-red-700 font-semibold mb-2 tracking-wide">
              GET IN TOUCH
            </h4>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
            <p className="mt-2">Lorem ipsum dolor sit</p>
            <p className="mt-2 font-semibold">+91 12461234567899</p>
          </div>
  
      
          <div>
            <h4 className="text-red-700 font-semibold mb-2 tracking-wide">
              OPENING HOUR<span className="text-xs">/</span>
            </h4>
            <p>Mon to Sun: 12PM to 12AM</p>
          </div>
        </div>
  
      
        <div className="bg-[#6e0000] text-white text-center text-xs py-3 mt-4">
          © 2025 Aaoji. All Rights Reserved. Designed & Developed by <span className="font-semibold">Ezazotel</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  