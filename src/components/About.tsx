import { useEffect, useRef, useState } from "react";
import Pattern from "../assets/Pattern.png";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { number: "01", title: "Strategy", description: "We build with clarity and intention." },
    { number: "02", title: "Creativity", description: "We tell stories that leave an impression." },
    { number: "03", title: "Systems", description: "We automate what matters to scale brands." },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-52 pb-52 bg-white text-black overflow-hidden"
    >
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          The Studio<span className="text-[#3EF4E4]">.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base md:text-xl leading-relaxed">
          We’re a creative lab engineering brands with strategy, design, and technology.
        </p>

        <div className="mt-14 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`flex flex-col items-center text-center max-w-xs transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-4xl md:text-5xl font-black text-[#3EF4E4] mb-3 md:mb-4 opacity-90">
                {pillar.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={Pattern}
          alt="Pattern Divider"
          className="w-full h-[80px] object-cover opacity-90 pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
