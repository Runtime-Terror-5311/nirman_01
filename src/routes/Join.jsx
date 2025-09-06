import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wrench, Star, Briefcase, Ruler, Hammer, Zap, Shield } from "lucide-react";

export default function Join() {
  const [step, setStep] = useState(0); // 0 = hero

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ✅ Step 0 – Hero */}
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 pt-32"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-yellow-500 to-green-600 bg-clip-text text-transparent">
              Join as a Service Provider 🚀
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get verified clients, secure payments, and premium exposure with Nirmaan.  
              Whether you’re a contractor, architect, or electrician — we help you grow faster.
            </p>
            <motion.button
              onClick={() => setStep(1)}
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-green-800 transition"
            >
              Start Registration →
            </motion.button>

            {/* Why Join Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-10">Why Join Nirmaan?</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: <Briefcase size={28} />, title: "More Projects", desc: "Get access to hundreds of verified leads." },
                  { icon: <Shield size={28} />, title: "Secure Payments", desc: "We handle payments so you focus on work." },
                  { icon: <Star size={28} />, title: "Build Reputation", desc: "Earn ratings & reviews to grow faster." },
                  { icon: <Zap size={28} />, title: "Gold Plan", desc: "AI recommendations + premium visibility." },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full text-green-700">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-600">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ✅ Steps 1–3 – Registration Wizard */}
        <AnimatePresence mode="wait">
          {step > 0 && step < 4 && (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="mt-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10"
            >
              {/* Progress */}
              <div className="flex justify-between mb-10">
                {["Info", "Work", "Plan"].map((label, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className={`h-2 rounded-full ${step - 1 > i ? "bg-green-600" : "bg-gray-300"}`} />
                    <p className="text-sm mt-2 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* Step 1 – Personal Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2"><User /> Personal Info</h2>
                  <input className="w-full p-3 border rounded-lg" placeholder="Full Name" />
                  <input className="w-full p-3 border rounded-lg" placeholder="Phone" />
                  <input className="w-full p-3 border rounded-lg" placeholder="Email" />
                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition"
                  >
                    Next →
                  </button>
                </div>
              )}
        const [selectedWork, setSelectedWork] = useState(null);
              {/* Step 2 – Work Category */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2"><Wrench /> Work Details</h2>
                  <p className="text-gray-600">Select your expertise:</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Hammer />, title: "Contractor" },
                      { icon: <Ruler />, title: "Architect" },
                      { icon: <Wrench />, title: "Plumber" },
                      { icon: <Zap />, title: "Electrician" },
                    ].map((job, i) => (
                      <div key={i} className="cursor-pointer p-6 border rounded-xl hover:border-green-600 hover:shadow-lg transition flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center text-green-700">{job.icon}</div>
                        <p className="mt-2 font-semibold">{job.title}</p>
                      </div>
                    ))}
                  </div>
                  <input className="w-full p-3 border rounded-lg" placeholder="Years of Experience" />
                  <button
                    onClick={() => setStep(3)}
                    className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition"
                  >
                    Next →
                  </button>
                </div>
              )}

              {/* Step 3 – Subscription */}
              {step === 3 && (
                <div className="space-y-6 text-center">
                  <h2 className="text-2xl font-bold flex items-center justify-center gap-2"><Star /> Choose Plan</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 border rounded-xl hover:shadow-xl cursor-pointer">
                      <h3 className="text-lg font-bold">Free</h3>
                      <p className="text-gray-600">Basic Listing</p>
                    </div>
                    <div className="p-6 border-2 border-yellow-500 rounded-xl shadow-lg cursor-pointer bg-yellow-50">
                      <h3 className="text-lg font-bold text-yellow-700">Gold ₹300</h3>
                      <p className="text-gray-600">Priority + AI Matching</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(4)}
                    className="mt-6 w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition"
                  >
                    Finish & Join 🎉
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Step 4 – Success */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mt-16 space-y-8"
          >
            <h2 className="text-4xl font-extrabold text-green-700">🎉 Welcome to Nirmaan!</h2>
            <p className="text-gray-600">Your provider profile is ready. Here’s your preview:</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700">12</h3>
                <p>Projects</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700">₹25,000</h3>
                <p>Earnings</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-700">⭐ 4.9</h3>
                <p>Rating</p>
              </div>
            </div>
            <button
              onClick={() => setStep(0)}
              className="mt-8 px-8 py-3 bg-green-700 text-white rounded-xl font-bold hover:bg-green-800"
            >
              Back to Start
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
