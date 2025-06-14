export default function GetStarted() {
  return (
    <div className="bg-[#173766] py-24 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Build Your Dream Home?
      </h2>
      <p className="text-lg mb-8">
        Join thousands of satisfied customers who  have transformed <br/> their homes with NIRMAAN.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer shadow-md">
          Get Started Today
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#173766] text-white font-medium py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
}
