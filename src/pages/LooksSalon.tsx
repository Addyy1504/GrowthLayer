import { useEffect } from 'react';
import { motion, easeOut, Variants } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Workflow, MessageSquare, BarChart, Users } from 'lucide-react';
import Footer from '../components/Footer';
import HeroImage from '../assets/LooksSalon.png';
import CountUp from "react-countup";
import SalonPhoto from '../assets/LooksSalon.png'; // 🖼️ replace later

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

export default function LooksSalon() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const automationFlow = [
    {
      icon: <Workflow className="w-10 h-10 text-white" />,
      title: 'Customer Visit Logged',
      desc: 'Receptionist manually adds client name, phone number, and service details in a Google Sheet after the appointment.',
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: 'Feedback Automation',
      desc: 'A WhatsApp feedback flow is triggered post-visit, collecting reviews seamlessly.',
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: 'Re-engagement Trigger',
      desc: 'After 21–30 days, customers receive a personalized reminder or discount via WhatsApp.',
    },
    {
      icon: <BarChart className="w-10 h-10 text-white" />,
      title: 'Insights & Tracking',
      desc: 'All responses and data automatically sync into Google Sheets for visibility and metrics.',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 🖼️ HERO */}
      <section className="bg-[#F8F9FA] pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Automating Salon Growth <span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
              For salons, retention matters more than reach. Manual calls, missed feedback,
              and inconsistent data often break the customer loop. We help bridge that gap
              — using <span className="font-semibold">WhatsApp automation</span> and structured
              data systems to make re-engagement automatic.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md"
          >
            <img src={HeroImage} alt="Salon Hero" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ⚙️ AUTOMATION FLOW */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-20"
          >
            Our Automation Flow
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {automationFlow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-[#3EF4E4] text-black border border-transparent
                           shadow-[0_6px_15px_rgba(62,244,228,0.25)]
                           hover:shadow-[0_15px_40px_rgba(62,244,228,0.4)]
                           transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="absolute -top-6 left-6 bg-white text-black text-2xl md:text-3xl font-bold 
                                rounded-full h-12 w-12 flex items-center justify-center 
                                shadow-md border border-[#3EF4E4]/40">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div className="pt-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌐 WEBSITE EXPERIENCE SECTION */}
<section className="py-24 bg-[#F8F9FA] text-center">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="text-4xl md:text-5xl font-black mb-8"
  >
    The Digital Face of Every Salon
    <span className="text-[#3EF4E4]">.</span>
  </motion.h2>

  <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
    A modern salon doesn’t just grow through word-of-mouth — it grows through presence.
    We craft visually stunning, mobile-optimized websites that help salons showcase their
    services, build trust, and connect effortlessly with customers.
  </p>

  {/* Website Showcase */}
  <div className="relative mx-auto mb-20 max-w-5xl rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
    <img
      src="/assets/SalonWebsiteMockup.png" // 🔁 Replace with your own PNG later
      alt="Salon Website Showcase"
      className="w-full h-[400px] object-cover opacity-95 hover:opacity-100 transition-all duration-500"
    />
  </div>

  {/* 3 Key Benefits */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Build Awareness",
        desc: "Your website becomes the first impression clients get — a place to discover your services and story.",
      },
      {
        title: "Enhance Brand Trust",
        desc: "Modern visuals, clean layouts, and strong storytelling make your salon look premium and professional.",
      },
      {
        title: "Fuel Retention with Automation",
        desc: "Paired with GrowthLayer’s WhatsApp automations, every client visit becomes part of a long-term relationship.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          x:
            window.innerWidth < 768
              ? i % 2 === 0
                ? -60 // slide from left
                : 60 // slide from right
              : 0,
          y: window.innerWidth >= 768 ? 40 : 0, // only fade up on desktop
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="relative bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md 
                   hover:border-[#3EF4E4] transition-all p-8 text-left"
      >
        {/* Aqua Mint Number Badge */}
        <div className="absolute -top-6 left-6 bg-[#3EF4E4] text-black text-lg font-bold 
                        rounded-full h-12 w-12 flex items-center justify-center shadow-md">
          {(i + 1).toString().padStart(2, '0')}
        </div>

        <h3 className="text-xl font-bold text-black mt-8 mb-3">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* 🏢 LOOKS SALON RESULTS (FINAL FIXED LAYOUT) */}
<section className="relative bg-[#0D0D0D] py-28 text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* 🧾 TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="order-1"
    >
      <h2 className="text-4xl md:text-5xl font-black mb-6">
        How It Helped Looks Salon<span className="text-[#3EF4E4]">.</span>
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
        After implementing GrowthLayer’s automation system, 
        <span className="font-semibold text-white"> Looks Salon (Rcube Monad Mall, Noida) </span>
        witnessed a clear transformation in how clients interacted with the brand.  
        Automated follow-ups, feedback loops, and insight tracking helped boost 
        engagement, retention, and long-term loyalty — creating a seamless digital 
        experience from visit to revisit.
      </p>
    </motion.div>

    {/* 🖼️ IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative order-2 md:order-2 rounded-3xl overflow-hidden border border-[#3EF4E4]/20 
                 shadow-[0_0_50px_rgba(62,244,228,0.1)]"
    >
      <img
        src={SalonPhoto}
        alt="Looks Salon Automation Impact"
        className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent"></div>
    </motion.div>
  </div>

  {/* 📈 IMPACT STATS */}
  <div className="max-w-7xl mx-auto px-6 mt-16 grid sm:grid-cols-3 gap-6">
    {[
      { value: 40, suffix: "%", label: "Increase in Client Revisits" },
      { value: 100, suffix: "%", label: "Automated Follow-Ups" },
      { value: 2, suffix: "x", label: "Faster Feedback & Insights" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="bg-[#101010] rounded-3xl border border-[#3EF4E4]/30 hover:border-[#3EF4E4] 
                   shadow-[0_0_25px_rgba(62,244,228,0.08)] hover:shadow-[0_0_40px_rgba(62,244,228,0.2)]
                   p-8 text-center transform hover:-translate-y-2 duration-500"
      >
        <h3 className="text-5xl md:text-6xl font-black text-[#3EF4E4] mb-3 leading-tight">
          <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
          {stat.suffix}
        </h3>
        <p className="text-gray-300 text-sm font-medium leading-snug">{stat.label}</p>
      </motion.div>
    ))}
  </div>

  {/* 📱 MOBILE ORDER FIX */}
  <style>
    {`
      @media (max-width: 768px) {
        section div.grid.md\\:grid-cols-2 {
          display: flex;
          flex-direction: column;
        }
        /* order: text -> image -> counters */
        section div.grid.md\\:grid-cols-2 > div:nth-child(1) {
          order: 1;
        }
        section div.grid.md\\:grid-cols-2 > div:nth-child(2) {
          order: 2;
          margin-top: 1.5rem;
        }
        section div.max-w-7xl.mx-auto.px-6.mt-16.grid {
          order: 3;
          margin-top: 2.5rem;
        }
      }
    `}
  </style>

  {/* Glow BG */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3EF4E4]/5 via-transparent to-[#3EF4E4]/5 blur-3xl opacity-50"></div>
</section>









      {/* 🧲 CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="py-20 bg-[#3EF4E4] text-black text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Automate Your Salon Too.</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Build a customer retention system that keeps clients coming back — powered by GrowthLayer automations.
        </p>
        <button
          onClick={handleScrollToContact}
          className="px-10 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </motion.section>

      <Footer />
    </div>
  );
}
