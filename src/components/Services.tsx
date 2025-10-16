import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Globe, FlaskConical, ArrowRight } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: Palette,
      title: 'Creatives',
      description: 'UGC, ad campaigns, reels, and content strategy that captures attention.',
      path: '/services/creatives',
    },
    {
      icon: Globe,
      title: 'Web',
      description: 'High-conversion coded websites with smooth animations and modern design.',
      path: '/services/web',
    },
    {
      icon: FlaskConical,
      title: 'Labs',
      description: 'Automations, CRMs, WhatsApp bots, and integrations that scale.',
      path: '/services/labs',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 🌟 Heading */}
        <h2
          className={`text-5xl md:text-7xl font-black text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          What We Do<span className="text-[#3EF4E4]">.</span>
        </h2>

        {/* 🧊 Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.path}
                className={`group relative p-10 rounded-3xl bg-[#3EF4E4] text-black shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* 💫 Glow Accent on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                {/* 📌 Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#3EF4E4]" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-black/80 text-base mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto inline-flex items-center gap-2 text-base font-semibold group-hover:gap-4 transition-all duration-300">
                    <span className="underline underline-offset-2">Know More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ✨ Subtle Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#3EF4E4] to-transparent opacity-20 pointer-events-none" />
    </section>
  );
}
