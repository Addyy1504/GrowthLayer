import { useEffect } from "react";
import { motion, easeOut, Variants } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import HeroImage from "../assets/real-estate-hero.jpg";
import Munjal from "../assets/munjal.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: easeOut },
  }),
};

export default function RealEstate() {
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
      desc: `Builders don’t just sell homes — they sell trust. Through strong brand visuals, 
      video showcases, and project storytelling, GrowthLayer Creatives helps you transform listings 
      into lifestyle aspirations that buyers remember.`,
      quote:
        "Your next customer isn’t looking for a property — they’re looking for a story they can move into.",
    },
    {
      id: "web",
      title: "GrowthLayer Web",
      num: "02",
      desc: `Your website is the first site visit for most clients. We design fast, elegant, and lead-driven 
      real estate websites that capture attention, build credibility, and generate enquiries effortlessly.`,
      points: [
        "Luxury-grade project showcase pages",
        "Integrated WhatsApp + Call actions",
        "Lead tracking & analytics dashboard",
      ],
    },
    {
      id: "labs",
      title: "GrowthLayer Labs",
      num: "03",
      desc: `From enquiries to follow-ups — GrowthLayer Labs automates every step. 
      Our WhatsApp and email workflows nurture leads until they convert.`,
      points: [
        "Auto WhatsApp replies for new enquiries",
        "Lead qualification via Google Sheets + dashboard",
        "Follow-ups and site visit reminders",
      ],
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
                alt="Real Estate Digital Transformation"
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
              Rethinking Real Estate
              <br />
              for the Digital Age<span className="text-[#3EF4E4]">.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
              GrowthLayer Studio helps builders and developers build more than properties —
              we build digital credibility. From high-end websites to automated lead funnels,
              your brand becomes the trusted name homebuyers remember.
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
            At <span className="font-semibold text-black">GrowthLayer Studio</span>, we
            empower real estate brands to scale digitally. It’s about building credibility,
            showcasing projects beautifully, and making every enquiry count.
          </p>
          <p>
            Every builder we work with gets a custom digital stack across
            <span className="font-semibold"> Creatives</span>,
            <span className="font-semibold"> Web</span>, and
            <span className="font-semibold"> Labs</span> — our three layers that
            engineer brand growth.
          </p>
        </div>
      </section>

      {/* 🔹 LAYERS */}
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
            {/* TEXT COLUMN */}
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

            {/* VISUAL COLUMN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[#3EF4E4]/10 blur-3xl rounded-full -z-10"></div>
              <div className="w-full h-[250px] md:h-[340px] rounded-3xl overflow-hidden border border-[#3EF4E4]/30 shadow-[0_0_40px_rgba(62,244,228,0.1)] bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8FFFB] flex items-center justify-center">
                <p className="text-gray-400 italic text-center max-w-xs">
                  Visuals for <span className="text-[#3EF4E4] font-semibold">{s.title}</span> go here
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* 💼 CASE STUDY — KUMAR CONSTRUCTION */}
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
          src={Munjal} // ⚙️ Replace with Kumar image import
          alt="Kumar Construction Website"
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
        Crafting Legacy into Digital Presence
        <span className="text-[#3EF4E4]">.</span>
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 md:mb-14 max-w-lg mx-auto md:mx-0">
        <span className="font-semibold text-white">Kumar Construction</span> — one of Delhi’s
        oldest P.O.P contractors — carried decades of craftsmanship offline.  
        <br /><br />
        GrowthLayer Studio built them a sleek, modern website that blends heritage with 
        digital finesse — creating a web identity that looks as refined as the ceilings they sculpt.
      </p>

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-6 md:gap-8 justify-center">
        {[
          { value: 70, suffix: "%", label: "Brand Recall ↑" },
          { value: 2, suffix: "x", label: "Lead Quality" },
          { value: 100, suffix: "%", label: "Digital Identity Built" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#101010] rounded-2xl border border-[#3EF4E4]/30 
                       p-6 text-center hover:border-[#3EF4E4] transition-all
                       shadow-[0_0_25px_rgba(62,244,228,0.08)] hover:shadow-[0_0_45px_rgba(62,244,228,0.2)]"
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
  </div>

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
          Let’s Build Your Digital Foundation Next.
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 opacity-90">
          From luxury floors to skyline towers — GrowthLayer engineers digital ecosystems
          that help real estate brands close deals faster.
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
