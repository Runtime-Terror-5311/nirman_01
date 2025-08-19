import React, { useState, useEffect } from "react";
import { Wrench, Paintbrush, Hammer, Zap, Droplets } from "lucide-react";
import ConsultationForm from "../components/ConsultationForm";

// 👇 Local assets
import plumberImg from "/src/assets/plumber.png";
import elecImg from "/src/assets/elec.png";
import designImg from "/src/assets/design.png";
import carpImg from "/src/assets/carpentar.png";
import mainImg from "/src/assets/main.png"; // ✅ Maintenance cover image

const Maintenance = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Plumbing Services",
      icon: <Droplets className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Fix leaks, install pipelines, and handle bathroom fittings with professional plumbers.",
      img: plumberImg,
      experts: ["Rajesh Verma", "Sahil Khan"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Electrical Services",
      icon: <Zap className="w-12 h-12 text-yellow-500 mb-4" />,
      desc: "Certified electricians for wiring installation, repair, and maintenance.",
      img: elecImg,
      experts: ["Amit Sharma", "Ravi Kumar"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Interior Maintenance",
      icon: <Wrench className="w-12 h-12 text-indigo-600 mb-4" />,
      desc: "Maintain interiors with cleaning, decor upgrades, and minor design fixes.",
      img: designImg,
      experts: ["Priya Singh", "Ankita Das"],
      color: "from-indigo-500 to-purple-700",
    },
    {
      title: "Carpentry & Painting",
      icon: <Hammer className="w-12 h-12 text-green-600 mb-4" />,
      desc: "Skilled carpenters for furniture repairs, painting, polishing, and woodwork.",
      img: carpImg,
      experts: ["Rohit Mehra", "Deepak Joshi"],
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section className="px-8 py-16">
      {/* ✅ Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${mainImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide text-center drop-shadow-lg">
            Maintenance Services
          </h1>
        </div>
      </div>

      {/* ✅ Intro */}
      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Keep your home and office in top condition with Nirmaan’s trusted
          maintenance professionals. From quick fixes to regular servicing,
          we’ve got you covered with our verified experts.
        </p>
      </div>

      {/* ✅ Services Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Top Image */}
            <div className="h-44 flex items-center justify-center bg-gray-100">
              <img
                src={service.img}
                alt={service.title}
                className="h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              {service.icon}
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {/* Expert List */}
              <div className="mb-4">
                <p className="font-medium text-gray-800">Available Experts:</p>
                <ul className="text-gray-600">
                  {service.experts.map((exp, i) => (
                    <li key={i}>👤 {exp}</li>
                  ))}
                </ul>
              </div>

              {/* Hire Now Button */}
              <button
                onClick={() =>
                  setSelectedExpert(
                    `${service.experts[0]} (from ${service.title})`
                  )
                }
                className={`px-5 py-2 text-white rounded-lg transition bg-gradient-to-r ${service.color} hover:opacity-90`}
              >
                Hire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Hire Message Popup */}
      {selectedExpert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-md text-center animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Request Sent!
            </h2>
            <p className="text-gray-600 mb-6">
              Your request has been shared with{" "}
              <span className="font-semibold">{selectedExpert}</span>. They will
              connect with you shortly to discuss details.
            </p>
            <button
              onClick={() => setSelectedExpert(null)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Want hassle-free maintenance?
        </h3>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition"
        >
          Book a Free Consultation
        </button>
      </div>

      {/* ✅ Modal Form */}
      <ConsultationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default Maintenance;
