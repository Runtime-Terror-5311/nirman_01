import React from "react";
import { motion } from "framer-motion";
import { Mail, HelpCircle, AlertTriangle } from "lucide-react";

export default function Support({ type }) {
  const renderContent = () => {
    switch (type) {
      case "Contact":
        return (
          <div className="text-center bg-white shadow-xl rounded-xl p-10 max-w-2xl mx-auto">
            <Mail className="w-16 h-16 mx-auto text-teal-600 mb-4" />
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions? Fill the form and our team will reach out to you within 24 hours.
            </p>
            <form className="space-y-4">
              <input
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition"
                placeholder="Your Name"
              />
              <input
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition"
                placeholder="Your Email"
              />
              <textarea
                className="w-full border rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-teal-500 outline-none transition"
                placeholder="Your Message"
              ></textarea>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 shadow-md transition">
                Send Message
              </button>
            </form>
          </div>
        );

      case "FAQ":
        return (
          <div className="bg-white shadow-xl rounded-xl p-10 max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto text-teal-600 mb-4" />
            <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How do I hire a professional?",
                  a: "Go to the Hire section, select your category, and book a professional in just a few clicks.",
                },
                {
                  q: "What payment methods are accepted?",
                  a: "We accept UPI, debit/credit cards, and wallets. Payments are secure and encrypted.",
                },
                {
                  q: "Do you provide emergency services?",
                  a: "Yes, we offer 24/7 emergency support for critical issues such as plumbing or electrical failures.",
                },
                {
                  q: "Can I cancel or reschedule a booking?",
                  a: "Yes, bookings can be canceled or rescheduled up to 24 hours before the appointment without extra charges.",
                },
                {
                  q: "Are the service providers verified?",
                  a: "Absolutely. All professionals undergo strict background checks, skill verification, and training.",
                },
                {
                  q: "Do you offer warranty on services?",
                  a: "Yes, most services include a warranty period for added peace of mind. Details vary by category.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="p-5 border rounded-lg bg-gray-50 cursor-pointer shadow-sm hover:shadow-md transition"
                >
                  <summary className="font-semibold text-lg">{faq.q}</summary>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        );

      case "Report":
        return (
          <div className="text-center bg-white shadow-xl rounded-xl p-10 max-w-2xl mx-auto">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Report an Issue</h2>
            <p className="text-gray-600 mb-6">
              Found something wrong? Help us improve by reporting below.
            </p>
            <form className="space-y-4">
              <input
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none transition"
                placeholder="Issue Title"
              />
              <textarea
                className="w-full border rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-red-400 outline-none transition"
                placeholder="Describe the issue"
              ></textarea>
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 shadow-md transition">
                Submit Report
              </button>
            </form>
          </div>
        );

      default:
        return <p className="text-center text-gray-500">Invalid section</p>;
    }
  };

  return (
    <motion.div
      className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {renderContent()}
    </motion.div>
  );
}
