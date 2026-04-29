'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import './styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-app-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        <div className="header-row">

          {/* LOGO */}
          <Link href="/" className="logo">
            <Image
              src="/dacitos-logo.png"
              alt="Dacitos Logo"
              width={160}
              height={50}
              className="logo-img"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="nav">

            {navigation.slice(0, 3).map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}

            {/* SERVICES */}
            <div className="dropdown" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="nav-link"
              >
                Services <ChevronDown size={14} />
              </button>

              {isServicesOpen && (
                <div className="dropdown-menu">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href} className="dropdown-item">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(3).map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}

            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="btn-primary mobile-btn-full"
            >
              Get in Touch
            </Link>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;