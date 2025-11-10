import { useEffect } from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import HeroImage from "../assets/salon.png";
import SalonPhoto from "../assets/LooksSalon.png";

// 🧩 Add visuals
import SalonCreatives from "../assets/CreativesVisual1.png";
import SalonWeb from "../assets/WebVisual1.png";
import SalonLabs from "../assets/LabsVisual.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: easeOut },
  }),
};

export default function LooksSalon() {
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
      desc: `Great salons are built on stories — not discounts. Through UGC-style storytelling, ad campaigns, 
      and viral short-form content, GrowthLayer Creatives transforms your everyday salon experience 
      into a scroll-stopping digital presence.`,
      quote:
        "We help your brand look like what your service already feels like — premium, consistent, and memorable.",
      image: SalonCreatives,
    },
    {
      id: "web",
      title: "GrowthLayer Web",
      num: "02",
      desc: `A salon’s website should feel like its lobby — elegant, welcoming, and easy to navigate. 
      We build fast, mobile-first websites that let clients explore your services, read reviews, and book instantly. 
      The result? More appointments, less manual effort.`,
      points: [
        "Service showcase galleries",
        "Integrated booking & Google reviews",
        "SEO + analytics setup for discovery",
      ],
      image: SalonWeb,
    },
    {
      id: "labs",
      title: "GrowthLayer Labs",
      num: "03",
      desc: `GrowthLayer Labs is where automation meets experience. 
      We connect data, WhatsApp, and dashboards into one seamless loop.`,
      points: [
        "Automatic WhatsApp feedback post-visit",
        "Smart rebooking reminders after 21–30 days",
        "Centralized Google Sheet with live tracking",
        "Client satisfaction dashboard updated daily",
      ],
      image: SalonLabs,
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
                alt="Salon Growth Transformation"
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
              Rethinking Salon Growth
              for the Digital Age <span className="text-[#3EF4E4]">.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
              GrowthLayer Studio helps modern salons move beyond word-of-mouth.
              Through brand storytelling, sleek digital systems, and automated retention,
              we turn casual customers into loyal advocates.
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

      {/* ✍️ Intro */}
      <section className="py-10 md:py-16 bg-white text-gray-700">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-black">GrowthLayer Studio</span>, we
            reimagine how salons connect, retain, and grow. It’s not about replacing
            personal touch — it’s about amplifying it through structure, automation, and
            creative storytelling.
          </p>
          <p>
            Each salon we work with gets its own tailored ecosystem built across three
            layers — <span className="font-semibold">Creatives</span>,
            <span className="font-semibold"> Web</span>, and
            <span className="font-semibold"> Labs</span>. Together, they turn client
            experience into measurable growth.
          </p>
        </div>
      </section>

      {/* 🔹 Layer Sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          className={`py-12 md:py-20 ${
            i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"
          } transition-all`}
        >
          <div
            className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 🧾 TEXT */}
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

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {s.desc}
              </p>

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

            {/* 💡 VISUAL */}
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

      {/* 💼 CASE STUDY — LOOKS SALON */}
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
          src={SalonPhoto}
          alt="Looks Salon GrowthLayer Case"
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
        Turning Appointments into Automations
        <span className="text-[#3EF4E4]">.</span>
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 md:mb-14 max-w-lg mx-auto md:mx-0">
        <span className="font-semibold text-white">Looks Salon (Rcube Monad Mall, Noida)</span> 
        relied on manual client calls and scattered feedback — meaning opportunities often slipped through.  
        <br /><br />
        GrowthLayer built a smooth retention engine powered by WhatsApp automation — 
        sending instant feedback forms, smart rebooking reminders, and real-time analytics.  
        In just two weeks, manual chaos turned into measurable client loyalty.
      </p>
    </motion.div>
  </div>

  {/* 📊 STATS — Placed Below Text & Image */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true }}
    className="mt-16 md:mt-20 flex justify-center"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl px-6">
      {[
        { value: 40, suffix: "%", label: "Client Revisits ↑" },
        { value: 100, suffix: "%", label: "Follow-ups Automated" },
        { value: 2, suffix: "x", label: "Faster Feedback Cycle" },
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
          Want to automate retention, bookings, and storytelling — just like Looks Salon?
          Let’s engineer your growth journey.
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
