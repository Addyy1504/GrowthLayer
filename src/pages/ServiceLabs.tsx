import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Pattern from "../assets/Pattern.png";
import Footer from "../components/Footer";

export default function ServiceLabs() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // ✅ Updated copy (minimal, punchy, outcome-first) — layout unchanged
  const offerings = [
    {
      number: "01",
      title: "Lead & Follow-up Automation",
      description:
        "Capture enquiries and follow up instantly—so leads don’t go cold.",
    },
    {
      number: "02",
      title: "CRM & Pipeline Setup",
      description:
        "A simple pipeline that tracks every lead, stage, and next step.",
    },
    {
      number: "03",
      title: "WhatsApp Workflows",
      description:
        "Smart WhatsApp flows for updates, reminders, feedback, and re-engagement.",
    },
    {
      number: "04",
      title: "Tool Integrations",
      description:
        "Connect Sheets, email, forms, calendars, and dashboards into one system.",
    },
  ];

  const handleScrollToContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <>
      {/* 🧭 SEO META TAGS */}
      <Helmet>
        <title>Automation & CRM Solutions | GrowthLayer Labs</title>
        <meta
          name="description"
          content="GrowthLayer Labs builds automation, CRM pipelines, WhatsApp workflows, and integrations that help businesses follow up faster and scale without extra effort."
        />
        <meta
          name="keywords"
          content="automation agency, CRM solutions India, WhatsApp automation, business automation, n8n workflows, HubSpot integrations, sales CRM, lead follow up automation, GrowthLayer Labs"
        />
        <link rel="canonical" href="https://growthlayer.studio/services/labs" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Automation & CRM Solutions | GrowthLayer Labs" />
        <meta
          property="og:description"
          content="We build lead systems: CRM + WhatsApp workflows + automations that run 24/7."
        />
        <meta property="og:url" content="https://growthlayer.studio/services/labs" />
        <meta property="og:image" content="https://growthlayer.studio/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automation & CRM Solutions | GrowthLayer Labs" />
        <meta
          name="twitter:description"
          content="We build lead systems: CRM + WhatsApp workflows + automations that run 24/7."
        />
        <meta name="twitter:image" content="https://growthlayer.studio/og-image.png" />

        {/* Extra */}
        <meta name="author" content="GrowthLayer Studio" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3EF4E4" />
      </Helmet>

      {/* 🪄 Hero Section */}
      <div className="min-h-screen bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-36 pb-16 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              Labs<span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We build systems that follow up, track leads, and bring customers back—on autopilot.
            </p>
          </div>

          {/* ✨ Numbered Offerings */}
          <div
            className={`mt-14 mb-0 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {offerings.map((item, index) => (
              <div
                key={item.number}
                className={`flex flex-col items-center text-center max-w-xs transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                <span className="text-4xl md:text-5xl font-black text-[#3EF4E4] mb-3 md:mb-4 opacity-90">
                  {item.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🌿 Pattern Divider */}
        <div
          className={`w-full mt-12 mb-14 transition-opacity duration-1000 ${
            isVisible ? "opacity-90" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${Pattern})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "80px",
          }}
        ></div>

        {/* 🧠 Strategic Text Section */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-20">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Less chaos.
            <br className="hidden md:block" />
            More <span className="text-[#3EF4E4]">conversions</span>.
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            If a lead comes in, they should get a reply. If a customer visits, they should get a follow-up.
            We build that loop—end to end.
          </p>
        </section>

        {/* 🌟 CTA Section */}
        <section className="relative pb-24">
          <div
            className={`relative z-20 max-w-4xl mx-auto text-center px-6 py-20 bg-[#3EF4E4] rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight">
              Want your follow-ups automated?
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              We’ll build your CRM + workflows so your business responds fast—every time.
            </p>
            <button
              onClick={handleScrollToContact}
              className="inline-block px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 hover:bg-gray-900 transition-transform duration-300"
            >
              Get Started
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
