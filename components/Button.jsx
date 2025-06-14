// src/components/Button.jsx

export default function Button({ label, onClick, type = "primary" }) {
  const baseClasses = "px-6 py-3 rounded-xl transition font-medium cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out";

  const styles = {
    primary: "bg-indigo-300 text-white hover:bg-blue-700",
    secondary: "bg-indigo-900 text-white hover:bg-white hover:text-black border border-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${styles[type]}`}
    >
      {label}
    </button>
  );
}
