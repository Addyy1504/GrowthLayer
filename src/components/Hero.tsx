import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Aurora from "./Aurora";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 pt-12 md:pt-0"
    >
      {/* 🖤 Background Layer */}
      <div className="absolute inset-0 bg-black -z-20" />

      {/* 🌌 Aurora Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Aurora
          colorStops={["#3ef4e4", "#3ef4e4", "#3ef4e4"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* ✨ Headline */}
      <div className="relative z-10 text-center max-w-md md:max-w-4xl">
        <h1
          className={`font-black text-white transition-all duration-1000 leading-tight
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl`}
        >
          Engineering Brands
          <br />
          <span className="text-[#3EF4E4]">for the Digital Age</span>
        </h1>
      </div>

      {/* 📩 CTA Button */}
      <div
        className={`relative z-10 mt-8 md:mt-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-black bg-[#3EF4E4] hover:bg-white hover:shadow-[0_0_20px_#3EF4E4] hover:scale-105 transition-all duration-300 text-sm sm:text-base"
        >
          Get in Touch
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
        </a>
      </div>
    </section>
  );
}
