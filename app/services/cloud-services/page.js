'use client';

import React, { useState } from 'react';
import { 
  Cloud, Server, Shield, Zap, Users, Bell, Wifi, 
  CheckCircle, ArrowRight, Star, Clock, Award, Lock, 
  Target, Layers, Database, Globe, Monitor, Settings,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, HardDrive, Cpu, Activity,
  Gauge, RefreshCw, AlertTriangle, FileText, Headphones,
  GitBranch, Workflow, BarChart3, PieChart, LineChart
} from 'lucide-react';

export default function CloudServicesPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Solutions',
      description: 'Deploy across AWS, Azure, and Google Cloud with unified management and optimization'
    },
    {
      icon: Zap,
      title: 'Auto-Scaling Infrastructure',
      description: 'Automatically scale resources up or down based on demand to optimize costs and performance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security with encryption, compliance management, and 24/7 monitoring'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Comprehensive monitoring and alerting for infrastructure, applications, and performance'
    },
    {
      icon: RefreshCw,
      title: 'Disaster Recovery',
      description: 'Automated backup and disaster recovery solutions with guaranteed RTO and RPO'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Intelligent cost management with resource optimization and spending analytics'
    }
  ];

  const technologies = [
    { name: 'Amazon AWS', category: 'Cloud Provider', icon: '☁️', description: 'Industry-leading cloud platform' },
    { name: 'Microsoft Azure', category: 'Cloud Provider', icon: '🔷', description: 'Enterprise-grade cloud services' },
    { name: 'Google Cloud', category: 'Cloud Provider', icon: '🌐', description: 'AI and data-focused cloud platform' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Application containerization platform' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '⚙️', description: 'Container orchestration system' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as Code tool' },
    { name: 'DevOps', category: 'Methodology', icon: '🔄', description: 'Development and operations integration' },
    { name: 'Serverless', category: 'Architecture', icon: '⚡', description: 'Function-as-a-Service computing' }
  ];

  const developmentProcess = [
    {
      phase: 'Assessment & Strategy',
      duration: '3-5 Days',
      activities: [
        'Current infrastructure audit and analysis',
        'Cloud readiness assessment and gap analysis',
        'Cloud strategy development and roadmap',
        'Cost analysis and ROI projections',
        'Security and compliance requirements review'
      ],
      deliverables: ['Infrastructure Audit Report', 'Cloud Migration Strategy', 'Cost Analysis', 'Security Assessment']
    },
    {
      phase: 'Architecture & Planning',
      duration: '5-10 Days',
      activities: [
        'Cloud architecture design and documentation',
        'Security architecture and compliance planning',
        'Migration planning and timeline creation',
        'Disaster recovery and backup strategy',
        'Performance and scaling requirements'
      ],
      deliverables: ['Cloud Architecture Design', 'Migration Plan', 'Security Framework', 'DR Strategy']
    },
    {
      phase: 'Implementation & Migration',
      duration: '2-8 Weeks',
      activities: [
        'Cloud infrastructure provisioning',
        'Application migration and optimization',
        'Security implementation and testing',
        'Monitoring and alerting setup',
        'Performance testing and optimization'
      ],
      deliverables: ['Live Cloud Infrastructure', 'Migrated Applications', 'Security Implementation', 'Monitoring Setup']
    },
    {
      phase: 'Optimization & Support',
      duration: 'Ongoing',
      activities: [
        'Performance monitoring and optimization',
        'Cost optimization and resource management',
        '24/7 support and maintenance',
        'Regular security updates and patches',
        'Capacity planning and scaling'
      ],
      deliverables: ['Optimized Performance', 'Cost Reports', 'Support Documentation', 'Maintenance Schedule']
    }
  ];

  const caseStudies = [
    {
      title: 'Banking Cloud Transformation',
      client: 'FinanceFirst Bank',
      industry: 'Banking & Finance',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high operational costs',
      solution: 'Complete AWS cloud migration with microservices architecture and automated DevOps pipelines',
      results: [
        '60% reduction in infrastructure costs',
        '99.99% uptime with zero security incidents',
        '5x faster deployment cycles',
        'PCI DSS compliance achieved and maintained'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'DevOps'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop',
      metrics: {
        timeline: '3 months',
        team: '8 specialists',
        infrastructure: '200+ servers',
        savings: '₹2.5M annually'
      }
    },
    {
      title: 'E-commerce Platform Scaling',
      client: 'RetailGiant Inc',
      industry: 'E-commerce',
      challenge: 'Traffic spikes during sales causing website crashes and revenue loss',
      solution: 'Multi-cloud auto-scaling solution with CDN optimization and real-time monitoring',
      results: [
        '300% traffic handling capacity increase',
        '99.9% uptime during peak sales events',
        '45% improvement in page load speeds',
        '₹10M additional revenue during flash sales'
      ],
      technologies: ['AWS', 'Azure', 'CloudFlare', 'Kubernetes', 'Monitoring'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      metrics: {
        timeline: '2 months',
        team: '6 engineers',
        traffic: '10M+ requests/day',
        uptime: '99.9%'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Cloud Starter',
      price: '₹2,00,000',
      originalPrice: '₹2,75,000',
      duration: '1-2 months',
      description: 'Perfect for small businesses moving to cloud',
      features: [
        'Single cloud provider setup (AWS/Azure/GCP)',
        'Basic infrastructure migration',
        'Standard security implementation',
        'Monitoring and alerting setup',
        'Basic backup and recovery',
        'Cost optimization recommendations',
        '3 months support included',
        'Documentation and training',
        'Performance baseline setup'
      ],
      limitations: [
        'Single cloud provider only',
        'Basic monitoring features',
        'Standard security measures',
        'Limited customization'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Enterprise Cloud',
      price: '₹5,00,000',
      originalPrice: '₹6,50,000',
      duration: '2-4 months',
      description: 'Advanced cloud solutions for growing businesses',
      features: [
        'Multi-cloud architecture support',
        'Complete infrastructure migration',
        'Advanced security & compliance',
        'Auto-scaling and load balancing',
        'Comprehensive monitoring & analytics',
        'Disaster recovery implementation',
        'DevOps pipeline setup',
        'Cost optimization & management',
        'Performance optimization',
        'Custom integrations',
        '12 months priority support',
        'Regular health checks',
        '24/7 monitoring included'
      ],
      limitations: [
        'Standard SLA terms',
        'Regular business hours support'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Cloud Transformation',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '3-12 months',
      description: 'Complete digital transformation for enterprises',
      features: [
        'Multi-cloud hybrid architecture',
        'Legacy system modernization',
        'Advanced security frameworks',
        'Compliance management (SOC2, ISO27001)',
        'Custom monitoring dashboards',
        'Advanced disaster recovery',
        'DevSecOps implementation',
        'AI/ML infrastructure setup',
        'Dedicated cloud architect',
        '24/7 premium support',
        'Custom SLA agreements',
        'Regular optimization reviews',
        'Training and workshops',
        'Strategic consulting included'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Which cloud provider should I choose for my business?',
      answer: 'The choice depends on your specific needs. AWS is great for startups and enterprises, Azure excels for Microsoft-centric environments, and Google Cloud is ideal for data analytics and AI workloads. We can help you assess and choose the best fit.'
    },
    {
      question: 'How long does cloud migration typically take?',
      answer: 'Basic migrations take 1-2 months, enterprise migrations need 3-6 months. Timeline depends on application complexity, data volume, and customization requirements. We provide detailed timelines after assessment.'
    },
    {
      question: 'Will my applications work in the cloud without modifications?',
      answer: 'Most modern applications can migrate with minimal changes. Legacy applications may need refactoring for optimal cloud performance. We assess each application and recommend the best migration approach.'
    },
    {
      question: 'How do you ensure data security during migration?',
      answer: 'We use encrypted data transfer, secure VPN connections, backup verification, and follow industry best practices. All migrations include security audits and compliance verification.'
    },
    {
      question: 'Can you help reduce our current cloud costs?',
      answer: 'Yes! We specialize in cloud cost optimization. Our typical clients see 30-60% cost reduction through right-sizing, reserved instances, auto-scaling, and unused resource cleanup.'
    },
    {
      question: 'Do you provide ongoing cloud management and support?',
      answer: 'Absolutely! We offer 24/7 monitoring, regular optimization, security updates, backup management, and technical support. All packages include different levels of ongoing support.'
    },
    {
      question: 'What happens if there\'s a cloud outage or disaster?',
      answer: 'Our disaster recovery solutions ensure minimal downtime. We implement multi-region backups, automated failover, and comprehensive recovery procedures with guaranteed RTO and RPO targets.'
    },
    {
      question: 'Can you integrate cloud services with our existing systems?',
      answer: 'Yes, we specialize in hybrid cloud integration. We can connect cloud services with on-premise systems, third-party applications, and create seamless workflows across all platforms.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CTO, FinanceFirst Bank',
      company: 'FinanceFirst Bank',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The cloud migration reduced our costs by 60% while improving performance. Their team handled everything professionally with zero downtime.'
    },
    {
      name: 'Priya Sharma',
      position: 'IT Director, RetailGiant Inc',
      company: 'RetailGiant Inc',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Our e-commerce platform now handles 300% more traffic without issues. The auto-scaling solution saved us during our biggest sale events.'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, TechStartup',
      company: 'TechStartup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Moving to cloud transformed our business. We focus on product development while they handle all infrastructure concerns. Highly recommended!'
    }
  ];

  const cloudServices = [
    {
      type: 'Cloud Migration',
      description: 'Complete migration of applications and data to cloud platforms',
      icon: Cloud,
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      type: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      icon: GitBranch,
      features: ['Terraform Templates', 'Automated Deployment', 'Version Control', 'Environment Management']
    },
    {
      type: 'DevOps & CI/CD',
      description: 'Continuous integration and deployment pipelines',
      icon: Workflow,
      features: ['Pipeline Automation', 'Testing Integration', 'Deployment Automation', 'Monitoring']
    },
    {
      type: 'Cloud Security',
      description: 'Comprehensive security implementation and management',
      icon: Shield,
      features: ['Security Architecture', 'Compliance Management', 'Monitoring & Alerting', 'Incident Response']
    },
    {
      type: 'Cost Optimization',
      description: 'Intelligent cost management and resource optimization',
      icon: DollarSign,
      features: ['Resource Right-sizing', 'Reserved Instances', 'Auto-scaling', 'Cost Analytics']
    },
    {
      type: 'Monitoring & Analytics',
      description: 'Real-time monitoring and business intelligence',
      icon: BarChart3,
      features: ['Performance Monitoring', 'Custom Dashboards', 'Alerting Systems', 'Analytics Reports']
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
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Enterprise Solution
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blue-800">Cloud Services</span> & Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with scalable, secure, and cost-effective cloud solutions. 
                Expert migration, optimization, and management across AWS, Azure, and Google Cloud.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">99.99%</div>
                  <div className="text-gray-600 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">60%</div>
                  <div className="text-gray-600 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">24/7</div>
                  <div className="text-gray-600 text-sm">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">100+</div>
                  <div className="text-gray-600 text-sm">Migrations</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Start Cloud Migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="Cloud Services"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Multi-Cloud Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Professional cloud migration and management across AWS, Azure, and Google Cloud platforms.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹2,00,000</span>
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
              Cloud Services Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive cloud solutions designed for different business needs and scales. All packages include migration support.
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
              Need a custom cloud architecture? We provide tailored solutions for unique business requirements.
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
              Cloud Technologies We Master
            </h2>
            <p className="text-gray-600 text-lg">
              We work with leading cloud platforms and modern DevOps tools to deliver scalable solutions.
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
              Cloud Transformation Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from businesses that transformed their operations with our cloud solutions.
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
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span><strong>Timeline:</strong> {study.metrics.timeline}</span>
                      <span><strong>Team:</strong> {study.metrics.team}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
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

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Cloud Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Success stories from businesses that transformed their operations with our cloud solutions.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-gray-600 text-lg">
              Proven methodology for seamless cloud transformation with minimal business disruption.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Services FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about cloud migration and management.
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
                Why Move to the Cloud?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Cloud transformation delivers measurable business benefits including cost reduction, improved performance, and enhanced security.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: DollarSign,
                    title: 'Significant Cost Savings',
                    description: 'Reduce infrastructure costs by 30-70% with pay-as-you-use pricing',
                    stat: 'Up to 70% Savings'
                  },
                  {
                    icon: Zap,
                    title: 'Improved Performance',
                    description: 'Faster application performance with global CDN and auto-scaling',
                    stat: '5x Faster'
                  },
                  {
                    icon: Shield,
                    title: 'Enhanced Security',
                    description: 'Enterprise-grade security with compliance and monitoring',
                    stat: '99.99% Uptime'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Business Agility',
                    description: 'Deploy new features and scale resources instantly',
                    stat: '10x Faster Deploy'
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
              <h3 className="text-2xl font-bold mb-6">Ready for Cloud Transformation?</h3>
              <p className="text-blue-100 mb-8">
                Start your cloud journey with a free consultation. Our experts will assess your needs and create a customized migration plan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free cloud readiness assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Detailed migration strategy and timeline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cost optimization recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 support and monitoring</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Cloud Assessment
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Cloud Migration Guide
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">1-4</div>
                    <div className="text-blue-200 text-sm">Months Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹2L+</div>
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
                  Ready to Move to the Cloud?
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with our cloud experts. We&apos;ll help you design and implement a cloud solution that transforms your business.
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
                      <div className="text-gray-600">cloud@dacitos.com</div>
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
                      Cloud Service Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Cloud Migration</option>
                      <option>Infrastructure as Code</option>
                      <option>DevOps & CI/CD</option>
                      <option>Cloud Security</option>
                      <option>Cost Optimization</option>
                      <option>Monitoring & Analytics</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Infrastructure Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your current infrastructure, applications, and cloud migration goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free Cloud Assessment
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with Cloud</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have reduced costs, improved performance, and enhanced security with our cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Cloud Case Studies
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Cloud className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100+ Migrations</h3>
              <p className="text-gray-400 text-sm">Successful cloud transformations</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">99.99% Uptime</h3>
              <p className="text-gray-400 text-sm">Reliable cloud infrastructure</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">60% Cost Savings</h3>
              <p className="text-gray-400 text-sm">Average infrastructure cost reduction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}