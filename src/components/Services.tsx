import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Palette, Globe, FlaskConical, ArrowRight } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // ✅ Mobile: always visible (no observer, no state flips while scrolling)
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMobile]);

  const services = useMemo(
    () => [
      {
        icon: Palette,
        title: "Creatives",
        description: "UGC, ad campaigns, reels, and content strategy that captures attention.",
        path: "/services/creatives",
      },
      {
        icon: Globe,
        title: "Web",
        description: "High-conversion coded websites with smooth animations and modern design.",
        path: "/services/web",
      },
      {
        icon: FlaskConical,
        title: "Labs",
        description: "Automations, CRMs, WhatsApp flows, and integrations that scale.",
        path: "/services/labs",
      },
    ],
    []
  );

  const cardAnim = (index: number) => {
    if (isMobile) return "opacity-100"; // ✅ always visible on mobile
    return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  };

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={[
            "text-5xl md:text-7xl font-black text-center mb-20",
            isMobile ? "" : "transition-all duration-700",
            isMobile ? "opacity-100 translate-y-0" : isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          What We Do<span className="text-[#3EF4E4]">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.path}
                className={[
                  "group relative p-10 rounded-3xl bg-[#3EF4E4] text-black",
                  isMobile
                    ? "shadow-md"
                    : "shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2",
                  isMobile ? "" : "transition-all",
                  cardAnim(index),
                ].join(" ")}
                style={{
                  transitionDelay: !isMobile && isVisible ? `${0.12 + index * 0.1}s` : "0s",
                  willChange: !isMobile ? "transform, opacity" : "auto",
                }}
              >
                {!isMobile && (
                  <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={[
                      "w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6",
                      isMobile ? "" : "group-hover:scale-110 transition-transform duration-300",
                    ].join(" ")}
                  >
                    <Icon className="text-[#3EF4E4]" size={32} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

                  <p className="text-black/80 text-base mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div
                    className={[
                      "mt-auto inline-flex items-center gap-2 text-base font-semibold",
                      isMobile ? "" : "group-hover:gap-4 transition-all duration-300",
                    ].join(" ")}
                  >
                    <span className="underline underline-offset-2">Know More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#3EF4E4] to-transparent opacity-20 pointer-events-none" />
    </section>
  );
}
