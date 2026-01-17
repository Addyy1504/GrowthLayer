import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Import images directly from assets folder
import SalonImage from "../assets/salon.png";
import RestaurantImage from "../assets/restaurant.png";
import ManufacturerImage from "../assets/manufacturer.png";
import RealEstateImage from "../assets/realestate.png";

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ✅ trigger only once
        }
      },
      {
        threshold: 0.05,
        rootMargin: "150px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Updated: minimal, punchy, service-aligned copy (Creatives / Web / Labs)
  const cases = [
    {
      title: "Salons",
      description:
        "Reels that feel premium. A booking-first website. Retention automations that bring clients back.",
      tags: ["Creatives", "Website", "Retention"],
      accent: "#3EF4E4",
      link: "/case-studies/looks-salon",
      image: SalonImage,
    },
    {
      title: "Restaurants & Cafés",
      description:
        "Content that makes people crave. A fast menu/booking website. Loyalty + feedback flows on autopilot.",
      tags: ["Creatives", "Website", "Automation"],
      accent: "#3EF4E4",
      link: "/case-studies/restaurant",
      image: RestaurantImage,
    },
    {
      title: "Manufacturing & E-Commerce",
      description:
        "Product content that sells. A conversion-first site. Follow-ups, lead tracking, and re-engagement automated.",
      tags: ["Creatives", "Website", "Labs"],
      accent: "#3EF4E4",
      link: "/case-studies/anchor-fab",
      image: ManufacturerImage,
    },
    {
      title: "Real Estate & Construction",
      description:
        "Project storytelling that builds trust. A lead-first website. Automated follow-ups that drive site visits.",
      tags: ["Creatives", "Website", "Lead System"],
      accent: "#3EF4E4",
      link: "/case-studies/real-estate",
      image: RealEstateImage,
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="relative py-28 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ✨ Section Heading */}
        <h2
          className={`text-5xl md:text-7xl font-black text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Industries We Transform<span className="text-[#3EF4E4]">.</span>
        </h2>
        <p
          className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Same GrowthLayer system — tailored for each industry: Creatives, Web, and Labs.
        </p>

        {/* 💼 Industry Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {cases.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* 🖼️ Image */}
              <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* 📄 Text Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-3xl font-bold mb-3 text-[#1C1C1C]">{project.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 👇 Know More Button */}
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 font-semibold text-black bg-[#3EF4E4] border border-[#3EF4E4] px-5 py-2 rounded-full hover:bg-white hover:text-[#3EF4E4] transition-all duration-300"
                >
                  Know More
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✍️ Footer Line */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
      </div>
    </section>
  );
}
