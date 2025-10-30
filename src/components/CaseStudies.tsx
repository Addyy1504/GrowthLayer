import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      title: 'Looks Salon Automation',
      description:
        'WhatsApp CRM automation that transformed customer engagement and booking management.',
      tags: ['Automation', 'CRM', 'WhatsApp'],
      accent: '#3EF4E4',
      link: '/case-studies/looks-salon',
    },
    {
      title: 'Anchor Fab Website',
      description:
        'Modern B2B website design that elevated brand presence and drove lead generation.',
      tags: ['Web Design', 'B2B', 'Branding'],
      accent: '#3EF4E4',
      link: '/case-studies/anchor-fab',
    },
    {
      title: 'Real Estate Digital Presence',
      description:
        'A combined digital transformation for Munjal Constructions and Kumar Construction — building modern, lead-driven websites for Delhi’s real estate and construction industry.',
      tags: ['Real Estate', 'Web Design', 'Lead Generation'],
      accent: '#3EF4E4', // 💡 changed from #A259FF → #3EF4E4 (mint aqua)
      link: '/case-studies/real-estate',
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-28 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ✨ Title */}
        <h2
          className={`text-5xl md:text-7xl font-black text-center mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Work<span className="text-[#3EF4E4]">.</span>
        </h2>
        <p
          className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          We build scalable digital systems, stunning websites, and automation workflows that
          actually move the needle 🚀
        </p>

        {/* 🧊 Case Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {cases.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl border border-gray-200 p-8 overflow-hidden bg-white hover:shadow-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Glow Effect */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{
                  background: `radial-gradient(circle at 70% 20%, ${project.accent}, transparent)`,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 👇 View Project Button */}
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 font-semibold text-black bg-[#3EF4E4] border border-[#3EF4E4] px-5 py-2 rounded-full hover:bg-white hover:text-[#3EF4E4] transition-all duration-300 self-start"
                >
                  View Project
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✍️ Footer Line */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            And we’re just getting started 👀
          </p>
        </div>
      </div>
    </section>
  );
}
