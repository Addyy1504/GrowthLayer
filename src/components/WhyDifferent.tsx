import { useEffect, useRef, useState } from 'react';
import { Rocket, PenTool, Cog } from 'lucide-react';
import Pattern from '../assets/Pattern.png';

export default function WhyDifferent() {
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

  const points = [
    {
      number: '01',
      title: 'Strategic Thinking',
      description:
        'Every project starts with a sharp strategy — so your brand moves with intention, not just motion.',
      icon: Rocket,
    },
    {
      number: '02',
      title: 'Design That Speaks',
      description:
        'We craft visuals and experiences that don’t just look good — they leave a lasting impression.',
      icon: PenTool,
    },
    {
      number: '03',
      title: 'Systems That Scale',
      description:
        'Our automation-first approach ensures your brand grows without adding chaos or manual work.',
      icon: Cog,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-black pt-36 pb-24 md:pb-32 overflow-hidden"
    >
      {/* 🌿 Pattern at Top */}
      <div className="absolute top-0 left-0 w-full">
        <img
          src={Pattern}
          alt="Pattern Divider"
          className="w-full h-[80px] object-cover opacity-90 pointer-events-none select-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 🧠 Section Title */}
        <h2
          className={`text-4xl md:text-6xl font-black mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why Brands Choose Us<span className="text-[#3EF4E4]">.</span>
        </h2>

        <p
          className={`text-gray-500 text-lg md:text-xl mb-16 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          We don’t just build campaigns — we engineer growth engines.  
          Strategy, storytelling, and systems working as one.
        </p>

        {/* ✨ Points Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.number}
                className={`transition-all duration-1000 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Number */}
                <div className="text-5xl font-black text-[#3EF4E4] mb-4">
                  {point.number}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 flex justify-center items-center gap-2">
                  <Icon size={22} className="text-[#3EF4E4]" />
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg max-w-xs mx-auto">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
