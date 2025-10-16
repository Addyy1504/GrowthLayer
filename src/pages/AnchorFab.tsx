import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, easeOut, Variants } from 'framer-motion';
import Footer from '../components/Footer';
import HeroImage from '../assets/AnchorFab.png'; // 🖼️ PNG in src/assets

// ✅ Fixed Animation Variants
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

export default function AnchorFab() {
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
      title: 'Custom-Coded Website',
      description:
        'A modern React website designed from scratch — fully responsive and optimized for speed.',
    },
    {
      number: '02',
      title: 'Product Showcase',
      description:
        'Structured category pages for showcasing corporate wear collections clearly and professionally.',
    },
    {
      number: '03',
      title: 'Lead Generation',
      description:
        'Integrated WhatsApp enquiry flow and contact forms to convert visitors into leads.',
    },
    {
      number: '04',
      title: 'SEO-Ready',
      description:
        'On-page SEO structure implemented to increase organic visibility and discoverability.',
    },
    {
      number: '05',
      title: 'Seamless Experience',
      description:
        'Smooth animations, easy navigation, and consistent UI across devices.',
    },
  ];

  const results = [
    'Strengthened Anchor Fab’s digital presence with a polished B2B website.',
    'Improved conversion rates with streamlined enquiry flows.',
    'Higher engagement and better navigation experience for clients.',
    'Mobile and tablet optimization ensured reach across devices.',
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 🧭 Back Button + Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Anchor Fab Website<span className="text-[#3EF4E4]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
              A modern B2B website built for
              <span className="font-semibold"> Anchor Fab</span>, a leading corporate garment manufacturer.
              Designed to boost brand credibility and generate quality business leads.
            </p>
          </motion.div>

          {/* 🖼️ Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="w-full h-80 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200 bg-gray-50"
          >
            {HeroImage ? (
              <img
                src={HeroImage}
                alt="Anchor Fab Website"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">[ Upload PNG Here ]</span>
            )}
          </motion.div>
        </div>
      </div>

      {/* 🧱 What We Built */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          What We Built
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10">
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
              <span className="text-4xl md:text-5xl font-black text-[#3EF4E4] mb-3 opacity-90">
                {item.number}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📈 Results & Impact */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
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
        <h2 className="text-4xl font-bold mb-4">Want a high-converting website like this?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Let’s build a website that showcases your brand and turns visitors into leads.
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
