'use client';

import React, { useState } from 'react';
import { 
  Code, Server, Shield, Zap, Users, Bell, Database, 
  CheckCircle, ArrowRight, Star, Clock, Award, Lock, 
  Target, Layers, Globe, Monitor, Settings, Cpu,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, HardDrive, Activity,
  Gauge, RefreshCw, AlertTriangle, FileText, Headphones,
  GitBranch, Workflow, BarChart3, PieChart, LineChart,
  Brain, Cog, Building, Smartphone, Bot, Plug
} from 'lucide-react';

export default function CustomSoftwarePage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built from scratch to match your exact business requirements'
    },
    {
      icon: Brain,
      title: 'AI & ML Integration',
      description: 'Advanced AI and machine learning capabilities to automate processes and gain insights'
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Scalable database design with PostgreSQL, MongoDB, and modern data management'
    },
    {
      icon: Plug,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration with third-party systems'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Workflow automation and business process optimization to reduce manual work'
    },
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise applications with robust architecture and security'
    }
  ];

  const technologies = [
    { name: 'Java', category: 'Backend', icon: '☕', description: 'Enterprise-grade backend development' },
    { name: 'Python', category: 'Backend', icon: '🐍', description: 'AI/ML and web application development' },
    { name: '.NET', category: 'Backend', icon: '🔷', description: 'Microsoft technology stack' },
    { name: 'React', category: 'Frontend', icon: '⚛️', description: 'Modern UI development framework' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️', description: 'Enterprise frontend framework' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Advanced relational database' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', description: 'NoSQL document database' },
    { name: 'Microservices', category: 'Architecture', icon: '🔗', description: 'Scalable service architecture' }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Analysis',
      duration: '1-2 Weeks',
      activities: [
        'Business requirements analysis and documentation',
        'Technical feasibility study and architecture planning',
        'User story mapping and feature prioritization',
        'Technology stack selection and evaluation',
        'Project timeline and resource estimation'
      ],
      deliverables: ['Requirements Document', 'Technical Architecture', 'Project Roadmap', 'Cost Estimation']
    },
    {
      phase: 'Design & Prototyping',
      duration: '2-3 Weeks',
      activities: [
        'System architecture design and documentation',
        'Database schema design and optimization',
        'UI/UX design and user experience planning',
        'API specification and integration planning',
        'Security framework and compliance design'
      ],
      deliverables: ['System Architecture', 'Database Design', 'UI/UX Mockups', 'API Documentation']
    },
    {
      phase: 'Development & Testing',
      duration: '8-20 Weeks',
      activities: [
        'Agile development with regular sprints',
        'Code reviews and quality assurance',
        'Unit testing and integration testing',
        'Performance optimization and security testing',
        'User acceptance testing and feedback integration'
      ],
      deliverables: ['Working Software', 'Test Documentation', 'Performance Reports', 'Security Audit']
    },
    {
      phase: 'Deployment & Support',
      duration: 'Ongoing',
      activities: [
        'Production deployment and configuration',
        'User training and documentation',
        'Performance monitoring and optimization',
        'Bug fixes and feature enhancements',
        'Regular maintenance and updates'
      ],
      deliverables: ['Live Application', 'User Documentation', 'Support Portal', 'Maintenance Plan']
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Analytics Platform',
      client: 'DataDriven Inc',
      industry: 'Business Intelligence',
      challenge: 'Manual data analysis processes taking weeks, need for real-time insights and predictive analytics',
      solution: 'Custom AI platform with machine learning models, real-time dashboards, and automated reporting',
      results: [
        '90% reduction in analysis time',
        'Real-time insights with predictive accuracy of 85%',
        '₹50L annual savings in operational costs',
        'Automated reports generated in under 5 minutes'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      metrics: {
        timeline: '6 months',
        team: '8 developers',
        dataPoints: '1M+ daily',
        accuracy: '85%'
      }
    },
    {
      title: 'Enterprise Resource Planning System',
      client: 'ManufacturePro Ltd',
      industry: 'Manufacturing',
      challenge: 'Fragmented systems, inventory management issues, and lack of real-time production tracking',
      solution: 'Comprehensive ERP system with inventory management, production tracking, and supply chain optimization',
      results: [
        '40% improvement in inventory efficiency',
        '60% faster order processing',
        'Real-time production visibility',
        '₹2Cr annual cost savings'
      ],
      technologies: ['Java', 'Angular', 'PostgreSQL', 'Microservices', 'REST API'],
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=300&fit=crop',
      metrics: {
        timeline: '9 months',
        team: '12 specialists',
        users: '500+ employees',
        modules: '15 integrated'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Software Starter',
      price: '₹3,00,000',
      originalPrice: '₹4,00,000',
      duration: '3-4 months',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom web application development',
        'Basic database design and setup',
        'User authentication and authorization',
        'Responsive frontend with React/Angular',
        'REST API development',
        'Basic reporting and analytics',
        'Code documentation and deployment',
        '3 months support and maintenance',
        'User training sessions'
      ],
      limitations: [
        'Single application focus',
        'Basic integrations only',
        'Standard security features',
        'Limited customization'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Enterprise Software',
      price: '₹8,00,000',
      originalPrice: '₹10,50,000',
      duration: '6-8 months',
      description: 'Advanced solutions for growing businesses',
      features: [
        'Multi-module enterprise application',
        'Advanced database architecture',
        'Microservices-based architecture',
        'Third-party system integrations',
        'Advanced analytics and reporting',
        'Workflow automation capabilities',
        'Mobile application development',
        'AI/ML features integration',
        'Advanced security implementation',
        'Performance optimization',
        'DevOps and CI/CD setup',
        '12 months priority support',
        'Regular feature updates'
      ],
      limitations: [
        'Standard SLA terms',
        'Business hours support'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Digital Transformation',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '9-18 months',
      description: 'Complete digital transformation solutions',
      features: [
        'Multiple integrated applications',
        'Legacy system modernization',
        'AI and machine learning integration',
        'Advanced process automation',
        'Custom CRM/ERP development',
        'Business intelligence dashboards',
        'Multi-platform development',
        'Advanced security and compliance',
        'Dedicated development team',
        '24/7 premium support',
        'Custom SLA agreements',
        'Regular architecture reviews',
        'Staff augmentation options',
        'Strategic technology consulting'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'What technologies do you use for custom software development?',
      answer: 'We use modern technologies including Java, Python, .NET for backend, React and Angular for frontend, PostgreSQL and MongoDB for databases. We select the best technology stack based on your specific requirements and scalability needs.'
    },
    {
      question: 'How long does custom software development typically take?',
      answer: 'Development time varies by complexity. Simple applications take 3-4 months, enterprise solutions need 6-8 months, and comprehensive digital transformation projects can take 9-18 months. We provide detailed timelines after requirements analysis.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in system integration. We can connect your new software with existing databases, CRM systems, ERP solutions, and third-party APIs. We ensure seamless data flow and workflow integration.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Absolutely! All our packages include maintenance and support. We offer bug fixes, security updates, performance optimization, and feature enhancements. Support levels vary from basic to 24/7 premium support.'
    },
    {
      question: 'Can you modernize our legacy software systems?',
      answer: 'Yes, legacy modernization is our specialty. We can migrate old systems to modern platforms, improve performance, enhance security, and add new features while preserving your valuable business data and processes.'
    },
    {
      question: 'How do you ensure software security and data protection?',
      answer: 'We implement multiple security layers including encryption, secure authentication, authorization controls, input validation, and regular security audits. We follow industry best practices and compliance standards.'
    },
    {
      question: 'Can you develop mobile applications along with web software?',
      answer: 'Yes, we offer full-stack development including web applications, mobile apps (iOS/Android), and desktop applications. We can create unified solutions that work seamlessly across all platforms.'
    },
    {
      question: 'Do you provide AI and machine learning capabilities?',
      answer: 'Yes, we integrate AI/ML features including predictive analytics, natural language processing, computer vision, and intelligent automation. We use Python, TensorFlow, and other modern AI frameworks.'
    }
  ];

  const testimonials = [
    {
      name: 'Amit Patel',
      position: 'CTO, DataDriven Inc',
      company: 'DataDriven Inc',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The AI analytics platform transformed our business. We now get insights in minutes instead of weeks. Their team understood our complex requirements perfectly.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director, ManufacturePro Ltd',
      company: 'ManufacturePro Ltd',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The ERP system streamlined our entire manufacturing process. Inventory management is now automated and we have real-time visibility into everything.'
    },
    {
      name: 'David Chen',
      position: 'CEO, TechInnovate',
      company: 'TechInnovate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding custom development work. They delivered exactly what we needed with excellent code quality and documentation. Highly recommend their services!'
    }
  ];

  const softwareTypes = [
    {
      type: 'Enterprise Applications',
      description: 'Large-scale business applications for complex operations',
      icon: Building,
      features: ['ERP Systems', 'CRM Solutions', 'Supply Chain Management', 'Financial Management']
    },
    {
      type: 'Business Automation',
      description: 'Workflow automation and process optimization tools',
      icon: Cog,
      features: ['Process Automation', 'Workflow Management', 'Document Management', 'Task Automation']
    },
    {
      type: 'Data Analytics Platforms',
      description: 'Business intelligence and analytics solutions',
      icon: BarChart3,
      features: ['Custom Dashboards', 'Predictive Analytics', 'Data Visualization', 'Reporting Tools']
    },
    {
      type: 'AI-Powered Solutions',
      description: 'Artificial intelligence and machine learning applications',
      icon: Brain,
      features: ['Predictive Models', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      type: 'API Development',
      description: 'Custom APIs and integration solutions',
      icon: Plug,
      features: ['REST APIs', 'GraphQL APIs', 'Microservices', 'Third-party Integrations']
    },
    {
      type: 'Legacy Modernization',
      description: 'Modernizing and upgrading existing software systems',
      icon: RefreshCw,
      features: ['System Migration', 'Architecture Upgrade', 'Technology Stack Update', 'Performance Enhancement']
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
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Custom Development
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom <span className="text-blue-800">Software Development</span> Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with tailored software solutions. From AI-powered applications 
                to enterprise systems, we build custom software that perfectly fits your requirements.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">100+</div>
                  <div className="text-gray-600 text-sm">Custom Apps Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">85%</div>
                  <div className="text-gray-600 text-sm">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">60%</div>
                  <div className="text-gray-600 text-sm">Process Efficiency</div>
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
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop" 
                  alt="Custom Software Development"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Enterprise-Grade Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Custom software development with AI integration, modern architecture, and scalable design.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹3,00,000</span>
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
              Custom Software Development Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive development solutions tailored for different business needs and project scales.
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
              Need a specific solution? We provide custom quotes for unique software requirements.
            </p>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Development Technologies We Master
            </h2>
            <p className="text-gray-600 text-lg">
              We use cutting-edge technologies and frameworks to build robust, scalable custom software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <div className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
                  {tech.category}
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
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
              Custom Software Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from businesses that transformed their operations with our custom software solutions.
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

      {/* Software Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Custom Software We Develop
            </h2>
            <p className="text-gray-600 text-lg">
              From enterprise applications to AI-powered solutions, we build software for every business need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <type.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.type}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
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
              What Our Development Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Success stories from businesses that transformed their operations with our custom software.
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

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Custom Software Development Process
            </h2>
            <p className="text-gray-600 text-lg">
              Proven methodology for building scalable, secure, and user-friendly custom software solutions.
            </p>
          </div>

          <div className="space-y-12">
            {developmentProcess.map((phase, index) => (
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
              Custom Software Development FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about custom software development and our process.
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
                Why Choose Custom Software Development?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Custom software solutions deliver competitive advantages through tailored functionality, 
                improved efficiency, and seamless integration with your existing systems.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'Perfect Fit for Your Business',
                    description: 'Software built specifically for your processes and requirements',
                    stat: '100% Customized'
                  },
                  {
                    icon: Zap,
                    title: 'Improved Efficiency',
                    description: 'Automate workflows and eliminate manual processes',
                    stat: '60% Time Saved'
                  },
                  {
                    icon: Shield,
                    title: 'Enhanced Security',
                    description: 'Advanced security features tailored to your data protection needs',
                    stat: 'Bank-grade Security'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Scalable Growth',
                    description: 'Software that grows with your business and adapts to changes',
                    stat: 'Unlimited Scale'
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
              <h3 className="text-2xl font-bold mb-6">Ready to Build Your Custom Solution?</h3>
              <p className="text-blue-100 mb-8">
                Start your custom software project with a free consultation. Our experts will analyze your 
                requirements and create a detailed development plan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free requirements analysis and consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Detailed project roadmap and timeline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Technology recommendations and architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated development team and support</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Development Guide
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">3-18</div>
                    <div className="text-blue-200 text-sm">Months Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹3L+</div>
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
                  Ready to Build Your Custom Software?
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with our development experts. We&apos;ll help you design and build custom software
                  that perfectly fits your business requirements.
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
                      <div className="text-gray-600">development@dacitos.com</div>
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
                      Software Type Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Enterprise Applications</option>
                      <option>Business Automation</option>
                      <option>Data Analytics Platforms</option>
                      <option>AI-Powered Solutions</option>
                      <option>API Development</option>
                      <option>Legacy Modernization</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Requirements
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your software requirements, business goals, and any specific features you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free Project Consultation
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with Custom Software</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have improved efficiency, reduced costs, and gained competitive 
            advantages with our custom software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Development Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100+ Applications</h3>
              <p className="text-gray-400 text-sm">Custom software solutions delivered</p>
            </div>
            <div>
              <Brain className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-400 text-sm">Advanced AI and ML capabilities</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">60% Efficiency Gain</h3>
              <p className="text-gray-400 text-sm">Average process improvement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}