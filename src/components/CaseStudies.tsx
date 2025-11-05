import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
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

  const cases = [
    {
      title: "Salon Businesses",
      description:
        "Salons often rely on word-of-mouth and walk-ins, which limits consistent growth. A strong digital presence can help attract new clients, simplify appointment booking, and boost retention through automated feedback and re-engagement systems.",
      tags: ["Salons", "Automation", "Web Design", "CRM"],
      accent: "#3EF4E4",
      link: "/case-studies/looks-salon", // ✅ Already exists
      image: "/assets/salon.png",
    },
    {
      title: "Restaurants & Cafés",
      description:
        "Restaurants face challenges with customer retention and visibility. A well-designed website paired with a digital menu lets customers explore offerings easily, while WhatsApp automation can handle reviews, loyalty offers, and repeat visit incentives effortlessly.",
      tags: ["Restaurant", "Digital Menu", "Automation", "WhatsApp"],
      accent: "#3EF4E4",
      link: "/case-studies/restaurant", // ✅ Updated route
      image: "/assets/restaurant.png",
    },
    {
      title: "Manufacturers & E-Commerce Brands",
      description:
        "Manufacturers and product-based businesses often lack a modern digital storefront. We help them go online through B2B or D2C websites, Shopify stores, and automated inquiry systems — transforming catalog-based sales into scalable online conversions.",
      tags: ["Manufacturing", "E-Commerce", "Shopify", "Automation"],
      accent: "#3EF4E4",
      link: "/case-studies/anchor-fab", // ✅ Updated route
      image: "/assets/manufacturer.png",
    },
    {
      title: "Real Estate & Construction",
      description:
        "Developers and builders need credibility and visibility. Through high-impact websites with project galleries, lead capture systems, and automated WhatsApp follow-ups, we help real estate businesses convert inquiries into site visits faster.",
      tags: ["Real Estate", "Lead Generation", "Web Design"],
      accent: "#3EF4E4",
      link: "/case-studies/real-estate",
      image: "/assets/realestate.png",
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-28 bg-white text-black overflow-hidden"
    >
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
          From local salons to large manufacturers, we design websites and
          automations tailored to every industry’s real challenges.
        </p>

        {/* 💼 Industry Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {cases.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* 📄 Text Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-[#1C1C1C]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

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
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Building niche-focused digital ecosystems 👇
          </p>
        </div>
      </div>
    </section>
  );
}
