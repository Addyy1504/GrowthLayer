import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Pattern from '../assets/Pattern.png';
import Footer from '../components/Footer';

export default function ServiceWeb() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      number: '01',
      title: 'Custom Development',
      description:
        'Hand-coded websites built with modern frameworks for optimal performance and flexibility.',
    },
    {
      number: '02',
      title: 'Modern Design',
      description:
        'Beautiful, conversion-focused designs that align with your brand and captivate your audience.',
    },
    {
      number: '03',
      title: 'Smooth Animations',
      description:
        'Micro-interactions and animations that create memorable user experiences.',
    },
    {
      number: '04',
      title: 'Responsive & Fast',
      description:
        'Lightning-fast websites that look perfect on every device and screen size.',
    },
  ];

  const handleScrollToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* 🪄 Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            Web<span className="text-[#3EF4E4]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            We don't use templates. Every website we build is custom-coded to perfection,
            optimized for conversions, and designed to make an impact.
          </p>
        </div>

        {/* ✨ Numbered Offerings */}
        <div
          className={`mt-14 mb-0 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {offerings.map((item, index) => (
            <div
              key={item.number}
              className={`flex flex-col items-center text-center max-w-xs transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <span className="text-4xl md:text-5xl font-black text-[#3EF4E4] mb-3 md:mb-4 opacity-90 transform transition-transform group-hover:scale-110">
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
          isVisible ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${Pattern})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          height: '80px',
        }}
      ></div>

      {/* 🧠 Strategic Text Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          We don’t just build websites.
          <br className="hidden md:block" />
          We craft <span className="text-[#3EF4E4]">digital experiences</span> that convert.
        </h2>
        <p
          className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our custom-coded websites are designed to load fast, rank better, and create seamless experiences
          that turn visitors into loyal customers.
        </p>
      </section>

      {/* 🌟 CTA Section */}
      <section className="relative pb-24">
        <div
          className={`relative z-20 max-w-4xl mx-auto text-center px-6 py-20 bg-[#3EF4E4] rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight">
            Ready to build a site that{' '}
            <span className="underline underline-offset-4">converts?</span>
          </h2>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let’s create a digital experience that sets you apart from the competition.
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
  );
}
