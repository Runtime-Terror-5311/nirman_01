import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Confirmation() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti effect after load
  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 300);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 p-6">
      <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center border border-green-100">
        
        {/* ✅ Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-600 animate-bounce" />
        </div>

        {/* 🎉 Confetti */}
        {showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full animate-fall"
                style={{
                  top: `-${Math.random() * 20}px`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: ["#22c55e", "#16a34a", "#15803d", "#bbf7d0"][
                    Math.floor(Math.random() * 4)
                  ],
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* 🎊 Confirmation Text */}
        <h1 className="text-3xl font-bold text-green-700">
          Subscription Confirmed!
        </h1>
        <p className="mt-3 text-gray-700 text-lg">
          🎉 Thank you for choosing <span className="font-semibold">Nirmaan</span>.
          <br /> Your plan is now active.
        </p>

        {/* 🔘 Back to Home */}
        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-xl"
        >
          Back to Home
        </Link>
      </div>

      {/* ✨ Confetti Falling Animation */}
      <style>
        {`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
          }
        `}
      </style>
    </div>
  );
}
