'use client';

import React, { useState } from 'react';
import { 
  Smartphone, Code, Globe, Zap, Users, Bell, Wifi, 
  CheckCircle, ArrowRight, Star, Clock, Award, Shield, 
  Target, Layers, Database, Cloud, Palette, Monitor,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, Heart, Lightbulb, Settings,
  AppWindow, Fingerprint, ShoppingBag, Camera, Map,
  Battery, Cpu, HardDrive, Share2
} from 'lucide-react';

export default function MobileDevelopmentPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform',
      description: 'Build native iOS/Android apps or cross-platform solutions using React Native and Flutter'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with smooth animations, fast loading times, and efficient memory usage'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Engage users with targeted push notifications and real-time messaging capabilities'
    },
    {
      icon: Wifi,
      title: 'Offline Functionality',
      description: 'Apps that work seamlessly even without internet connectivity with local data storage'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features including biometric authentication and data encryption'
    },
    {
      icon: Share2,
      title: 'API Integration',
      description: 'Seamless integration with third-party services, payment gateways, and social platforms'
    }
  ];

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform', icon: '⚛️', description: 'Build for iOS & Android simultaneously' },
    { name: 'Flutter', category: 'Cross-Platform', icon: '🎯', description: 'Google\'s UI toolkit for beautiful apps' },
    { name: 'Swift', category: 'iOS Native', icon: '🍎', description: 'Apple\'s modern programming language' },
    { name: 'Kotlin', category: 'Android Native', icon: '🤖', description: 'Modern Android development language' },
    { name: 'Xamarin', category: 'Cross-Platform', icon: '🔷', description: 'Microsoft\'s mobile development platform' },
    { name: 'Ionic', category: 'Hybrid', icon: '⚡', description: 'Web technologies for mobile apps' },
    { name: 'Firebase', category: 'Backend', icon: '🔥', description: 'Google\'s mobile development platform' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', description: 'NoSQL database for mobile backends' }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Strategy',
      duration: '5-7 Days',
      activities: [
        'Market research and competitive analysis',
        'User persona development and journey mapping',
        'Technical feasibility assessment',
        'Platform strategy (iOS, Android, or both)',
        'Feature prioritization and MVP definition'
      ],
      deliverables: ['Project Strategy', 'Technical Architecture', 'User Journey Maps', 'Feature Specification']
    },
    {
      phase: 'UI/UX Design',
      duration: '7-14 Days',
      activities: [
        'Wireframing and information architecture',
        'Visual design and branding integration',
        'Interactive prototype development',
        'User testing and design validation',
        'Design system creation'
      ],
      deliverables: ['Wireframes', 'UI Design', 'Interactive Prototype', 'Design System']
    },
    {
      phase: 'Development & Integration',
      duration: '30-60 Days',
      activities: [
        'Frontend and backend development',
        'API development and third-party integrations',
        'Database design and implementation',
        'Push notification setup',
        'Payment gateway integration'
      ],
      deliverables: ['Beta App', 'API Documentation', 'Integration Reports', 'Test Builds']
    },
    {
      phase: 'Testing & Deployment',
      duration: '7-14 Days',
      activities: [
        'Comprehensive testing (functional, performance, security)',
        'App store optimization and submission',
        'Deployment to production servers',
        'Performance monitoring setup',
        'User training and documentation'
      ],
      deliverables: ['Live App', 'App Store Listing', 'Analytics Setup', 'User Manual']
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Mobile App',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Need for HIPAA-compliant patient management system with telemedicine capabilities',
      solution: 'React Native app with secure video calling, appointment booking, and medical records management',
      results: [
        '300% increase in patient engagement',
        '50% reduction in appointment no-shows',
        '99.9% uptime with zero security incidents',
        '4.8/5 app store rating with 10K+ downloads'
      ],
      technologies: ['React Native', 'Firebase', 'WebRTC', 'HIPAA Compliance'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop',
      metrics: {
        timeline: '4 months',
        team: '5 developers',
        platforms: 'iOS & Android',
        users: '10,000+'
      }
    },
    {
      title: 'E-commerce Mobile Platform',
      client: 'ShopEase Retail',
      industry: 'Retail',
      challenge: 'Outdated mobile experience causing low conversion rates and poor user retention',
      solution: 'Flutter-based e-commerce app with AR product visualization and AI-powered recommendations',
      results: [
        '180% increase in mobile conversions',
        '65% improvement in user retention',
        '40% increase in average order value',
        'Featured as App of the Day on both stores'
      ],
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AR Core', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
      metrics: {
        timeline: '5 months',
        team: '7 developers',
        platforms: 'iOS & Android',
        revenue: '₹5M+ generated'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Basic Mobile App',
      price: '₹1,50,000',
      originalPrice: '₹2,00,000',
      duration: '2-3 months',
      description: 'Perfect for startups and simple mobile solutions',
      features: [
        'Single platform (iOS or Android)',
        'Up to 8 core screens',
        'Basic user authentication',
        'API integration (up to 3)',
        'Push notifications',
        'Basic analytics',
        '3 months support',
        'App store submission',
        'Basic backend setup'
      ],
      limitations: [
        'Single platform only',
        'No complex animations',
        'Basic UI/UX design',
        'Limited offline functionality'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Cross-Platform App',
      price: '₹3,50,000',
      originalPrice: '₹4,50,000',
      duration: '3-5 months',
      description: 'Advanced features for growing businesses',
      features: [
        'iOS & Android (React Native/Flutter)',
        'Unlimited screens and features',
        'Advanced user management',
        'Unlimited API integrations',
        'Advanced push notifications',
        'Offline functionality',
        'Payment gateway integration',
        'Real-time features',
        'Advanced analytics',
        'Custom UI/UX design',
        '12 months support',
        'Performance optimization',
        'Social media integration'
      ],
      limitations: [
        'Standard cloud hosting',
        'Basic admin panel'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '6-12 months',
      description: 'Complete mobile ecosystem for large organizations',
      features: [
        'Native iOS & Android apps',
        'Advanced backend architecture',
        'Enterprise security & compliance',
        'Multi-tenant architecture',
        'Advanced admin dashboard',
        'Custom API development',
        '24/7 priority support',
        'Dedicated project manager',
        'Advanced analytics & reporting',
        'Scalable cloud infrastructure',
        'White-label solutions',
        'Advanced integrations',
        'Training & workshops',
        'Ongoing maintenance'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Should I build a native app or cross-platform app?',
      answer: 'It depends on your needs. Native apps offer best performance and platform-specific features but cost more. Cross-platform apps like React Native or Flutter are cost-effective for most businesses and offer 80-90% of native performance.'
    },
    {
      question: 'How long does mobile app development take?',
      answer: 'Basic apps take 2-3 months, professional cross-platform apps need 3-5 months, and enterprise solutions require 6-12 months. Timeline depends on features, complexity, and platform requirements.'
    },
    {
      question: 'Do you handle app store submissions?',
      answer: 'Yes, we handle the complete app store submission process including creating developer accounts, preparing store listings, managing app reviews, and ensuring compliance with store guidelines.'
    },
    {
      question: 'Can you add features to my existing app?',
      answer: 'Absolutely! We can enhance existing apps, add new features, improve performance, update designs, or migrate to newer technologies. We work with apps built on any platform.'
    },
    {
      question: 'Do you provide backend development?',
      answer: 'Yes, we build complete backend solutions including APIs, databases, user management, push notifications, analytics, and cloud infrastructure setup.'
    },
    {
      question: 'What about app maintenance and updates?',
      answer: 'All packages include support periods. We also offer ongoing maintenance plans covering bug fixes, OS updates, feature enhancements, and performance monitoring.'
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Yes, we specialize in integrating mobile apps with existing CRMs, ERPs, payment systems, databases, and third-party services through APIs and custom integrations.'
    },
    {
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes, we integrate comprehensive analytics including user behavior, app performance, crash reporting, and business metrics. We can also build custom analytics dashboards.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Patel',
      position: 'CEO, MediCare Solutions',
      company: 'MediCare Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The healthcare app they built exceeded our expectations. Patient engagement increased by 300% and the HIPAA compliance was handled perfectly.'
    },
    {
      name: 'Rajesh Singh',
      position: 'CTO, ShopEase Retail',
      company: 'ShopEase Retail',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Our mobile conversions increased by 180% after launching the new app. The AR features and AI recommendations are game-changers for our business.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Product Manager, TechStartup',
      company: 'TechStartup',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Professional team with deep mobile expertise. They delivered our cross-platform app on time and within budget. Highly recommended!'
    }
  ];

  const appTypes = [
    {
      type: 'E-commerce Apps',
      description: 'Shopping apps with cart, payments, and inventory management',
      icon: ShoppingBag,
      features: ['Product catalogs', 'Payment integration', 'Order tracking', 'Wishlist & reviews']
    },
    {
      type: 'Social Media Apps',
      description: 'Community platforms with messaging and content sharing',
      icon: Users,
      features: ['User profiles', 'Real-time chat', 'Content feeds', 'Social features']
    },
    {
      type: 'Business Apps',
      description: 'Productivity and enterprise applications for businesses',
      icon: AppWindow,
      features: ['Task management', 'Team collaboration', 'File sharing', 'Analytics']
    },
    {
      type: 'Healthcare Apps',
      description: 'Medical apps with telemedicine and health tracking',
      icon: Heart,
      features: ['Appointment booking', 'Health records', 'Video consultations', 'Compliance']
    },
    {
      type: 'On-Demand Apps',
      description: 'Service marketplace apps like Uber, delivery, etc.',
      icon: Map,
      features: ['Real-time tracking', 'Service booking', 'Payment processing', 'Rating system']
    },
    {
      type: 'Educational Apps',
      description: 'Learning platforms with courses and progress tracking',
      icon: Lightbulb,
      features: ['Course content', 'Progress tracking', 'Assessments', 'Offline access']
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
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  High Demand Service
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert <span className="text-blue-800">Mobile App Development</span> Services
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build powerful native and cross-platform mobile applications that engage users, 
                drive business growth, and deliver exceptional experiences on iOS and Android.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">200+</div>
                  <div className="text-gray-600 text-sm">Apps Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">4.8/5</div>
                  <div className="text-gray-600 text-sm">App Store Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">3-6</div>
                  <div className="text-gray-600 text-sm">Months Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">100%</div>
                  <div className="text-gray-600 text-sm">Store Approval</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Start Your App Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View App Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
                  alt="Mobile App Development"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Native & Cross-Platform Apps</h3>
                  <p className="text-gray-600 mb-4">
                    High-performance mobile applications built with the latest technologies for iOS and Android.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹1,50,000</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-600 text-sm">4.8/5 Rating</span>
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
              Mobile App Development Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible packages designed for different business needs and budgets. All packages include app store submission.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPackages.map((package_, index) => (
              <div key={package_.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${package_.popular ? 'ring-2 ring-blue-800 transform scale-105' : ''}`}>
                {package_.popular && (
                  <div className="bg-blue-800 text-white text-center py-2 font-semibold text-sm">
                    Most Popular Choice
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{package_.name}</h3>
                    <div className="mb-2">
                      {package_.originalPrice && (
                        <span className="text-gray-400 text-lg line-through mr-2">{package_.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-blue-800">{package_.price}</span>
                    </div>
                    <div className="text-gray-600 text-sm">{package_.description}</div>
                    <div className="text-blue-600 text-sm font-medium mt-1">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {package_.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {package_.limitations.length > 0 && (
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Limitations:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {package_.limitations.map((limitation, idx) => (
                          <li key={idx}>• {limitation}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button 
                    onClick={() => setSelectedPackage(package_.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      package_.popular 
                        ? 'bg-blue-800 hover:bg-blue-900 text-white' 
                        : 'border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'
                    }`}
                  >
                    {package_.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom mobile solution? We provide tailored quotes for unique app requirements.
            </p>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Mobile App Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Success stories from businesses that transformed their operations with our mobile apps.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobile App Development FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about mobile app development.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Invest in Professional Mobile Apps?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Mobile apps provide direct access to your customers, increase engagement, and open new revenue streams for your business.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Increased Customer Engagement',
                    description: 'Mobile apps have 3x higher engagement rates than mobile websites',
                    stat: '+300% Engagement'
                  },
                  {
                    icon: Users,
                    title: 'Better User Retention',
                    description: 'Apps provide personalized experiences that keep users coming back',
                    stat: '90% Retention'
                  },
                  {
                    icon: Bell,
                    title: 'Direct Communication',
                    description: 'Push notifications have 4x higher open rates than emails',
                    stat: '25% Open Rate'
                  },
                  {
                    icon: DollarSign,
                    title: 'New Revenue Streams',
                    description: 'In-app purchases and premium features generate additional income',
                    stat: '+40% Revenue'
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
              <h3 className="text-2xl font-bold mb-6">Ready to Build Your Mobile App?</h3>
              <p className="text-blue-100 mb-8">
                Let&apos;s discuss your app idea and create a mobile solution that drives your business forward.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free app consultation and strategy session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Detailed proposal with wireframes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>100% app store approval guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Post-launch support and updates</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule App Consultation
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download App Development Guide
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">3-6</div>
                    <div className="text-blue-200 text-sm">Months Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹1.5L+</div>
                    <div className="text-blue-200 text-sm">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Mobile App?
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with our mobile app development experts. We&apos;ll help you build an app that users love.
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
                      <div className="text-gray-600">mobile@dacitos.com</div>
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
                      App Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>E-commerce App</option>
                      <option>Business App</option>
                      <option>Social Media App</option>
                      <option>Healthcare App</option>
                      <option>On-Demand App</option>
                      <option>Educational App</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      App Idea Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your app idea, target audience, and key features..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free App Quote
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
          <h2 className="text-3xl font-bold mb-4">Launch Your Mobile App Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join the mobile revolution and connect with your customers like never before. Our expert team is ready to bring your app idea to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your App Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View App Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">200+ Apps Built</h3>
              <p className="text-gray-400 text-sm">Proven track record in mobile development</p>
            </div>
            <div>
              <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">4.8/5 App Rating</h3>
              <p className="text-gray-400 text-sm">High-quality apps that users love</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Store Approval</h3>
              <p className="text-gray-400 text-sm">All apps successfully published</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}