import { useEffect } from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import HeroImage from "../assets/RestaurantHero.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: easeOut },
  }),
};

export default function Restaurant() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), []);

  const handleScrollToContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const sections = [
    {
      id: "creatives",
      title: "Creatives",
      num: "01",
      desc: "Reels + food visuals that make people crave the experience before they arrive.",
      points: ["Cinematic reels", "UGC-style storytelling", "Ad creatives that convert"],
    },
    {
      id: "web",
      title: "Web",
      num: "02",
      desc: "A fast website that turns curious visitors into booked tables.",
      points: ["Menu + highlights layout", "Google reviews + SEO", "Analytics tracking"],
    },
    {
      id: "labs",
      title: "Labs",
      num: "03",
      desc: "Automation that turns first-time diners into loyal regulars.",
      points: ["Feedback capture", "Smart re-visit nudges", "Customer data + dashboards"],
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">
      {/* HERO */}
      <section className="bg-[#F8F9FA] pt-24 md:pt-36 pb-12 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* IMAGE (TOP ON MOBILE) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="order-1 md:order-1 relative flex justify-center"
          >
            <div className="absolute -top-12 -right-12 w-[130%] h-[130%] bg-[#3EF4E4]/15 blur-3xl rounded-full -z-10" />
            <div className="rounded-3xl overflow-hidden border border-[#3EF4E4]/30 shadow-[0_0_40px_rgba(62,244,228,0.15)] w-full max-w-md md:max-w-none">
              <img
                src={HeroImage}
                alt="Restaurant Growth"
                className="w-full h-[230px] sm:h-[320px] md:h-[450px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="order-2 md:order-2 text-center md:text-left"
          >
            <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl font-black leading-[1.02] tracking-tight mb-4 md:mb-6">
              Keep Tables Full ,<span className="text-[#3EF4E4]"> </span>
              <br className="hidden sm:block" />
              Grow on Autopilot<span className="text-[#3EF4E4]">.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
              We build a clean restaurant growth system: content + website + retention,
              designed to drive repeat visits.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm md:text-base text-gray-700 mb-7 md:mb-10">
              {["More reservations", "Stronger brand", "Repeat diners"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#3EF4E4]" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-10 py-3 bg-[#3EF4E4] text-black rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* LAYERS */}
      <section id="layers" className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="mb-8 md:mb-10 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-black">
              The 3-Layer System <span className="text-[#3EF4E4]">.</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Simple. Clean. Built for restaurants that want repeat customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i}
                viewport={{ once: true }}
                className="rounded-3xl bg-[#F8F9FA] border border-black/10 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#3EF4E4] text-black font-bold rounded-full h-10 w-10 flex items-center justify-center">
                    {s.num}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black">{s.title}</h3>
                </div>

                <p className="text-gray-700 mt-4 leading-relaxed">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#3EF4E4]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="py-12 md:py-20 bg-[#3EF4E4] text-black text-center"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          Want a restaurant system that runs itself?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 opacity-90">
          We’ll build your content + website + retention flow as one clean machine.
        </p>
        <button
          onClick={handleScrollToContact}
          className="px-8 md:px-10 py-3 md:py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </motion.section>

      <Footer />
    </div>
  );
}
