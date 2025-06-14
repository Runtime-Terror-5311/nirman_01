import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-grey py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-sm text-black flex flex-col md:flex-row gap-0 md:gap-4 items-center">
          
          <a href="#" className="hover:text-gray-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-500 transition">Privacy Policy</a>
          <span>&copy; {new Date().getFullYear()} All rights reserved</span>
        </div>

        {/* Right Side */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/?hl=en" className="hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
