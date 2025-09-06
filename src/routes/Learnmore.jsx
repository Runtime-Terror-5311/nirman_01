import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Star, Building2, Wrench, TrendingUp } from "lucide-react";

export default function LearnMore() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">

      {/* Hero Section */}
      {/* <section className="relative text-center py-24 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Learn More About <span className="text-yellow-400">Nirmaan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-10"
        >
          Making construction simple, transparent, and reliable – for clients and service providers.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a href="/start-building" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:scale-105 transition">
            Start Building
          </a>
          <a href="/join" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:scale-105 transition">
            Join as Provider
          </a>
        </motion.div>
      </section> */}

      {/* Our Story */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed"
        >
          The construction industry is highly unorganized. Clients struggle to find trusted professionals, 
          while architects, contractors, and workers struggle to find projects. <span className="font-semibold text-green-700">Nirmaan bridges this gap</span> – 
          creating opportunities for service providers and offering clients a trusted platform with verified 
          experts and secure payments.
        </motion.p>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
          {[
            {
              title: "For Clients",
              steps: [
                "Browse construction & maintenance services",
                "Compare professionals with reviews",
                "Hire & pay securely through Nirmaan",
                "Get invoices & project records automatically",
              ],
            },
            {
              title: "For Service Providers",
              steps: [
                "Register and create your profile",
                "Showcase skills & portfolio",
                "Receive verified client requests",
                "Earn securely & grow with Gold Membership",
              ],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3 text-gray-700">
                {section.steps.map((s, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span> {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Nirmaan?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <Users />, title: "Verified Professionals", desc: "All providers are verified for trust & safety." },
            { icon: <Shield />, title: "Secure Payments", desc: "Pay safely within the app & get invoices." },
            { icon: <Star />, title: "Gold Membership", desc: "Priority listing & AI recommendations." },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl text-center transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full text-green-700">
                {f.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Market Opportunity</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 text-center">
          {[
            { icon: <Building2 />, number: "80%", text: "of construction sector is unorganized" },
            { icon: <Wrench />, number: "38M+", text: "Affordable housing demand by 2030" },
            { icon: <TrendingUp />, number: "₹11,954B", text: "Projected value of India’s construction sector" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full text-green-700">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold">{stat.number}</p>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { text: "I found a reliable architect within 2 days. The process was smooth and payment was hassle-free!", author: "– Rohan Mehta, Client" },
            { text: "Nirmaan gave me 5 projects in a month. Payments are secure and I can focus on my work.", author: "– Sahil khan, Plumber" },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <p className="italic text-gray-700">"{t.text}"</p>
              <p className="mt-4 font-bold">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <p className="text-lg mb-8">Whether you’re building your dream home or offering services, Nirmaan is your trusted partner.</p>
        <div className="flex justify-center gap-6">
          <a href="/start-building" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:scale-105 transition">
            Start Building
          </a>
          <a href="/join" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:scale-105 transition">
            Join as Provider
          </a>
        </div>
      </section>
    </div>
  );
}
