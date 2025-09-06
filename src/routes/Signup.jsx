import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-teal-50 to-white px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account 🚀
        </h2>
        <form className="space-y-5">
          <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500">
            <Mail className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500">
            <Lock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none"
            />
          </div>
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 shadow-md transition font-semibold">
            Sign Up
          </button>
        </form>

        {/* Social Signup */}
        <div className="my-6 text-center text-gray-500">or sign up with</div>
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5 mr-2" />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </motion.div>
  );
}
