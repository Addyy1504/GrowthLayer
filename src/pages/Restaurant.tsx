import { useEffect } from 'react';
import { motion, easeOut, Variants } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Workflow, MessageSquare, BarChart, Users } from 'lucide-react';
import Footer from '../components/Footer';
import HeroImage from '../assets/RestaurantHero.png';
import RestaurantMockup from '../assets/RestaurantMockup.png';
import CountUp from 'react-countup';

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

export default function Restaurant() {
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
      title: 'Customer Visit Logged',
      desc: 'After each visit, staff records basic customer details in a digital sheet to enable smooth re-engagement and insights tracking.',
    },
    {
      title: 'Feedback Collection',
      desc: 'After dining, a WhatsApp message is sent automatically to collect genuine feedback and reviews without manual follow-up.',
    },
    {
      title: 'Offer Reminder',
      desc: 'After 10–15 days, returning customers get an automated personalized message or offer — helping retain loyal diners effortlessly.',
    },
    {
      title: 'Insights Dashboard',
      desc: 'All customer data and responses are stored in Google Sheets, allowing restaurant owners to visualize trends and retention rates.',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">

      {/* 🍽️ HERO SECTION */}
      <section className="bg-[#F8F9FA] pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Digitally Empowering Restaurants <span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
              GrowthLayer helps restaurants stand out online with <span className="font-semibold">beautiful websites, interactive digital menus, and automated WhatsApp follow-ups</span> — turning first-time visitors into loyal regulars without managing any booking systems.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md"
          >
            <img src={HeroImage} alt="Restaurant Hero" className="w-full h-full object-cover" />
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

      {/* 🌐 WEBSITE EXPERIENCE */}
      <section className="py-24 bg-[#F8F9FA] text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-black mb-8"
        >
          The <span className="text-[#3EF4E4]">Digital Face</span> of Every Restaurant.
        </motion.h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          A great dining experience starts online. We design fast, mobile-friendly websites that highlight your cuisine, 
          story, and atmosphere — while pairing them with digital menus and WhatsApp automations that keep customers coming back.
        </p>

        <div className="relative mx-auto mb-20 max-w-5xl rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
          <img
            src={RestaurantMockup}
            alt="Restaurant Website Mockup"
            className="w-full h-[400px] object-cover opacity-95 hover:opacity-100 transition-all duration-500"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Showcase Your Menu", desc: "Turn your menu into an interactive experience that customers can browse and explore effortlessly." },
            { title: "Boost Online Presence", desc: "Appear on Google, showcase your ambiance, and build credibility with a modern online identity." },
            { title: "Automate Engagement", desc: "Pair your website with GrowthLayer WhatsApp automation to re-engage diners seamlessly." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md 
                         hover:border-[#3EF4E4] transition-all p-8 text-left relative"
            >
              <div className="absolute -top-5 left-5 bg-[#3EF4E4] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📈 RESULTS SECTION */}
      <section className="relative bg-[#0D0D0D] py-28 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            How It Helped Restaurants<span className="text-[#3EF4E4]">.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-20 leading-relaxed">
            Restaurants using GrowthLayer’s automation and website systems have seen better engagement, higher retention, and consistent visibility — all without manual follow-ups.
          </p>

          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { value: 30, suffix: "%", label: "Increase in Repeat Visits" },
              { value: 100, suffix: "%", label: "Automated Feedback Collection" },
              { value: 3, suffix: "x", label: "Stronger Online Visibility" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#101010] rounded-3xl border border-[#3EF4E4]/30 hover:border-[#3EF4E4] transition-all 
                           shadow-[0_0_30px_rgba(62,244,228,0.05)] hover:shadow-[0_0_50px_rgba(62,244,228,0.15)]
                           p-10 text-center transform hover:-translate-y-2 duration-500"
              >
                <h3 className="text-6xl md:text-7xl font-black text-[#3EF4E4] mb-4">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>
                <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧲 CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="py-20 bg-[#3EF4E4] text-black text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Digitize Your Restaurant.</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Build a digital experience your customers will love — from menu browsing to instant WhatsApp engagement — powered by GrowthLayer.
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
