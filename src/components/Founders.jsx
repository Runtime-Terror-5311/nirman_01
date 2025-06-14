import nanda from "../assets/nanda.jpg";
import shubhangi from "../assets/shubhangi.jpg";
import yuvraj from "../assets/yuvraj.jpg";
import shristi from "../assets/shristi.jpg";
import aditya from "../assets/aditya.png";


export default function Founders() {
  const founders = [
    { name: "Sumant Nanda", role: "Co-Founder & CTO", image: nanda },
    { name: "Shubhangi", role: "Co-Founder & CTO", image: shubhangi },
    { name: "Yuvraj Singh", role: "Co-Founder & CTO", image: yuvraj },
    { name: "Shristi Shreya", role: "Co-Founder & CTO", image: shristi },
    { name: "Aditya Bhardwaj", role: "CTO", image: aditya},
  ];

  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet Our Founders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
        {founders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-32 h-32 rounded-full object-cover cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-110 "

            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{founder.name}</h3>
            <p className="text-sm text-gray-500">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

