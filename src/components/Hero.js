import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Tilt from "react-parallax-tilt";
import "../App.css"; // Import the CSS file for animations and styles

function Hero(){
const[showForm,setShowForm]=useState(false);
const [pos, setPos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);

    return (
  <section
    id="home"
    className="relative z-10 overflow-hidden min-h-screen bg-slate-950 text-white flex items-center px-10 pt-16 overflow-x-hidden"
  >
    {/* CURSOR GLOW (SEPARATE DIV) */}
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    ></div>

    {/* HERO CONTENT */}
    <div className=" relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* TEXT */}
      <div>
        <h2 className=" animate-slideDown text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="typing">Swastika Paul</span>
        </h2>

        <p className=" animate-slideDown text-gray-400 text-lg max-w-xl mb-8">
Turning ideas into reality through code, creativity, and continuous learning.
        </p>

        <div className=" animate-slideDown flex gap-4">
          <a
           href= "/images/swastikaresume.pdf" 
          download 
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200">
  Download Resume
</a>
          
          <button  onClick={() => setShowForm(!showForm)} className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <tilt>
      <div className="flex justify-center md:justify-end">
        <div style={{ transform: "scaleX(-1)" }}>
          <img
            src="/image.jpeg"
            alt="Hero Image"
            className="
              w-80 rounded-full object-cover
              shadow-[0_0_60px_rgba(99,102,241,0.6)]
              animate-[floatSlow_4s_ease-in-out_infinite]
            "
          />
        </div>
      </div>
      </tilt>

    </div>
    {showForm && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
    onClick={() => setShowForm(false)}
  >
    <div
      className="relative w-full max-w-lg mx-4 bg-slate-900 rounded-2xl p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-4 text-2xl text-white hover:text-red-400"
      >
        ×
      </button>

      <ContactForm />
    </div>
  </div>
)}
  </section>
);

}
export default Hero;
