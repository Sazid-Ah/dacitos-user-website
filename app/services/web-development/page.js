'use client';

import React, { useState } from 'react';
import { 
  Globe, Code, Smartphone, Search, ShoppingCart, Zap, Users, 
  CheckCircle, ArrowRight, Star, Clock, Award, Shield, 
  Target, Layers, Database, Cloud, Palette, Monitor,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, Heart, Lightbulb, Settings
} from 'lucide-react';

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display across all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 95+ Google PageSpeed scores and sub-3 second load times'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to improve search engine visibility and rankings'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Ready',
      description: 'Integrated payment gateways and shopping cart functionality for online stores'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with SSL certificates and regular security updates'
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'Easy-to-use CMS for content updates without technical knowledge required'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️', description: 'Modern component-based UI development' },
    { name: 'Next.js', category: 'Framework', icon: '▲', description: 'Production-ready React framework' },
    { name: 'Vue.js', category: 'Frontend', icon: '🟢', description: 'Progressive JavaScript framework' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'Python', category: 'Backend', icon: '🐍', description: 'Powerful backend development' },
    { name: 'PHP', category: 'Backend', icon: '🐘', description: 'Robust server-side scripting' },
    { name: 'WordPress', category: 'CMS', icon: '📝', description: 'Popular content management system' },
    { name: 'Shopify', category: 'E-commerce', icon: '🛍️', description: 'Complete e-commerce platform' }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Planning',
      duration: '3-5 Days',
      activities: [
        'Requirements gathering and analysis',
        'Market research and competitor analysis',
        'Technical architecture planning',
        'Project timeline and milestone setup'
      ],
      deliverables: ['Project Brief', 'Technical Specification', 'Project Timeline']
    },
    {
      phase: 'Design & Prototyping',
      duration: '5-10 Days',
      activities: [
        'Wireframing and user journey mapping',
        'UI/UX design creation',
        'Interactive prototype development',
        'Client feedback and iterations'
      ],
      deliverables: ['Wireframes', 'Design Mockups', 'Interactive Prototype']
    },
    {
      phase: 'Development & Testing',
      duration: '10-30 Days',
      activities: [
        'Frontend and backend development',
        'Database design and implementation',
        'Third-party integrations',
        'Comprehensive testing and QA'
      ],
      deliverables: ['Staging Website', 'Test Reports', 'Documentation']
    },
    {
      phase: 'Launch & Optimization',
      duration: '2-3 Days',
      activities: [
        'Production deployment',
        'Performance optimization',
        'SEO setup and configuration',
        'Training and knowledge transfer'
      ],
      deliverables: ['Live Website', 'Analytics Setup', 'User Manual']
    }
  ];

  const caseStudies = [
    {
      title: 'Global E-commerce Platform',
      client: 'RetailTech Corp',
      industry: 'E-commerce',
      challenge: 'Outdated platform with poor user experience and low conversion rates',
      solution: 'Modern React-based e-commerce platform with advanced features',
      results: [
        '250% increase in conversion rates',
        '40% faster page load times',
        '60% increase in mobile traffic',
        '₹2.5M additional revenue in first quarter'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
      metrics: {
        timeline: '3 months',
        team: '6 developers',
        pages: '50+',
        integration: '12 APIs'
      }
    },
    {
      title: 'Progressive Web Application',
      client: 'StartupFlow',
      industry: 'SaaS',
      challenge: 'Need for app-like experience without native app development costs',
      solution: 'PWA with offline functionality and push notifications',
      results: [
        '90% faster installation vs native app',
        '70% increase in user engagement',
        '50% reduction in development costs',
        '99.9% uptime achievement'
      ],
      technologies: ['Next.js', 'PWA', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
      metrics: {
        timeline: '2 months',
        team: '4 developers',
        features: '25+',
        performance: '98/100'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Basic Website',
      price: '₹50,000',
      originalPrice: '₹75,000',
      duration: '2-3 weeks',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-8 responsive pages',
        'Mobile-first design',
        'Contact form integration',
        'Basic SEO setup',
        'SSL certificate',
        '3 months support',
        'Google Analytics setup',
        'Social media integration'
      ],
      limitations: [
        'No e-commerce functionality',
        'Limited customization',
        'Basic hosting included'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional Website',
      price: '₹1,50,000',
      originalPrice: '₹2,00,000',
      duration: '4-6 weeks',
      description: 'Advanced features for growing businesses',
      features: [
        '10-15 custom pages',
        'Advanced responsive design',
        'Content management system',
        'E-commerce functionality',
        'Payment gateway integration',
        'Advanced SEO optimization',
        '12 months support',
        'Performance optimization',
        'Third-party integrations',
        'Custom forms and workflows',
        'Blog functionality',
        'Email marketing setup'
      ],
      limitations: [
        'Limited to 100 products',
        'Standard hosting plan'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '8-12 weeks',
      description: 'Complete digital solution for large businesses',
      features: [
        'Unlimited pages and features',
        'Custom web application',
        'Advanced e-commerce platform',
        'Multi-language support',
        'Advanced security features',
        'Custom API development',
        '24/7 priority support',
        'Dedicated project manager',
        'Advanced analytics',
        'Cloud infrastructure',
        'Scalable architecture',
        'Custom integrations',
        'Training and workshops'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on complexity. A basic website takes 2-3 weeks, professional sites require 4-6 weeks, and enterprise solutions can take 8-12 weeks. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide website maintenance after launch?',
      answer: 'Yes, all our packages include support periods. Basic sites get 3 months, professional sites get 12 months, and enterprise clients receive ongoing support. We also offer extended maintenance plans.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We specialize in website redesigns and modernization. We can migrate your content, improve design, and add new functionality while maintaining your SEO rankings.'
    },
    {
      question: 'Do you build e-commerce websites?',
      answer: 'Yes, we build custom e-commerce solutions with payment gateways, inventory management, order tracking, and mobile optimization. We work with platforms like Shopify, WooCommerce, and custom solutions.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'All our websites use mobile-first design approach. They are fully responsive and optimized for all devices including smartphones, tablets, and desktops.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'We can help you choose the right hosting solution and domain name. We work with reliable hosting providers and can manage the setup process for you.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes, we include basic SEO optimization in all packages. We also offer advanced SEO services, content marketing, and can integrate with marketing tools like Google Analytics and email marketing platforms.'
    },
    {
      question: 'What happens if I need changes after the website is live?',
      answer: 'Minor changes are covered during the support period. For major changes or new features, we provide detailed quotes. Our CMS allows you to make content updates independently.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      position: 'CEO, RetailTech Corp',
      company: 'RetailTech Corp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'dacitos transformed our online presence completely. The new website increased our conversion rates by 250% and looks stunning on all devices.'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Founder, StartupFlow',
      company: 'StartupFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The PWA they built for us works like a native app but was delivered in half the time. Their technical expertise is outstanding.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director, TechGlobal',
      company: 'TechGlobal Systems',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Professional team, excellent communication, and delivered exactly what we needed. Our website now ranks #1 for our target keywords.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-800 p-3 rounded-lg mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular Service
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blue-800">Web Development</span> Services
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with custom websites and web applications that drive growth, 
                engage users, and deliver exceptional experiences across all devices.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">500+</div>
                  <div className="text-gray-600 text-sm">Websites Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">98%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">2-8</div>
                  <div className="text-gray-600 text-sm">Weeks Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Web Development"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Modern Web Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Responsive, fast, and user-friendly websites built with the latest technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹50,000</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-600 text-sm">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about our web development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Invest in Professional Web Development?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                A professionally built website is more than just an online presence—it&apos;s a powerful business tool that drives growth and revenue.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Increased Revenue',
                    description: 'Well-designed websites convert 2-3x better than poorly designed ones',
                    stat: '+250% ROI'
                  },
                  {
                    icon: Users,
                    title: 'Better User Experience',
                    description: 'Professional UX/UI design keeps visitors engaged and reduces bounce rates',
                    stat: '-40% Bounce Rate'
                  },
                  {
                    icon: Search,
                    title: 'Higher Search Rankings',
                    description: 'SEO-optimized websites rank higher on Google and attract more organic traffic',
                    stat: '+60% Traffic'
                  },
                  {
                    icon: Shield,
                    title: 'Enhanced Credibility',
                    description: 'Professional websites build trust and establish your brand authority',
                    stat: '75% Trust Factor'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-800 p-3 rounded-lg mr-4 flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {benefit.stat}
                        </span>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Your Project Started Today</h3>
              <p className="text-blue-100 mb-8">
                Ready to transform your online presence? Let&apos;s discuss your project and provide you with a detailed proposal.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free consultation and project analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Detailed proposal within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>No upfront payment required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Service Brochure
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">2-8</div>
                    <div className="text-blue-200 text-sm">Weeks Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹50K+</div>
                    <div className="text-blue-200 text-sm">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Web Project?
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with our web development experts. We&apos;ll help you turn your vision into reality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-blue-800" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-gray-600">+91 99999 88888</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-gray-600">web@dacitos.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Live Chat</div>
                      <div className="text-gray-600">Available 9 AM - 6 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 99999 88888"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Basic Website</option>
                      <option>E-commerce Website</option>
                      <option>Web Application</option>
                      <option>Website Redesign</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Online Presence</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have grown their businesses with our professional web development services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Our Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Award-Winning Design</h3>
              <p className="text-gray-400 text-sm">Recognized for excellence in web development</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Most projects completed within 2-8 weeks</p>
            </div>
            <div>
              <Heart className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-400 text-sm">Money-back guarantee on all projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}