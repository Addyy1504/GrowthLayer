import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();

  // 🧠 Manage transparency logic: transparent only on Home at top
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (location.pathname === '/' && window.scrollY < 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Work', path: '/#work' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent backdrop-blur-0'
          : 'bg-black/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌿 Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={Logo}
            alt="GrowthLayer Studio Logo"
            className="h-10 w-auto scale-125 transition-transform duration-300 group-hover:scale-135"
          />
        </Link>

        {/* 🍔 Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:text-[#3EF4E4] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 💻 Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-white hover:text-[#3EF4E4] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3EF4E4] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div
          className={`${
            isTransparent ? 'bg-black/50' : 'bg-black/80 backdrop-blur-md'
          } border-t border-gray-700 px-6 py-4 space-y-2`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-[#3EF4E4] transition-colors"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease forwards ${index * 0.1}s`
                  : 'none',
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* ✨ Animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
