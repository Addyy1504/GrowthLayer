import { useEffect } from 'react';
import { motion, easeOut, Variants } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroImage from '../assets/real-estate-hero.jpg';
import Munjal from '../assets/munjal.png';
import Kumar from '../assets/kumar.png';
import CountUp from 'react-countup';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

export default function RealEstate() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => window.scrollTo(0, 0), []);

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

  const benefits = [
    {
      title: 'Lead-Focused Design',
      desc: 'Websites that don’t just display projects — they convert high-intent visitors into qualified leads.',
    },
    {
      title: 'Stronger Brand Perception',
      desc: 'Upgrade legacy builders into premium digital brands that inspire confidence.',
    },
    {
      title: 'Immersive Visual Storytelling',
      desc: 'Minimal layouts, cinematic visuals, and luxury-grade user experience.',
    },
    {
      title: 'WhatsApp + Call Integrations',
      desc: 'Seamless one-tap enquiry and callback systems built into every project page.',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">

      {/* 🏙️ HERO SECTION */}
      <section className="bg-[#F8F9FA] pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Elevating Real Estate Brands<span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
              We design <span className="font-semibold">lead-driven, high-credibility websites</span> for construction and real estate firms — turning portfolios into digital ecosystems that attract, engage, and convert.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md"
          >
            <img src={HeroImage} alt="Real Estate Hero" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 💡 WHY GO DIGITAL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-20"
          >
            Why Go Digital?
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
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
                  <h3 className="text-lg md:text-xl font-semibold mb-3 mt-4">{b.title}</h3>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏗️ EXAMPLES */}
<section className="py-28 bg-gradient-to-b from-white via-[#F8F9FA] to-[#E6FFFB] relative overflow-hidden">
  {/* ✨ Section Heading */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    className="text-center mb-24"
  >
    <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
      Featured Real Estate Websites
    </h2>
    <div className="w-24 h-1 bg-[#3EF4E4] mx-auto rounded-full"></div>
  </motion.div>

  {/* 🌇 Munjal Constructions */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-28">
    {/* Image */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      className="flex justify-center"
    >
      <img
        src={Munjal}
        alt="Munjal Constructions Website"
        className="w-[90%] md:w-[85%] h-[720px] object-contain md:object-center rounded-3xl transition-transform duration-700"
      />
    </motion.div>

    {/* Text Box */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      className="bg-[#3EF4E4] text-black rounded-3xl px-10 py-12 shadow-[0_8px_25px_rgba(62,244,228,0.25)]"
    >
      <h3 className="text-3xl md:text-4xl font-black mb-4">
        Munjal Constructions
      </h3>
      <p className="text-gray-900 text-base md:text-lg leading-relaxed">
        A luxury real estate brand built around precision and trust.  
        We designed a sleek, minimal portfolio website with immersive visuals,  
        clear navigation, and direct WhatsApp touchpoints for faster lead conversion.
      </p>
    </motion.div>
  </div>

  {/* 🏢 Kumar Construction (ALT Layout) */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
    {/* Text Box */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      className="order-2 md:order-1 bg-[#3EF4E4] text-black rounded-3xl px-10 py-12 shadow-[0_8px_25px_rgba(62,244,228,0.25)]"
    >
      <h3 className="text-3xl md:text-4xl font-black mb-4">
        Kumar Construction
      </h3>
      <p className="text-gray-900 text-base md:text-lg leading-relaxed">
        For Delhi’s oldest P.O.P contractor, we created a digital identity  
        that merges heritage with modern design. The website balances  
        legacy and innovation, delivering timeless aesthetics with functional simplicity.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      className="order-1 md:order-2 flex justify-center"
    >
      <img
        src={Kumar}
        alt="Kumar Construction Website"
        className="w-[90%] md:w-[85%] h-[720px] object-contain md:object-center rounded-3xl transition-transform duration-700"
      />
    </motion.div>
  </div>
</section>





      {/* 📊 RESULTS */}
      <section className="relative bg-[#0D0D0D] py-28 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The Impact<span className="text-[#3EF4E4]">.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-20 leading-relaxed">
            Real estate brands experienced measurable growth in visibility, trust, and conversions after adopting GrowthLayer’s web and automation systems.
          </p>

          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { value: 40, suffix: '%', label: 'Increase in Enquiries' },
              { value: 3, suffix: 'x', label: 'Better Client Retention' },
              { value: 50, suffix: '%', label: 'Faster Lead Responses' },
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
        <h2 className="text-4xl font-bold mb-4">Let’s Digitize Your Real Estate Brand.</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Build trust, capture leads, and showcase your projects with websites and automations made for the modern developer.
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
