'use client';

import {
  Users,
  Target,
  Globe,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  Briefcase,
  TrendingUp,
  Shield
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "1+" },
    { icon: Users, label: "Happy Clients", value: "5+" },
    { icon: Briefcase, label: "Projects", value: "10+" },
    { icon: Globe, label: "Countries", value: "1+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We leverage modern technologies to build scalable and future-ready solutions."
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description: "We ensure high performance, security, and reliability in every project."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "We deeply understand client needs to deliver tailored solutions."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We continuously evolve with new tools, trends, and best practices."
    }
  ];

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const res = await fetch('https://dacitos-backend.vercel.app/api/team', {
          cache: 'no-cache'
        });
        const data = await res.json();
        setTeamMembers(Array.isArray(data.team) ? data.team : []);
      } catch {
        setTeamMembers([]);
      }
    }
    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#003566] via-[#002855] to-[#001d3d] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#00B4D8] to-[#00d4a4] bg-clip-text text-transparent">Dacitos</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            We build modern digital solutions that help businesses scale faster,
            operate smarter, and stay ahead in today’s competitive world.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i}>
                  <Icon className="mx-auto mb-2 text-[#00d4a4]" />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Dacitos started with a vision to simplify technology for businesses.
            </p>
            <p className="text-gray-600">
              Today, we help startups and enterprises build scalable web, mobile, and cloud solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#003566] to-[#00B4D8] text-white p-8 rounded-2xl shadow-lg">
            <Target className="mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              Deliver powerful, scalable, and secure digital solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
                  <Icon className="text-[#00B4D8] mb-4" />
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
                <img src={m.image} alt={m.name} className="h-56 w-full object-cover" />
                
                <div className="p-4 text-left">
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-sm text-[#00B4D8]">{m.role}</p>

                  {m.email && (
                    <p className="text-xs text-gray-500 flex items-center mt-2">
                      <Mail size={14} className="mr-1" /> {m.email}
                    </p>
                  )}

                  {m.phone && (
                    <p className="text-xs text-gray-500 flex items-center">
                      <Phone size={14} className="mr-1" /> {m.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>

            {[
              "Proven track record",
              "Expert developers",
              "24/7 support",
              "Agile methodology",
              "Security-first approach"
            ].map((item, i) => (
              <div key={i} className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#003566] to-[#00B4D8] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Let’s Work Together</h3>
            <p className="mb-4 text-sm">
              Build scalable digital products with our expert team.
            </p>

            <button
              onClick={() => (window.location.href = '/contact')}
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#003566] to-[#00B4D8] text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build something great?
        </h2>

        <button
          onClick={() => (window.location.href = '/contact')}
          className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}