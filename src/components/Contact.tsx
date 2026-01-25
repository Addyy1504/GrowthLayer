import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"sending" | "success" | "error">("sending");

  const sectionRef = useRef<HTMLDivElement>(null);

  const WHATSAPP_NUMBER = "7011530281";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
  const INSTAGRAM_LINK = "https://www.instagram.com/growthlayer.studio?igsh=MXBhb3cyeHk4NWh3ag==";
  const LINKEDIN_LINK = "https://linkedin.com";

  // ✅ Book a call link (your Vercel route)
  const BOOK_CALL_LINK = "/book"; // or "https://growthlayerstudio.in/book"

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // open modal immediately
    setModalOpen(true);
    setModalType("sending");

    const url = import.meta.env.VITE_GSHEET_WEBAPP_URL as string;
    const token = import.meta.env.VITE_GSHEET_TOKEN as string;

    const currentData = { ...formData };

    // clear instantly
    setFormData({ name: "", email: "", phone: "", message: "", company: "" });

    try {
      if (!url || !token) throw new Error("Missing VITE_GSHEET_WEBAPP_URL or VITE_GSHEET_TOKEN");

      const qs = new URLSearchParams({
        token,
        page: "contact",
        name: currentData.name,
        email: currentData.email,
        phone: currentData.phone,
        message: currentData.message,
        company: currentData.company,
      });

      await fetch(`${url}?${qs.toString()}`, { method: "GET" });

      setModalType("success");
      setTimeout(() => setModalOpen(false), 1800);
    } catch (err) {
      console.error(err);
      setModalType("error");
      setTimeout(() => setModalOpen(false), 3200);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-32 bg-[#3EF4E4] text-black relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-white blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-black/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-center mb-4 sm:mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Let’s build something sharp<span className="text-white">.</span>
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl text-center text-black/80 max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Drop the details. We’ll take it from “idea” to “done”.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.35s" }}
        >
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 space-y-5 flex flex-col justify-center border border-black/10"
          >
            {/* honeypot */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-[#FAFAFA] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-[#FAFAFA] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-[#FAFAFA] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 transition-all"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to improve (website, leads, retention… or all of it)?"
              required
              rows={5}
              className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-[#FAFAFA] focus:border-black focus:outline-none text-sm sm:text-base placeholder-gray-500 resize-none transition-all"
            />

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 sm:py-5 rounded-2xl font-black text-white bg-black border-2 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Send details"}
            </button>

            {/* ✅ schedule call */}
            <a
              href={BOOK_CALL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 sm:py-5 rounded-2xl font-black text-black bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              Schedule a call now
            </a>

            {/* socials */}
            <div className="flex items-center justify-center gap-6 pt-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </form>

          {/* RIGHT BLOCK */}
          <div className="bg-black text-white rounded-3xl px-7 py-8 shadow-2xl border border-white/10 w-full max-w-md mx-auto relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#3EF4E4]/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#3EF4E4]/12 blur-3xl rounded-full" />

            <h3 className="text-3xl font-black leading-tight relative">
              What to send (so we don’t play 20 questions)
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed relative">
              Three bullets and we’re locked in. Keep it short. Keep it real. We’ll do the heavy lifting.
            </p>

            <div className="mt-6 space-y-3 relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm text-white/80">Goal</p>
                <p className="font-semibold">More leads / more bookings / cleaner brand</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm text-white/80">Current setup</p>
                <p className="font-semibold">Website / Instagram / WhatsApp / “nothing yet”</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm text-white/80">Timeline</p>
                <p className="font-semibold">This week / this month / “ASAP but sane”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => !isSubmitting && setModalOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black text-white shadow-2xl overflow-hidden">
            <div className="absolute -inset-1 bg-[#3EF4E4] opacity-20 blur-2xl" />

            <div className="relative p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black">
                    {modalType === "sending" && "Sending"}
                    {modalType === "success" && "Sent"}
                    {modalType === "error" && "Didn’t go through"}
                  </h4>

                  <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                    {modalType === "sending" && "Saving this to our sheet."}
                    {modalType === "success" && "We’ve got it. You’ll hear back soon."}
                    {modalType === "error" && "Try again or message us on WhatsApp."}
                  </p>
                </div>

                <button
                  onClick={() => !isSubmitting && setModalOpen(false)}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* ✅ If success, show book call CTA */}
              {modalType === "success" ? (
                <div className="mt-5 space-y-3">
                  <a
                    href={BOOK_CALL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-12 rounded-2xl font-black bg-[#3EF4E4] text-black hover:opacity-90 transition flex items-center justify-center"
                  >
                    Book a call now
                  </a>

                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[#3EF4E4] w-full transition-all duration-700" />
                  </div>
                </div>
              ) : modalType === "error" ? (
                <div className="mt-5 flex gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 rounded-2xl font-bold bg-[#25D366] text-black hover:opacity-90 transition flex items-center justify-center gap-2"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="flex-1 py-3 rounded-2xl font-bold border-2 border-white/20 hover:bg-white hover:text-black transition"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="mt-5">
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-[#3EF4E4] transition-all duration-700 ${
                        modalType === "sending" ? "w-2/3 animate-pulse" : "w-full"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
