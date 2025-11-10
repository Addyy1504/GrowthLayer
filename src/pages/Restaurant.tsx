import { useEffect } from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import HeroImage from "../assets/RestaurantHero.png";
import RestaurantMockup from "../assets/RestaurantMockup.png";

// 🌆 New visual imports
import CreativesVisual from "../assets/CreativesVisual2.png";
import WebVisual from "../assets/WebVisual2.png";
import LabsVisual from "../assets/LabsVisual.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: easeOut },
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
      title: "GrowthLayer Creatives",
      num: "01",
      desc: `Food is art — and so is marketing it. We create content that captures the aroma and emotion behind every dish, 
      using cinematic reels, UGC-style storytelling, and high-converting ad creatives that make customers crave the experience.`,
      quote:
        "We turn your restaurant’s atmosphere into an online appetite — one scroll at a time.",
      image: CreativesVisual,
    },
    {
      id: "web",
      title: "GrowthLayer Web",
      num: "02",
      desc: `A restaurant’s website should feel like a digital extension of its dining space — warm, seamless, and mouthwatering. 
      We build modern, fast-loading websites that make discovery, menus, and table booking effortless.`,
      points: [
        "Interactive digital menus",
        "Integrated review & feedback section",
        "SEO + analytics setup for local discovery",
      ],
      image: WebVisual,
    },
    {
      id: "labs",
      title: "GrowthLayer Labs",
      num: "03",
      desc: `GrowthLayer Labs automates what restaurants do best — hospitality. 
      From WhatsApp re-engagement to instant feedback forms, we help you convert first-time guests into loyal regulars.`,
      points: [
        "Automated WhatsApp feedback after each visit",
        "Rebooking reminders at smart intervals",
        "Centralized customer data on Google Sheets",
        "Performance dashboard with real-time insights",
      ],
      image: LabsVisual,
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* 🏁 HERO */}
      <section className="bg-[#F8F9FA] pt-24 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* 🖼️ IMAGE SIDE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="order-2 md:order-1 relative flex justify-center"
          >
            <div className="absolute -top-12 -right-12 w-[130%] h-[130%] bg-[#3EF4E4]/15 blur-3xl rounded-full -z-10"></div>
            <div className="rounded-3xl overflow-hidden border border-[#3EF4E4]/30 shadow-[0_0_40px_rgba(62,244,228,0.15)] w-full max-w-md md:max-w-none">
              <img
                src={HeroImage}
                alt="Restaurant Growth Transformation"
                className="w-full h-[260px] sm:h-[340px] md:h-[450px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* ✨ TEXT SIDE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
              Rethinking Restaurant Growth for the Digital Era
              <span className="text-[#3EF4E4]">.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
              GrowthLayer Studio helps restaurants go beyond dine-ins and discounts. 
              Through creative storytelling, smart websites, and customer automation, 
              we turn great food into unforgettable brand experiences.
            </p>

            <button
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-[#3EF4E4] text-black rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Let’s Talk Growth
            </button>
          </motion.div>
        </div>
      </section>

      {/* ✍️ INTRO */}
      <section className="py-10 md:py-16 bg-white text-gray-700">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-black">GrowthLayer Studio</span>, we craft 
            digital journeys that elevate restaurant brands. It's not about replacing hospitality — 
            it's about extending it into the digital world.
          </p>
          <p>
            Our work flows through three layers — <span className="font-semibold">Creatives</span>, 
            <span className="font-semibold"> Web</span>, and 
            <span className="font-semibold"> Labs</span> — 
            together engineering brand experiences that grow with every meal served.
          </p>
        </div>
      </section>

      {/* 🔹 LAYER SECTIONS */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          className={`py-12 md:py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"} transition-all`}
        >
          <div
            className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 🧾 TEXT COLUMN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="relative bg-[#3EF4E4] text-black font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-sm">
                  {s.num}
                </div>
                <h2 className="text-2xl md:text-3xl font-black">{s.title}</h2>
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{s.desc}</p>

              {s.quote && (
                <blockquote className="bg-[#E6FFFB]/60 border-l-4 border-[#3EF4E4] p-5 rounded-xl italic text-gray-600 text-base">
                  {s.quote}
                </blockquote>
              )}

              {s.points && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {s.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* 💡 VISUAL COLUMN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[#3EF4E4]/10 blur-3xl rounded-full -z-10"></div>
              <div className="w-full h-[250px] md:h-[340px] rounded-3xl overflow-hidden border border-[#3EF4E4]/30 shadow-[0_0_40px_rgba(62,244,228,0.1)] bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8FFFB] flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* 💼 CASE STUDY — RESTAURANT */}
<section className="py-20 md:py-28 bg-[#0D0D0D] text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    {/* 🖼️ IMAGE SIDE */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="relative order-2 md:order-1 flex justify-center"
    >
      <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[#3EF4E4]/10 blur-3xl rounded-full -z-10"></div>
      <div className="rounded-3xl overflow-hidden border border-[#3EF4E4]/30 
                      shadow-[0_0_50px_rgba(62,244,228,0.25)] w-full max-w-lg md:max-w-xl">
        <img
          src={RestaurantMockup}
          alt="Restaurant Case Study"
          className="w-full h-[320px] md:h-[440px] object-cover"
        />
      </div>
    </motion.div>

    {/* ✨ TEXT SIDE */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="order-1 md:order-2 text-center md:text-left md:pl-4"
    >
      <h2 className="text-3xl md:text-5xl font-black mb-8 md:mb-10 leading-tight">
        Turning Tables into Loyalty Systems
        <span className="text-[#3EF4E4]">.</span>
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 md:mb-14 max-w-lg mx-auto md:mx-0">
        Before GrowthLayer, our client’s restaurant was manually tracking repeat diners and missing
        opportunities to re-engage. Within weeks, automation took over — sending feedback requests,
        personalized offers, and building customer loyalty on autopilot.
      </p>
    </motion.div>
  </div>

  {/* 📊 STATS — Moved Below the Text & Image */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true }}
    className="mt-16 md:mt-20 flex justify-center"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl px-6">
      {[
        { value: 35, suffix: "%", label: "Increase in Repeat Visits" },
        { value: 100, suffix: "%", label: "Automated Feedback Collection" },
        { value: 3, suffix: "x", label: "Improved Retention Rate" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#101010] rounded-2xl border border-[#3EF4E4]/30 
                     p-6 text-center hover:border-[#3EF4E4] transition-all
                     shadow-[0_0_25px_rgba(62,244,228,0.08)] 
                     hover:shadow-[0_0_45px_rgba(62,244,228,0.2)]"
        >
          <h3 className="text-4xl md:text-5xl font-black text-[#3EF4E4] mb-2">
            <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
            {stat.suffix}
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* 🌊 Subtle Glow Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3EF4E4]/5 via-transparent to-[#3EF4E4]/5 blur-3xl opacity-40"></div>
</section>


      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="py-12 md:py-20 bg-[#3EF4E4] text-black text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let’s Build Your Growth Layer Next.
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 opacity-90">
          Ready to turn your restaurant into a digital experience? Let’s design a system 
          that brings your customers back again and again.
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
