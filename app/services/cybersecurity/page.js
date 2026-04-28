'use client';

import React, { useState } from 'react';
import { 
  Shield, Lock, AlertTriangle, Eye, Users, Bell, Wifi, 
  CheckCircle, ArrowRight, Star, Clock, Award, ShieldCheck, 
  Target, Layers, Database, Globe, Monitor, Settings,
  ChevronDown, ChevronRight, Play, Download, Calendar,
  TrendingUp, BarChart, Mail, Phone, MessageSquare,
  ExternalLink, DollarSign, HardDrive, Cpu, Activity,
  FileSearch, Key, Fingerprint, Server, Bug, Zap,
  Search, AlertCircle, UserCheck, LockKeyhole, Scan
} from 'lucide-react';

export default function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('professional');

  const keyFeatures = [
    {
      icon: ShieldCheck,
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security evaluations identifying vulnerabilities and compliance gaps'
    },
    {
      icon: Bug,
      title: 'Penetration Testing',
      description: 'Ethical hacking to discover security weaknesses before malicious actors do'
    },
    {
      icon: Eye,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock threat detection and incident response with SIEM integration'
    },
    {
      icon: UserCheck,
      title: 'Compliance Management',
      description: 'ISO 27001, SOC 2, GDPR, and industry-specific compliance implementation'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid containment and recovery from security breaches and cyber attacks'
    },
    {
      icon: LockKeyhole,
      title: 'Identity Management',
      description: 'Multi-factor authentication, access controls, and identity governance solutions'
    }
  ];

  const technologies = [
    { name: 'SIEM Tools', category: 'Monitoring', icon: '🛡️', description: 'Security Information Event Management' },
    { name: 'Penetration Testing', category: 'Assessment', icon: '🔍', description: 'Ethical hacking and vulnerability testing' },
    { name: 'Compliance Auditing', category: 'Governance', icon: '📋', description: 'Regulatory compliance management' },
    { name: 'Security Frameworks', category: 'Standards', icon: '🏗️', description: 'NIST, ISO 27001, CIS Controls' },
    { name: 'Encryption', category: 'Protection', icon: '🔐', description: 'Data encryption and cryptography' },
    { name: 'Identity Management', category: 'Access Control', icon: '👤', description: 'IAM and access governance' },
    { name: 'Incident Response', category: 'Response', icon: '🚨', description: 'Security incident management' },
    { name: 'Threat Intelligence', category: 'Intelligence', icon: '🎯', description: 'Threat detection and analysis' }
  ];

  const developmentProcess = [
    {
      phase: 'Security Assessment',
      duration: '5-7 Days',
      activities: [
        'Comprehensive security audit and gap analysis',
        'Vulnerability scanning and penetration testing',
        'Compliance requirements evaluation',
        'Risk assessment and threat modeling',
        'Current security posture documentation'
      ],
      deliverables: ['Security Audit Report', 'Vulnerability Assessment', 'Risk Analysis', 'Compliance Gap Report']
    },
    {
      phase: 'Security Strategy & Planning',
      duration: '7-10 Days',
      activities: [
        'Security architecture design and planning',
        'Security policies and procedures development',
        'Incident response plan creation',
        'Security awareness program design',
        'Implementation roadmap and timeline'
      ],
      deliverables: ['Security Strategy', 'Policy Framework', 'Incident Response Plan', 'Implementation Roadmap']
    },
    {
      phase: 'Implementation & Deployment',
      duration: '2-4 Weeks',
      activities: [
        'Security controls implementation',
        'SIEM and monitoring tools deployment',
        'Identity and access management setup',
        'Security training and awareness programs',
        'Testing and validation of security measures'
      ],
      deliverables: ['Security Infrastructure', 'Monitoring Systems', 'Access Controls', 'Training Materials']
    },
    {
      phase: 'Monitoring & Maintenance',
      duration: 'Ongoing',
      activities: [
        '24/7 security monitoring and alerting',
        'Regular security assessments and updates',
        'Incident response and threat hunting',
        'Compliance monitoring and reporting',
        'Continuous improvement and optimization'
      ],
      deliverables: ['Security Dashboard', 'Monthly Reports', 'Incident Reports', 'Compliance Documentation']
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Data Protection',
      client: 'MedSecure Hospital',
      industry: 'Healthcare',
      challenge: 'Hospital needed HIPAA compliance and protection against ransomware attacks on patient data',
      solution: 'Comprehensive cybersecurity overhaul with endpoint protection, staff training, and incident response',
      results: [
        'Achieved full HIPAA compliance certification',
        'Zero security incidents in 18 months post-implementation',
        '99.9% uptime with robust backup and recovery',
        '100% staff completion of security awareness training'
      ],
      technologies: ['SIEM', 'Endpoint Protection', 'Compliance Auditing', 'Staff Training'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop',
      metrics: {
        timeline: '6 weeks',
        team: '4 specialists',
        compliance: 'HIPAA Certified',
        incidents: 'Zero breaches'
      }
    },
    {
      title: 'Financial Institution Security',
      client: 'TechGlobal Systems',
      industry: 'Financial Services',
      challenge: 'Regional bank facing sophisticated cyber threats and regulatory compliance requirements',
      solution: 'Multi-layered security architecture with advanced threat detection and PCI DSS compliance',
      results: [
        'Prevented 15+ advanced persistent threats',
        'Achieved PCI DSS Level 1 compliance',
        'Reduced security incident response time by 80%',
        'Passed all regulatory audits with zero findings'
      ],
      technologies: ['Advanced Threat Detection', 'PCI DSS', 'Incident Response', 'Regulatory Compliance'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',
      metrics: {
        timeline: '8 weeks',
        team: '6 experts',
        threats: '15+ blocked',
        compliance: 'PCI DSS Level 1'
      }
    }
  ];

  const pricingPackages = [
    {
      id: 'basic',
      name: 'Security Essentials',
      price: '₹75,000',
      originalPrice: '₹1,00,000',
      duration: '2-3 weeks',
      description: 'Foundation security package for small businesses',
      features: [
        'Basic security audit and assessment',
        'Vulnerability scanning and reporting',
        'Essential security policies documentation',
        'Basic firewall and antivirus setup',
        'Employee security awareness training',
        'Incident response procedures',
        '3 months email support',
        'Security best practices guide',
        'Basic compliance checklist'
      ],
      limitations: [
        'Basic monitoring only',
        'Standard security measures',
        'Limited penetration testing',
        'Email support only'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Enterprise Security',
      price: '₹2,25,000',
      originalPrice: '₹3,00,000',
      duration: '4-6 weeks',
      description: 'Comprehensive security solution for growing businesses',
      features: [
        'Comprehensive security audit & penetration testing',
        'Advanced threat detection and SIEM setup',
        'Identity and access management implementation',
        'Compliance framework implementation',
        '24/7 security monitoring dashboard',
        'Incident response team and procedures',
        'Advanced employee security training',
        'Regular vulnerability assessments',
        'Security policy and procedure documentation',
        'Backup and disaster recovery planning',
        '12 months priority support',
        'Quarterly security reviews',
        'Compliance reporting and documentation'
      ],
      limitations: [
        'Standard response times',
        'Regular business hours support'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Advanced Cyber Defense',
      price: 'Custom Quote',
      originalPrice: null,
      duration: '6-12 weeks',
      description: 'Military-grade security for high-risk organizations',
      features: [
        'Red team penetration testing and war games',
        'Advanced persistent threat (APT) defense',
        'Zero-trust security architecture',
        'Custom SIEM and SOC implementation',
        'Regulatory compliance (SOC 2, ISO 27001)',
        'Dedicated security operations center',
        '24/7 premium incident response',
        'Advanced threat intelligence integration',
        'Custom security tool development',
        'Executive security briefings',
        'Dedicated security architect',
        'Annual security maturity assessments',
        'Custom compliance reporting',
        'Strategic security consulting'
      ],
      limitations: [],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'How often should we conduct security assessments?',
      answer: 'We recommend quarterly vulnerability scans and annual comprehensive penetration testing. High-risk organizations should consider continuous monitoring with monthly assessments. The frequency depends on your industry, compliance requirements, and threat landscape.'
    },
    {
      question: 'What is the difference between vulnerability scanning and penetration testing?',
      answer: 'Vulnerability scanning automatically identifies known security weaknesses. Penetration testing involves ethical hackers manually exploiting vulnerabilities to assess real-world risk. Pen testing provides deeper insights but costs more than automated scanning.'
    },
    {
      question: 'Do you help with compliance requirements like GDPR or HIPAA?',
      answer: 'Yes! We specialize in compliance implementation including GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001. Our team ensures you meet all regulatory requirements and maintain ongoing compliance through regular audits and reporting.'
    },
    {
      question: 'What happens if we experience a security breach?',
      answer: 'Our incident response team provides 24/7 emergency support. We immediately contain the threat, assess damage, preserve evidence, restore operations, and provide detailed forensic analysis. Response time varies by package (1-24 hours).'
    },
    {
      question: 'Can you integrate with our existing security tools?',
      answer: 'Absolutely! We work with existing firewalls, antivirus, SIEM systems, and other security tools. We can integrate, optimize, or recommend replacements based on your security assessment and business needs.'
    },
    {
      question: 'How do you train our employees on cybersecurity?',
      answer: 'We provide comprehensive security awareness training including phishing simulations, policy training, role-based security education, and ongoing awareness programs. Training is customized to your industry and specific threats.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve healthcare, financial services, government, education, manufacturing, and technology sectors. Each industry has specific compliance requirements and threats that we address with tailored security solutions.'
    },
    {
      question: 'Do you provide ongoing security monitoring?',
      answer: 'Yes, our Enterprise and Advanced packages include 24/7 security monitoring with SIEM integration, real-time alerting, and incident response. We also provide monthly security reports and quarterly reviews.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      position: 'CISO, MedSecure Hospital',
      company: 'MedSecure Hospital',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Their cybersecurity team transformed our security posture. We achieved HIPAA compliance and haven\'t had a single security incident since implementation.'
    },
    {
      name: 'James Rodriguez',
      position: 'IT Director, TechGlobal Systems',
      company: 'TechGlobal Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The penetration testing revealed critical vulnerabilities we didn\'t know existed. Their 24/7 monitoring gives us peace of mind and rapid incident response.'
    },
    {
      name: 'Lisa Chen',
      position: 'CEO, DataSecure Inc',
      company: 'DataSecure Inc',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Professional team with deep security expertise. They helped us achieve SOC 2 compliance and implemented robust security controls. Highly recommended!'
    }
  ];

  const securityServices = [
    {
      type: 'Security Audits',
      description: 'Comprehensive evaluation of your current security posture',
      icon: FileSearch,
      features: ['Vulnerability Assessment', 'Risk Analysis', 'Compliance Review', 'Remediation Plan']
    },
    {
      type: 'Penetration Testing',
      description: 'Ethical hacking to identify exploitable vulnerabilities',
      icon: Bug,
      features: ['Network Testing', 'Web App Testing', 'Social Engineering', 'Physical Security']
    },
    {
      type: 'Compliance Management',
      description: 'Regulatory compliance implementation and maintenance',
      icon: CheckCircle,
      features: ['Policy Development', 'Audit Preparation', 'Documentation', 'Ongoing Monitoring']
    },
    {
      type: 'Identity Management',
      description: 'Secure access controls and authentication systems',
      icon: Key,
      features: ['Multi-Factor Auth', 'Single Sign-On', 'Access Controls', 'User Lifecycle']
    },
    {
      type: 'Incident Response',
      description: 'Rapid response to security breaches and threats',
      icon: AlertTriangle,
      features: ['Threat Containment', 'Forensic Analysis', 'Recovery Planning', 'Lessons Learned']
    },
    {
      type: 'Security Monitoring',
      description: '24/7 threat detection and security operations',
      icon: Monitor,
      features: ['SIEM Integration', 'Real-time Alerts', 'Threat Hunting', 'Security Dashboard']
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Critical Protection
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-blue-800">Cybersecurity Services</span> & Solutions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your business from cyber threats with comprehensive security audits, penetration testing, 
                compliance management, and 24/7 monitoring from certified security experts.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">24/7</div>
                  <div className="text-gray-600 text-sm">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">99.9%</div>
                  <div className="text-gray-600 text-sm">Threat Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">15min</div>
                  <div className="text-gray-600 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">100+</div>
                  <div className="text-gray-600 text-sm">Secured Clients</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Start Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Security Reports
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop" 
                  alt="Cybersecurity Services"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Comprehensive Security Protection</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced cybersecurity solutions including penetration testing, compliance management, and 24/7 monitoring.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-semibold">Starting from ₹75,000</span>
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
              Cybersecurity Service Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive security solutions designed for different risk levels and compliance requirements. All packages include incident response.
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
              Need custom security architecture? We provide tailored solutions for unique security requirements and high-risk environments.
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
              Security Technologies & Frameworks
            </h2>
            <p className="text-gray-600 text-lg">
              We use industry-leading security tools and follow established frameworks to protect your digital assets.
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

      {/* Development Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Implementation Process
            </h2>
            <p className="text-gray-600 text-lg">
              Systematic approach to cybersecurity implementation with minimal business disruption and maximum protection.
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
                        <ShieldCheck className="w-4 h-4 mr-2 text-green-600" />
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
              Cybersecurity FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about cybersecurity services and threat protection.
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
                Why Cybersecurity Matters Now More Than Ever
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Cyber threats are evolving rapidly. Protect your business with proactive security measures and expert monitoring.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: AlertTriangle,
                    title: 'Threat Landscape Growing',
                    description: 'Cyber attacks increased by 300% since 2020, targeting businesses of all sizes',
                    stat: '+300% Attacks'
                  },
                  {
                    icon: DollarSign,
                    title: 'Average Breach Cost',
                    description: 'Data breaches cost businesses an average of $4.45 million globally',
                    stat: '$4.45M Average'
                  },
                  {
                    icon: Clock,
                    title: 'Detection Time',
                    description: 'It takes an average of 277 days to detect and contain a breach',
                    stat: '277 Days'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Prevention ROI',
                    description: 'Every $1 invested in cybersecurity saves $5 in breach costs',
                    stat: '5:1 ROI'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-red-800 p-3 rounded-lg mr-4 flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
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
              <h3 className="text-2xl font-bold mb-6">Secure Your Business Today</h3>
              <p className="text-blue-100 mb-8">
                Don&apos;t wait for a cyber attack. Get a free security assessment and protect your business with expert cybersecurity solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free comprehensive security audit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Vulnerability assessment and penetration testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Compliance gap analysis and remediation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 security monitoring and incident response</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Security Assessment
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Security Checklist
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">2-6</div>
                    <div className="text-blue-200 text-sm">Weeks Timeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹75K+</div>
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
                  Ready to Strengthen Your Cybersecurity?
                </h2>
                <p className="text-gray-600 mb-8">
                  Connect with our cybersecurity experts. We&apos;ll help you identify vulnerabilities and implement comprehensive protection.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-blue-800" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Emergency Hotline</div>
                      <div className="text-gray-600">+91 99999 88888</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Security Team</div>
                      <div className="text-gray-600">security@dacitos.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">24/7 Incident Response</div>
                      <div className="text-gray-600">Available for security emergencies</div>
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
                      Security Service Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Security Audit & Assessment</option>
                      <option>Penetration Testing</option>
                      <option>Compliance Management</option>
                      <option>Incident Response</option>
                      <option>24/7 Security Monitoring</option>
                      <option>Identity Management</option>
                      <option>Emergency Security Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Security Concerns & Requirements
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your current security concerns, compliance requirements, and any recent incidents..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Free Security Assessment
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
          <h2 className="text-3xl font-bold mb-4">Don&apos;t Wait for a Cyber Attack</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Protect your business with comprehensive cybersecurity solutions. Our experts are ready to assess your security and implement protection today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Security Reports
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Protection</h3>
              <p className="text-gray-400 text-sm">Round-the-clock security monitoring</p>
            </div>
            <div>
              <ShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">99.9% Detection Rate</h3>
              <p className="text-gray-400 text-sm">Advanced threat detection and response</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100+ Clients Secured</h3>
              <p className="text-gray-400 text-sm">Trusted by businesses across industries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}