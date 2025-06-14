import Button from "./Button";


export default function GetStarted() {
  return (
    <div className="py-10 bg-indigo-900 text-white px-[25%] text-center">
      <h2 className="text-3xl font-bold mb-10">Ready to Build Your Dream Home?</h2>
      <p className="text-2xl text-white mb-6">
        Join thousands of satisfied customers who have transformed their homes with NIRMAAN.
      </p>

      <div className="flex justify-center gap-4">
        <Button label="Get Started" type="primary" />
        <Button label="Learn More" type="secondary" />
      </div>
    </div>
  );
}
