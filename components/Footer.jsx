import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-gray-50 border-t border-gray-200 px-6 py-6 text-gray-700"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* 👇 Left Section - Logo + Legal */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <img src="/logo2.png" alt="Nirmaan Logo" className="h-6 w-6 object-contain" />
            Nirmaan
          </div>
          <div className="flex gap-4 text-gray-500">
            <span className="hover:text-black transition">&copy; {new Date().getFullYear()} All rights reserved</span>
            <a href="#" className="hover:text-black transition">Terms of Service</a>
            <a href="#" className="hover:text-black transition">Privacy Policy</a>
          </div>
        </div>

        {/* 👉 Right Section - Socials */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-700 transition"><FaLinkedin /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
        </div>
      </div>
    </motion.footer>
  );
}
