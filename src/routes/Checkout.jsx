import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CreditCard, Smartphone, Globe, Wallet } from "lucide-react"; // icons

const plans = {
  Gold: {
    price: 300,
    features: [
      "Access to basic professionals",
      "24/7 customer support",
      "Up to 3 service requests/month",
    ],
  },
  Skilled: {
    price: 500,
    features: [
      "Access to all professionals",
      "24/7 priority customer support",
      "Up to 8 service requests/month",
      "Priority scheduling",
    ],
  },
  Pro: {
    price: 1000,
    features: [
      "Access to premium professionals",
      "24/7 VIP customer support",
      "Unlimited service requests",
      "Priority scheduling",
      "Dedicated project manager",
    ],
  },
};

export default function Checkout() {
  const { planName } = useParams();
  const navigate = useNavigate();
  const plan = plans[planName];
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  if (!plan) {
    return (
      <h2 className="text-center text-red-500 mt-10">
        ❌ Invalid plan selected.
      </h2>
    );
  }

  const handlePay = () => {
    navigate("/confirm");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200">
        
        {/* Plan Summary */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Checkout - {planName} Plan
          </h2>
          <p className="mt-2 text-2xl font-semibold text-green-700">
            ₹{plan.price}/month
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
            {plan.features.map((f, i) => (
              <li
                key={i}
                className="bg-green-50 px-3 py-1 rounded-full border border-green-200"
              >
                ✔ {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Section */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
          <label className="block text-lg font-semibold text-gray-800 mb-3">
            Choose Payment Method
          </label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <button
              onClick={() => setPaymentMethod("UPI")}
              className={`flex flex-col items-center p-4 rounded-xl border transition ${
                paymentMethod === "UPI"
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300 hover:border-green-400"
              }`}
            >
              <Smartphone className="w-6 h-6 mb-2 text-green-700" />
              <span className="text-sm font-medium">UPI</span>
            </button>
            <button
              onClick={() => setPaymentMethod("Card")}
              className={`flex flex-col items-center p-4 rounded-xl border transition ${
                paymentMethod === "Card"
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300 hover:border-green-400"
              }`}
            >
              <CreditCard className="w-6 h-6 mb-2 text-green-700" />
              <span className="text-sm font-medium">Card</span>
            </button>
            <button
              onClick={() => setPaymentMethod("NetBanking")}
              className={`flex flex-col items-center p-4 rounded-xl border transition ${
                paymentMethod === "NetBanking"
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300 hover:border-green-400"
              }`}
            >
              <Globe className="w-6 h-6 mb-2 text-green-700" />
              <span className="text-sm font-medium">Net Banking</span>
            </button>
            <button
              onClick={() => setPaymentMethod("Cash")}
              className={`flex flex-col items-center p-4 rounded-xl border transition ${
                paymentMethod === "Cash"
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300 hover:border-green-400"
              }`}
            >
              <Wallet className="w-6 h-6 mb-2 text-green-700" />
              <span className="text-sm font-medium">Cash</span>
            </button>
          </div>

          {/* UPI Input */}
          {paymentMethod === "UPI" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Enter UPI ID
              </label>
              <input
                type="text"
                placeholder="example@upi"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
          )}

          {/* Card Input */}
          {paymentMethod === "Card" && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardDetails.number}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, number: e.target.value })
                  }
                  placeholder="1234 5678 9012 3456"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                    placeholder="MM/YY"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                    placeholder="123"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Net Banking */}
          {paymentMethod === "NetBanking" && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Bank
              </label>
              <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none">
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
              </select>
            </div>
          )}

          {/* Cash */}
          {paymentMethod === "Cash" && (
            <p className="text-gray-700 text-sm">
              💵 Pay directly to the service provider after service completion.
            </p>
          )}
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePay}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-xl"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
