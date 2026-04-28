'use client';

import React, { useState } from 'react';
import { 
  Lightbulb, Server, Shield, Zap, Users, Bell, Database, 
  CheckCircle, ArrowRight, Star, Clock, Award, Lock, 
  Target, Layers, Globe, Monitor, Settings, Cpu,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, HardDrive, Activity,
  Gauge, RefreshCw, AlertTriangle, FileText, Headphones,
  GitBranch, Workflow, BarChart3, PieChart, LineChart,
  Brain, Cog, Building, Search, Map, Compass, Route,
  BookOpen, Presentation, Users2, Briefcase
} from 'lucide-react';

export default function ITConsultingPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: Target,
      title: 'Technology Strategy',
      description: 'Comprehensive technology roadmaps aligned with your business objectives and growth plans'
    },
    {
      icon: Route,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation planning and execution for competitive advantage'
    },
    {
      icon: Search,
      title: 'Technology Assessment',
      description: 'In-depth analysis of current IT infrastructure, applications, and technology gaps'
    },
    {
      icon: Cog,
      title: 'Process Optimization',
      description: 'Business process analysis and optimization using technology solutions'
    },
    {
      icon: Shield,
      title: 'IT Governance',
      description: 'IT governance frameworks, compliance management, and risk assessment'
    },
    {
      icon: TrendingUp,
      title: 'Performance Enhancement',
      description: 'System optimization, performance tuning, and scalability improvements'
    }
  ];

  const consultingAreas = [
    { name: 'Strategy Planning', category: 'Strategic', icon: '🎯', description: 'Technology strategy and roadmap development' },
    { name: 'Architecture Design', category: 'Technical', icon: '🏗️', description: 'Enterprise architecture and system design' },
    { name: 'Digital Transformation', category: 'Strategic', icon: '🔄', description: 'Complete digital transformation planning' },
    { name: 'Cloud Strategy', category: 'Infrastructure', icon: '☁️', description: 'Cloud adoption and migration strategy' },
    { name: 'Cybersecurity', category: 'Security', icon: '🔒', description: 'Security assessment and strategy' },
    { name: 'Data Analytics', category: 'Analytics', icon: '📊', description: 'Data strategy and analytics implementation' },
    { name: 'Process Optimization', category: 'Operations', icon: '⚡', description: 'Business process improvement' },
    { name: 'IT Governance', category: 'Governance', icon: '📋', description: 'IT governance and compliance frameworks' }
  ];

  const consultingProcess = [
    {
      phase: 'Assessment & Discovery',
      duration: '1-2 Weeks',
      activities: [
        'Current state IT infrastructure assessment',
        'Business process analysis and mapping',
        'Technology gap identification and documentation',
        'Stakeholder interviews and requirements gathering',
        'Competitive analysis and industry benchmarking'
      ],
      deliverables: ['Assessment Report', 'Gap Analysis', 'Stakeholder Requirements', 'Current State Documentation']
    },
    {
      phase: 'Strategy Development',
      duration: '2-3 Weeks',
      activities: [
        'Technology strategy formulation and alignment',
        'Digital transformation roadmap creation',
        'Architecture design and technology selection',
        'Implementation timeline and resource planning',
        'Risk assessment and mitigation strategies'
      ],
      deliverables: ['Technology Strategy', 'Digital Roadmap', 'Architecture Design', 'Implementation Plan']
    },
    {
      phase: 'Planning & Design',
      duration: '2-4 Weeks',
      activities: [
        'Detailed project planning and scheduling',
        'Solution architecture and design documentation',
        'Vendor evaluation and technology selection',
        'Change management and training planning',
        'Budget estimation and resource allocation'
      ],
      deliverables: ['Project Plan', 'Solution Design', 'Vendor Recommendations', 'Change Management Plan']
    },
    {
      phase: 'Implementation Support',
      duration: '1-6 Months',
      activities: [
        'Project management and oversight',
        'Implementation guidance and support',
        'Quality assurance and testing coordination',
        'Training delivery and knowledge transfer',
        'Performance monitoring and optimization'
      ],
      deliverables: ['Project Oversight', 'Implementation Support', 'Training Materials', 'Performance Reports']
    }
  ];

  const caseStudies = [
    {
      title: 'Digital Transformation Strategy',
      client: 'TechCorp Industries',
      industry: 'Manufacturing',
      challenge: 'Legacy systems, disconnected processes, lack of digital strategy, and declining competitive position',
      solution: 'Comprehensive digital transformation roadmap with cloud migration, process automation, and data analytics',
      results: [
        '40% improvement in operational efficiency',
        '25% reduction in IT operational costs',
        'Unified data platform with real-time insights',
        '₹5Cr projected savings over 3 years'
      ],
      technologies: ['Strategy Planning', 'Cloud Migration', 'Process Automation', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop',
      metrics: {
        timeline: '4 months planning',
        team: '6 consultants',
        systems: '25+ applications',
        savings: '₹5Cr projected'
      }
    },
    {
      title: 'IT Infrastructure Modernization',
      client: 'FinanceSecure Bank',
      industry: 'Banking & Finance',
      challenge: 'Outdated infrastructure, security concerns, regulatory compliance issues, and scalability limitations',
      solution: 'Complete IT infrastructure assessment, security enhancement strategy, and modernization roadmap',
      results: [
        '99.9% system uptime achieved',
        '70% faster transaction processing',
        'Full regulatory compliance maintained',
        '50% improvement in security posture'
      ],
      technologies: ['Infrastructure Assessment', 'Security Strategy', 'Compliance Framework', 'Modernization'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop',
      metrics: {
        timeline: '3 months assessment',
        team: '8 specialists',
        compliance: '100% achieved',
        uptime: '99.9%'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'IT Assessment',
      price: '₹1,00,000',
      originalPrice: '₹1,50,000',
      duration: '2-4 weeks',
      description: 'Comprehensive IT assessment and recommendations',
      features: [
        'Current IT infrastructure assessment',
        'Technology gap analysis and identification',
        'Basic security and compliance review',
        'Technology recommendations report',
        'Implementation timeline and budget estimate',
        'Stakeholder presentation and consultation',
        '30-day follow-up support',
        'Executive summary and action items'
      ],
      limitations: [
        'Assessment only, no implementation',
        'Basic recommendations without detailed design',
        'Limited follow-up support',
        'Single location coverage'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Strategic Consulting',
      price: '₹3,50,000',
      originalPrice: '₹4,50,000',
      duration: '2-3 months',
      description: 'Complete technology strategy and transformation planning',
      features: [
        'Comprehensive technology strategy development',
        'Digital transformation roadmap creation',
        'Detailed architecture design and planning',
        'Process optimization and automation planning',
        'Vendor evaluation and selection support',
        'Change management and training strategy',
        'Risk assessment and mitigation planning',
        'Implementation project management support',
        'Performance metrics and KPI definition',
        'Quarterly strategy review sessions',
        '6 months ongoing consultation support',
        'Executive stakeholder presentations'
      ],
      limitations: [
        'Strategy and planning focus',
        'Implementation support limited to guidance'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Transformation Partner',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '6-18 months',
      description: 'Complete digital transformation partnership',
      features: [
        'End-to-end digital transformation strategy',
        'Multi-phase implementation planning',
        'Dedicated consulting team assignment',
        'Custom architecture and solution design',
        'Vendor management and procurement support',
        'Implementation project management',
        'Change management and training delivery',
        'Performance monitoring and optimization',
        'Ongoing strategic advisory services',
        '24/7 consultation support availability',
        'Custom SLA and service agreements',
        'Regular executive briefings and reports',
        'Technology innovation recommendations',
        'Long-term partnership and support'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'What does IT consulting typically include?',
      answer: 'IT consulting includes technology strategy development, digital transformation planning, infrastructure assessment, process optimization, architecture design, and implementation guidance. We tailor our services to your specific business needs and technology challenges.'
    },
    {
      question: 'How long does a typical IT consulting engagement take?',
      answer: 'Consulting engagements vary by scope. Basic assessments take 2-4 weeks, strategic consulting projects need 2-3 months, and comprehensive transformation partnerships can span 6-18 months. Timeline depends on complexity and implementation requirements.'
    },
    {
      question: 'Do you provide implementation services or just strategy?',
      answer: 'We offer both strategic consulting and implementation support. Our approach ranges from pure strategy and planning to full implementation partnership, depending on your needs and preferences.'
    },
    {
      question: 'How do you ensure consulting recommendations align with our business goals?',
      answer: 'We start with comprehensive business analysis, stakeholder interviews, and goal alignment sessions. All our recommendations are directly tied to your business objectives, ROI targets, and strategic initiatives.'
    },
    {
      question: 'Can you help with technology vendor selection and management?',
      answer: 'Yes, we provide vendor evaluation, selection support, and procurement guidance. We help you choose the right technology partners based on your requirements, budget, and long-term strategy.'
    },
    {
      question: 'What industries do you provide IT consulting for?',
      answer: 'We serve various industries including manufacturing, banking, healthcare, retail, and technology companies. Our consultants have deep experience across multiple sectors and regulatory environments.'
    },
    {
      question: 'How do you measure the success of IT consulting projects?',
      answer: 'We establish clear KPIs and success metrics upfront, including cost savings, efficiency improvements, risk reduction, and business objective achievement. Regular reviews ensure we stay on track with measurable results.'
    },
    {
      question: 'Do you provide ongoing support after the consulting engagement?',
      answer: 'Yes, we offer various levels of ongoing support from basic follow-up consultations to comprehensive long-term partnerships. Support levels vary by package and can be customized to your needs.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Gupta',
      position: 'CIO, TechCorp Industries',
      company: 'TechCorp Industries',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Their digital transformation strategy transformed our business. We achieved 40% efficiency improvement and significant cost savings. Excellent strategic guidance.'
    },
    {
      name: 'Meera Sharma',
      position: 'IT Director, FinanceSecure Bank',
      company: 'FinanceSecure Bank',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The IT modernization strategy was exactly what we needed. Their expertise helped us achieve compliance and improve our security posture significantly.'
    },
    {
      name: 'David Thompson',
      position: 'CEO, InnovateTech',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding consulting expertise. They provided clear technology roadmap and helped us make informed decisions about our digital transformation journey.'
    }
  ];

  const consultingServices = [
    {
      type: 'Technology Strategy',
      description: 'Strategic technology planning and roadmap development',
      icon: Target,
      features: ['Strategic Planning', 'Technology Roadmaps', 'Digital Strategy', 'Innovation Planning']
    },
    {
      type: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting',
      icon: Route,
      features: ['Transformation Strategy', 'Change Management', 'Process Digitization', 'Cultural Transformation']
    },
    {
      type: 'IT Assessment',
      description: 'Comprehensive technology and infrastructure evaluation',
      icon: Search,
      features: ['Infrastructure Assessment', 'Application Portfolio Review', 'Security Assessment', 'Performance Analysis']
    },
    {
      type: 'Architecture Consulting',
      description: 'Enterprise architecture design and optimization',
      icon: Building,
      features: ['Enterprise Architecture', 'Solution Architecture', 'Integration Design', 'Technology Selection']
    },
    {
      type: 'Process Optimization',
      description: 'Business process analysis and improvement',
      icon: Cog,
      features: ['Process Analysis', 'Workflow Optimization', 'Automation Planning', 'Efficiency Improvement']
    },
    {
      type: 'IT Governance',
      description: 'IT governance frameworks and compliance management',
      icon: Shield,
      features: ['Governance Frameworks', 'Compliance Management', 'Risk Assessment', 'Policy Development']
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
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Strategic Consulting
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert <span className="text-blue-800">IT Consulting</span> & Strategic Services
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with strategic IT consulting. From technology strategy to digital 
                transformation, we provide expert guidance for sustainable growth and competitive advantage.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">200+</div>
                  <div className="text-gray-600 text-sm">Projects Consulted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">40%</div>
                  <div className="text-gray-600 text-sm">Avg Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">₹5Cr+</div>
                  <div className="text-gray-600 text-sm">Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">15+</div>
                  <div className="text-gray-600 text-sm">Industries Served</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Success Stories
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" 
                  alt="IT Consulting Services"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Strategic Technology Guidance</h3>
                  <p className="text-gray-600 mb-4">
                    Expert IT consulting for digital transformation, technology strategy, and business optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹1,00,000</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-600 text-sm">5.0/5 Rating</span>
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
              IT Consulting Service Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Strategic consulting services designed for different business needs and transformation scales.
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
              Need specialized consulting? We provide custom consulting solutions for unique business challenges.
            </p>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Custom Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Consulting Expertise Areas
            </h2>
            <p className="text-gray-600 text-lg">
              We provide expert consulting across strategic, technical, and operational IT domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{area.name}</h3>
                <div className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
                  {area.category}
                </div>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IT Consulting Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from businesses that transformed their operations with our strategic IT consulting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </div>
                    <div className="text-sm text-gray-500">{study.client}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span><strong>Timeline:</strong> {study.metrics.timeline}</span>
                      <span><strong>Team:</strong> {study.metrics.team}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of IT Consulting We Provide
            </h2>
            <p className="text-gray-600 text-lg">
              From strategic planning to implementation support, we offer comprehensive consulting services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.type}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Consulting Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Success stories from businesses that achieved transformation with our strategic guidance.
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

      {/* Consulting Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IT Consulting Methodology
            </h2>
            <p className="text-gray-600 text-lg">
              Proven consulting approach for delivering strategic insights and actionable technology solutions.
            </p>
          </div>

          <div className="space-y-12">
            {consultingProcess.map((phase, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/4 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                      <div className="text-blue-600 text-sm font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/4 bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-blue-600" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-green-600" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              IT Consulting FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about IT consulting and our strategic services.
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
                Why Choose IT Consulting?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Strategic IT consulting delivers measurable business value through expert guidance, 
                proven methodologies, and industry best practices.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'Strategic Alignment',
                    description: 'Technology strategies aligned with business objectives and goals',
                    stat: '100% Aligned'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Business Growth',
                    description: 'Digital transformation that drives revenue and competitive advantage',
                    stat: '40% Growth'
                  },
                  {
                    icon: DollarSign,
                    title: 'Cost Optimization',
                    description: 'Reduced IT costs through strategic planning and optimization',
                    stat: '25% Savings'
                  },
                  {
                    icon: Shield,
                    title: 'Risk Mitigation',
                    description: 'Comprehensive risk assessment and mitigation strategies',
                    stat: '99% Risk Free'
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
              <h3 className="text-2xl font-bold mb-6">Ready for Strategic IT Transformation?</h3>
              <p className="text-blue-100 mb-8">
                Start your transformation journey with expert IT consulting. Our strategic advisors will 
                assess your needs and create a comprehensive technology roadmap.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free initial consultation and assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Strategic technology roadmap development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Digital transformation planning and support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Ongoing strategic advisory services</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Strategy Session
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Consulting Guide
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">2-18</div>
                    <div className="text-blue-200 text-sm">Months Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹1L+</div>
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
                  Ready for Strategic IT Guidance?
                </h2>
                <p className="text-gray-600 mb-8">
                  Connect with our IT consulting experts. We&apos;ll help you develop technology strategies
                  that drive business growth and competitive advantage.
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
                      <div className="text-gray-600">consulting@dacitos.com</div>
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
                      Consulting Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Technology Strategy</option>
                      <option>Digital Transformation</option>
                      <option>IT Assessment</option>
                      <option>Architecture Consulting</option>
                      <option>Process Optimization</option>
                      <option>IT Governance</option>
                      <option>Custom Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Challenge Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your current IT challenges, business goals, and areas where you need strategic guidance..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free Strategy Consultation
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with Strategic IT Consulting</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have achieved digital transformation, cost optimization, 
            and competitive advantage through our strategic IT consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your Strategy Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Consulting Case Studies
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Lightbulb className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">200+ Strategies</h3>
              <p className="text-gray-400 text-sm">Technology strategies delivered</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">40% Growth</h3>
              <p className="text-gray-400 text-sm">Average business improvement</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">₹5Cr+ Savings</h3>
              <p className="text-gray-400 text-sm">Client cost optimization achieved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}