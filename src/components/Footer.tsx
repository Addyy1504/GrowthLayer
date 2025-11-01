import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔄 Scroll to the hash section after navigation (for e.g. /#services)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
      // Smooth-scroll if it's an anchor on the same page
      const element = document.querySelector(path);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else navigate('/' + path); // fallback if route hash
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Work', path: '#work' },
    { name: 'Contact', path: '#contact' },
  ];

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* ✨ Aqua Mint Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3EF4E4] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start gap-12">
        {/* 🧠 Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 items-center justify-between">
          {/* 🪄 Brand */}
          <div className="text-center md:text-left space-y-2 mx-auto md:mx-0">
            <h3 className="text-3xl font-black tracking-tight">
              <span className="text-[#3EF4E4]">GrowthLayer</span> Studio
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto md:mx-0">
              Engineering brands for the digital age 🚀
            </p>
          </div>

          {/* 🧭 Navigation */}
          <div className="flex flex-wrap justify-center md:justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="text-sm text-gray-400 hover:text-[#3EF4E4] transition-colors relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#3EF4E4] after:transition-all hover:after:w-full after:mt-1"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* 🌐 Socials */}
          <div className="flex justify-center md:justify-end gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#3EF4E4] hover:bg-[#3EF4E4]/10 transition-all group"
                  aria-label={social.label}
                >
                  <Icon
                    size={20}
                    className="text-gray-400 group-hover:text-[#3EF4E4] transition-colors duration-300"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* 🪶 Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        {/* 📜 Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-white">GrowthLayer Studio</span>. All rights reserved.
          </p>

          <div className="flex gap-3 text-center md:text-right">
            <Link to="/privacy" className="hover:text-[#3EF4E4] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#3EF4E4] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
