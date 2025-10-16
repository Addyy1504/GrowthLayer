import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-32 bg-[#3EF4E4] text-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ✨ Heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-center mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Don’t be shy, say <span className="text-white">hey 👋</span>
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl text-center text-black/80 max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          We love good convos — strategy, memes, or your next big idea 
        </p>

        {/* 🧭 Two Column Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          {/* 📝 Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 space-y-5 flex flex-col justify-center"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your awesome name ✨"
              required
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f8f8f8] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your secret inbox 📬"
              required
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f8f8f8] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your number (we text back fast 📱)"
              required
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f8f8f8] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Spill your brilliant idea 🧠"
              required
              rows={5}
              className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f8f8f8] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 resize-none transition-all"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 sm:py-5 rounded-2xl font-bold text-white bg-black hover:bg-white hover:text-black border-2 border-black transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting
                  ? 'Sending... ✈️'
                  : submitStatus === 'success'
                  ? 'Got it! 🚀'
                  : 'Slide into our inbox '}
              </span>
              {submitStatus !== 'success' && !isSubmitting && (
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              )}
            </button>

            {/* 🔗 Social Links */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <a
                href="https://wa.me/7011530281"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="https://www.instagram.com/growthlayer.studio?igsh=MXBhb3cyeHk4NWh3ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </form>

          {/* 🖤 Upgraded Black Box */}
<div className="bg-black text-white rounded-2xl px-6 py-6 md:py-8 shadow-xl border border-white/10 w-full max-w-md mx-auto flex flex-col justify-center gap-4 self-center md:self-center relative">
  {/* ✨ Glow Accent */}
  <div className="absolute inset-0 rounded-2xl bg-[#3EF4E4] opacity-20 blur-2xl -z-10"></div>

  <h3 className="text-3xl font-black leading-tight text-center md:text-left">
    We reply fast. ⚡
  </h3>

  <p className="text-sm sm:text-base text-white/80 leading-relaxed text-center md:text-left">
    Usually within <span className="text-[#3EF4E4] font-bold">24 hours</span> —  
    but let’s be real, we’re glued to our phones anyway 📱
  </p>

  <div className="bg-white text-black rounded-xl px-5 py-3 text-center font-semibold shadow-sm hover:scale-105 transition-transform cursor-pointer">
    💬 Let’s make something unforgettable together.
  </div>

  <p className="text-xs text-white/60 leading-tight text-center md:text-left">
    Or just stalk us on socials (we’d do the same 😉)
  </p>
          </div>
        </div>
      </div>
    </section>
  );
}
