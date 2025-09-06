import nanda from "/src/assets/nanda.jpg";
import shubhangi from "/src/assets/shubhangi.jpg";
import yuvraj from "/src/assets/yuvraj.jpg";
import shristi from "/src/assets/shristi.jpg";
// import aditya from "/src/assets/aditya.png";

export default function Founders() {
  const founders = [
    { name: "Sumant Nanda", role: "Co-Founder", image: nanda },
    { name: "Shubhangi", role: "Co-Founder", image: shubhangi },
    { name: "Yuvraj Singh", role: "Co-Founder", image: yuvraj },
    { name: "Shristi Shreya", role: "Co-Founder", image: shristi },
    // { name: "Aditya Bhardwaj", role: "CTO", image: aditya },
  ];

  return (
    <div id="founders" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Meet Our Founders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto px-4 justify-items-center">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {founder.name}
            </h3>
            <p className="text-sm text-gray-500">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
