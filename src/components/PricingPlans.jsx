const plans = [
  {
    name: "Gold",
    price: "300",
    description: "Perfect for small home repairs and maintenance tasks.",
    features: [
      "Access to basic professionals",
      "24/7 customer support",
      "Up to 3 service requests/month"
    ],
    missing: ["Priority scheduling", "Dedicated project manager"],
    bg: "rgb(244, 242, 242)"
  },
  {
    name: "Skilled",
    price: "500",
    description: "Ideal for renovation projects and medium-sized work.",
    features: [
      "Access to all professionals",
      "24/7 priority customer support",
      "Up to 8 service requests/month",
      "Priority scheduling"
    ],
    missing: ["Dedicated project manager"],
    popular: true,
    bg: "rgb(240, 238, 238)"
    
  },
  {
    name: "Pro",
    price: "1000",
    description: "Complete solution for full home construction projects.",
    features: [
      "Access to premium professionals",
      "24/7 VIP customer support",
      "Unlimited service requests",
      "Priority scheduling",
      "Dedicated project manager"
    ],
    missing: [],
    bg: "rgb(240, 238, 238)",
  }
];

export default function PricingPlans() {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
        <p className="mt-2 text-lg text-gray-600">
          Choose the right plan that fits your construction needs. All plans include access to our verified professionals.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{ backgroundColor: plan.bg }}
            className={`border rounded-xl p-6 flex flex-col justify-between shadow-md ${
              plan.popular ? "border-teal-700 ring-2 ring-teal-700" : ""
            }`}
          >
            {plan.popular && (
              <span className="text-sm font-semibold text-white bg-teal-600 px-3 py-1 rounded-full w-fit mb-2">POPULAR</span>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="text-2xl font-bold mt-2">₹{plan.price}<span className="text-base font-medium">/month</span></p>
              <p className="text-sm text-gray-700 mt-2 mb-4">{plan.description}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">✔ {feature}</li>
                ))}
                {plan.missing.map((item, idx) => (
                  <li key={idx} className="text-gray-500 line-through">✘ {item}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-teal-700 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
