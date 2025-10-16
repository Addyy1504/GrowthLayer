import { useEffect, useRef, useState } from 'react';

export default function CheekyQuotes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quotes = [
    {
      text: "Brands don't need noise. They need impact.",
      bg: 'bg-white',
      text_color: 'text-black',
    },
    {
      text: "We don't just build websites. We build weapons.",
      bg: 'bg-black',
      text_color: 'text-white',
    },
    {
      text: 'Everything you imagine, we automate.',
      bg: 'bg-white',
      text_color: 'text-black',
    },
  ];

  return (
    <section ref={sectionRef} className="py-0">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`${quote.bg} ${quote.text_color} py-32 px-6 relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <p
              className={`text-4xl md:text-6xl lg:text-7xl font-black text-center leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              "{quote.text}"
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
