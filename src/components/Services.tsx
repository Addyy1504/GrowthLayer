import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Palette, Globe, FlaskConical, ArrowRight } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const hasAnimatedOnceRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // ✅ On mobile: animate ONCE, never toggle back (prevents scroll-up jank)
    // ✅ On desktop: still allow in/out animations if you want
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isMobile) {
          if (entry.isIntersecting && !hasAnimatedOnceRef.current) {
            hasAnimatedOnceRef.current = true;
            setIsVisible(true);
            observer.disconnect(); // ✅ stop observing = no thrash
          }
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: isMobile ? 0.18 : 0.2,
        // ✅ IMPORTANT: use symmetric rootMargin to avoid rapid enter/exit near top edge
        rootMargin: isMobile ? "80px 0px 80px 0px" : "0px",
      }
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

  const getCardAnimation = (index: number) => {
    // ✅ Mobile: only opacity (no translate) = smoothest on cheap GPUs
    if (isMobile) {
      return isVisible ? "opacity-100" : "opacity-0";
    }
    // Desktop: you can keep translate
    return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={[
            "text-5xl md:text-7xl font-black text-center mb-20",
            "transition-opacity duration-700 will-change-[opacity]",
            isVisible ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          What We Do<span className="text-[#3EF4E4]">.</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.path}
                className={[
                  "group relative p-10 rounded-3xl bg-[#3EF4E4] text-black",
                  // ✅ Mobile: remove heavy hover transforms + reduce shadow cost
                  isMobile
                    ? "shadow-md transition-opacity duration-700"
                    : "shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2",
                  // ✅ Only animate opacity on mobile
                  isMobile ? "will-change-[opacity]" : "will-change-[transform,opacity]",
                  // ✅ animation state
                  getCardAnimation(index),
                ].join(" ")}
                style={{
                  transitionDelay: isVisible ? `${0.1 + index * (isMobile ? 0.12 : 0.1)}s` : "0s",
                }}
              >
                {/* ✅ Mobile: remove overlay fade (expensive) */}
                {!isMobile && (
                  <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={[
                      "w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6",
                      // ✅ Mobile: no scale animation
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
