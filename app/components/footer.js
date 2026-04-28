'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Code,
  Settings,
  ArrowUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '/services/web-development', icon: Globe },
    { name: 'Mobile Apps', href: '/services/mobile-development', icon: Smartphone },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Custom Software', href: '/services/custom-software', icon: Code },
    { name: 'IT Consulting', href: '/services/it-consulting', icon: Settings }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  const gradient = {
  from: '#085e7d',
  via: '#076e97',
  to: '#045f8c',
};

  return (
    <>
<footer
  className="relative text-white"
  style={{
    background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.via}, ${gradient.to})`
  }}
>
        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company */}
            <div>
             <div className="mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 260"
    className="h-15 w-auto"
  >
    <defs>
      <linearGradient id="dGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00B4D8" />
        <stop offset="100%" stopColor="#00d4a4" />
      </linearGradient>

      <linearGradient id="arrowGradFooter" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00B4D8" />
        <stop offset="100%" stopColor="#00d4a4" />
      </linearGradient>

      <mask id="cutFooter">
        <rect width="100%" height="100%" fill="white" />
        <polygon points="40,200 180,60 200,80 60,220" fill="black" />
      </mask>
    </defs>

    {/* Icon */}
    <g transform="translate(20,20)">
      <g mask="url(#cutFooter)">
        <path
          d="M60 20 L140 20 A90 90 0 0 1 140 220 L60 220 Z 
             M100 60 L100 180 L140 180 A60 60 0 0 0 140 60 Z"
          fill="url(#dGradFooter)"
        />
      </g>

      <polygon
        points="55,210 190,80 175,65 230,50 215,105 200,90 70,230"
        fill="url(#arrowGradFooter)"
      />

      <polyline
        points="20,140 80,80 140,170 200,110"
        fill="none"
        stroke="#00B4D8"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      <circle cx="20" cy="140" r="8" fill="#00B4D8" />
      <circle cx="80" cy="80" r="8" fill="#00B4D8" />
      <circle cx="140" cy="170" r="8" fill="#00B4D8" />
      <circle cx="200" cy="110" r="8" fill="#00B4D8" />
    </g>

    {/* Text */}
    <text
      x="285"
      y="140"
      fontSize="100"
      fontWeight="900"
      fill="white"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      Dacitos
    </text>

    <text
      x="285"
      y="200"
      fontSize="40"
      fontWeight="900"
      fill="#cbd5e1"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      Technologies Pvt Ltd
    </text>
  </svg>
</div>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge IT solutions and modern software development.
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00B4D8]" />
                  Bangalore, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00d4a4]" />
                  +91 85408 68767
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00B4D8]" />
                  contact@dacitos.com
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#00B4D8] transition"
                      >
                        <Icon className="w-4 h-4 text-[#00d4a4]" />
                        {service.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                {[...quickLinks, ...resources].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#00B4D8] transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Newsletter</h3>

              <p className="text-sm text-gray-300 mb-4">
                Get updates on latest tech & offers.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Subscribed!');
                  setEmail('');
                }}
                className="flex"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-l-lg bg-[#001d3d] border border-[#00B4D8]/20 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#00B4D8] to-[#00d4a4] text-black text-sm font-semibold rounded-r-lg hover:opacity-90 transition"
                >
                  Join
                </button>
              </form>

              {/* Social */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-2 rounded-lg bg-[#001d3d] border border-[#00B4D8]/20 hover:bg-[#00B4D8] group transition"
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-black" />
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#00B4D8]/20 bg-[#001d3d]">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

            <span>© {currentYear} Dacitos. All rights reserved.</span>

            <div className="flex gap-6 mt-3 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition">
                Terms
              </Link>
            </div>
          </div>
        </div>

      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-[#003566] to-[#00B4D8] text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;