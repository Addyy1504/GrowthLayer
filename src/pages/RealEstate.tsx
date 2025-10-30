import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, easeOut, Variants } from 'framer-motion';
import Footer from '../components/Footer';
import HeroImage from '../assets/real-estate-hero.jpg';   // Replace with actual hero image
import Munjal from '../assets/munjal.png';
import Kumar from '../assets/kumar.png';

// ✨ Animation Variants
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

export default function RealEstate() {
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

  const pointers = [
    {
      number: '01',
      title: 'Lead-Driven Design',
      description:
        'Websites built to convert—designed specifically for real estate brands.',
    },
    {
      number: '02',
      title: 'Brand Perception Uplift',
      description:
        'Transforming legacy construction companies into modern digital brands.',
    },
    {
      number: '03',
      title: 'Visual Storytelling',
      description:
        'High-quality imagery, minimal layouts, and a luxury feel.',
    },
    {
      number: '04',
      title: 'SEO + Speed Optimization',
      description:
        'React architecture with performance and search in mind.',
    },
    {
      number: '05',
      title: 'WhatsApp Lead Funnels',
      description:
        'Instant communication flows integrated with every site.',
    },
  ];

  const results = [
    '40 % increase in lead inquiries post-launch.',
    'Stronger brand credibility across both companies.',
    'Faster load times and improved SEO metrics.',
  ];

  return (
    <div className="bg-white text-black flex flex-col min-h-screen overflow-hidden">
      {/* 🧭 Back Button + Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[#3EF4E4] hover:underline mb-10"
        >
          <ArrowLeft size={18} /> Back to Case Studies
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          {/* Text Block */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Real Estate Digital Ecosystem<span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl">
              At GrowthLayer Studio, we specialise in building <strong>digital ecosystems for
              real estate and construction brands</strong> — creating websites that go beyond portfolios and actually convert visitors into clients.
            </p>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50"
          >
            <img
              src={HeroImage}
              alt="Real Estate Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* 🧱 What We Built */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14"
        >
          What We Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {pointers.map((item, index) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
              className="flex flex-col items-center text-center max-w-xs mx-auto transition-all duration-300 hover:-translate-y-2"
            >
              <span className="text-3xl md:text-4xl font-black text-[#3EF4E4] mb-3 opacity-90">
                {item.number}
              </span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏗️ Client Highlights */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14 text-center"
        >
          Real Estate Brands We Transformed
        </motion.h2>

        {/* Munjal Constructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.img
            src={Munjal}
            alt="Munjal Constructions Website"
            className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#3EF4E4]">Munjal Constructions</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              A luxury real estate brand built around precision and trust. We designed a sleek, minimal portfolio experience showcasing premium residential projects, paired with WhatsApp and call-to-action touchpoints for direct conversions.
            </p>
          </motion.div>
        </div>

        {/* Kumar Construction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#3EF4E4]">Kumar Construction</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              For Delhi’s oldest P.O.P contractor, we created a digital identity that honours tradition while embracing modern design. The result — a brand that feels heritage-rich yet future-ready.
            </p>
          </motion.div>
          <motion.img
            src={Kumar}
            alt="Kumar Construction Website"
            className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          />
        </div>
      </section>

      {/* 📈 Results & Impact */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center"
        >
          Results & Impact
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="flex items-start mb-4"
            >
              <span className="font-black text-[#3EF4E4] mr-3 text-xl">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-lg text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧲 CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 bg-[#3EF4E4] text-black text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want a website that sells real estate?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Let’s engineer your brand for high-intent traffic, trust, and conversions — tailored for the real estate industry.
        </p>
        <button
          onClick={handleScrollToContact}
          className="px-8 md:px-10 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </motion.section>

      <Footer />
    </div>
  );
}
