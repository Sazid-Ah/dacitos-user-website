'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  Globe,
  Settings,
  Mail,
  Phone
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const services = [
    { name: 'Web Development', href: '/services/web-development', icon: Globe, description: 'Custom websites & web applications' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development', icon: Smartphone, description: 'iOS & Android development' },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud, description: 'AWS, Azure & cloud migration' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security audits & implementation' },
    { name: 'Custom Software', href: '/services/custom-software', icon: Code, description: 'Tailored software solutions' },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Settings, description: 'Strategic technology guidance' }
  ];

  const navigation1 = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' }
  ];

  const navigation2 = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-[#003566]/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1000 320"
  className="h-28 md:h-20 w-auto"
>
  <defs>
    <linearGradient id="dShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#027B7F" />
      <stop offset="40%" stopColor="#006A8A" />
      <stop offset="100%" stopColor="#003566" />
    </linearGradient>
    
    <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#0077B6" />
      <stop offset="100%" stopColor="#00B4D8" />
    </linearGradient>

    <mask id="arrowCutout">
      <rect x="0" y="0" width="1000" height="320" fill="white" />
      <polygon points="50,270 240,80 260,100 70,290" fill="black" />
    </mask>
  </defs>

  {/* Logo Icon */}
  <g transform="translate(40, 20)">
    
    <g mask="url(#arrowCutout)">
      <path 
        d="M 80,40 
           L 160,40 
           A 100 100 0 0 1 160,240 
           L 80,240 Z 
           M 120,80 
           L 120,200 
           L 160,200 
           A 60 60 0 0 0 160,80 Z" 
        fill="url(#dShapeGrad)" 
      />
    </g>

    <polygon 
      points="75,235 220,90 205,75 260,60 245,115 230,100 85,245"
      fill="url(#arrowGrad)" 
    />

    <polyline 
      points="40,160 110,95 160,185 225,130"
      fill="none"
      stroke="#003566"
      strokeWidth="6"
      strokeLinejoin="round"
    />

    <circle cx="40" cy="160" r="10" fill="#003566" />
    <circle cx="110" cy="95" r="10" fill="#003566" />
    <circle cx="160" cy="185" r="10" fill="#003566" />
    <circle cx="225" cy="130" r="10" fill="#003566" />
    
  </g>

  {/* Brand Text */}
  <text
    x="320"
    y="165"
    fontSize="90"
    fontWeight="800"
    fill="#0C2340"
    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
  >
    Dacitos
  </text>

  <text
    x="325"
    y="215"
    fontSize="32"
    fontWeight="500"
    fill="#0C2340"
    style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.5px'
    }}
  >
    Technologies Pvt Ltd
  </text>
</svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-4">
            {navigation1.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#0C2340] hover:text-[#027B7F] text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#003566] to-[#00B4D8] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Services */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-[#0C2340] hover:text-[#027B7F] text-sm font-medium"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-80 bg-white rounded-xl shadow-xl border py-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.name} href={s.href} className="flex p-3 hover:bg-gray-50">
                        <Icon className="w-5 h-5 text-[#003566]" />
                        <div className="ml-3">
                          <div className="text-sm font-medium">{s.name}</div>
                          <div className="text-xs text-gray-500">{s.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {navigation2.map((item) => (
              <Link key={item.name} href={item.href} className="text-[#0C2340] hover:text-[#027B7F] text-sm">
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-[#003566] to-[#00B4D8]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg p-4 space-y-3">
            {[...navigation1, ...navigation2].map((item) => (
              <Link key={item.name} href={item.href} onClick={closeMenu}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;