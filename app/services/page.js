'use client';

import React, { use, useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, Users, MessageSquare, 
  Building, Globe, Calendar, CheckCircle, ArrowRight, 
  Linkedin, Twitter, Facebook, Instagram, Youtube,
  Headphones, Shield, Zap, Target, Award, Code,
  Globe as WebIcon, Smartphone, Cloud, 
  TrendingUp, Star, ChevronRight, Play, ExternalLink, 
  Download, DollarSign
} from 'lucide-react';

export default function ServicesPage() {

  const defaultServices = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: WebIcon,
      shortDesc: 'Custom websites and web applications that drive business growth',
      fullDesc: 'Transform your digital presence with cutting-edge web solutions. We create responsive, scalable, and user-friendly websites and web applications that engage your audience and drive conversions.',
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify'],
      features: [
        'Responsive Design & Mobile Optimization',
        'E-commerce & Payment Integration',
        'Content Management Systems',
        'SEO & Performance Optimization',
        'Progressive Web Applications (PWA)',
        'API Development & Integration'
      ],
      benefits: [
        'Increased online visibility and reach',
        'Improved user experience and engagement',
        'Higher conversion rates and sales',
        'Scalable architecture for future growth'
      ],
      pricing: 'Starting from ₹50,000',
      timeline: '2-8 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      icon: Smartphone,
      shortDesc: 'Native and cross-platform mobile apps for iOS and Android',
      fullDesc: 'Build powerful mobile applications that connect with your users on the go. Our expert team develops native iOS, Android, and cross-platform apps that deliver exceptional user experiences.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'Firebase', 'MongoDB'],
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      benefits: [
        'Direct customer engagement',
        'Increased brand loyalty',
        'New revenue opportunities',
        'Enhanced customer experience'
      ],
      pricing: 'Starting from ₹1,50,000',
      timeline: '3-6 months',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: Cloud,
      shortDesc: 'Scalable cloud infrastructure and migration solutions',
      fullDesc: 'Leverage the power of cloud computing to scale your business efficiently. We provide comprehensive cloud migration, architecture design, and management services across all major platforms.',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'DevOps', 'Serverless'],
      features: [
        'Cloud Migration Strategy',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Disaster Recovery Planning',
        'Cost Optimization',
        'Multi-cloud Architecture'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and reliability',
        'Better disaster recovery capabilities'
      ],
      pricing: 'Starting from ₹2,00,000',
      timeline: '1-4 months',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      shortDesc: 'Comprehensive security solutions and compliance services',
      fullDesc: 'Protect your business from evolving cyber threats with our comprehensive security services. We provide vulnerability assessments, penetration testing, and ongoing security monitoring.',
      technologies: ['SIEM Tools', 'Penetration Testing', 'Compliance Auditing', 'Security Frameworks', 'Encryption', 'Identity Management'],
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        '24/7 Monitoring'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance assurance',
        'Reduced security incidents',
        'Enhanced customer trust'
      ],
      pricing: 'Starting from ₹75,000',
      timeline: '2-6 weeks',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: Code,
      shortDesc: 'Tailored software solutions for unique business needs',
      fullDesc: 'Get software that fits your exact business requirements. We develop custom applications, enterprise software, and automation tools that streamline your operations and boost productivity.',
      technologies: ['Java', 'Python', '.NET', 'React', 'Angular', 'PostgreSQL', 'MongoDB', 'Microservices'],
      features: [
        'Business Process Automation',
        'Enterprise Software Solutions',
        'Legacy System Modernization',
        'API Development',
        'Database Design',
        'Third-party Integrations'
      ],
      benefits: [
        'Improved operational efficiency',
        'Reduced manual processes',
        'Better data management',
        'Competitive advantage'
      ],
      pricing: 'Starting from ₹3,00,000',
      timeline: '3-9 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      icon: Users,
      shortDesc: 'Strategic technology guidance and digital transformation',
      fullDesc: 'Navigate your digital transformation journey with expert guidance. Our consultants help you make informed technology decisions, optimize processes, and implement strategic IT initiatives.',
      technologies: ['Strategy Planning', 'Architecture Design', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      features: [
        'Technology Strategy Development',
        'Digital Transformation Planning',
        'IT Infrastructure Assessment',
        'Process Optimization',
        'Vendor Selection & Management',
        'Training & Change Management'
      ],
      benefits: [
        'Strategic technology alignment',
        'Reduced operational costs',
        'Improved business processes',
        'Future-ready infrastructure'
      ],
      pricing: 'Starting from ₹1,00,000',
      timeline: '1-3 months',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop'
    }
  ]

  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [services, setServices] = useState(defaultServices);
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    setServicesLoading(true);
    fetch('https://dacitos-backend.vercel.app/api/services/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched services:', data);
        // Handle both array response or object with services property
        const fetchedServices = Array.isArray(data) ? data : (data.services || []);
        
        if (fetchedServices.length > 0) {
          // Map icon names to actual icon components
          const iconMap = {
            'WebIcon': WebIcon,
            'Smartphone': Smartphone,
            'Cloud': Cloud,
            'Shield': Shield,
            'Code': Code,
            'Users': Users,
            'Globe': Globe,
            'Web': WebIcon
          };
          
          // Process services to ensure icons are components
          const processedServices = fetchedServices.map(service => ({
            ...service,
            icon: typeof service.icon === 'string' ? (iconMap[service.icon] || WebIcon) : service.icon
          }));
          
          console.log('Setting services:', processedServices);
          setServices(processedServices);
        } else {
          console.log('No services in response, using defaults');
        }
      })
      .catch(error => {
        console.log('Using default services due to error:', error.message);
        // Keep default services on error - this is intentional
      })
      .finally(() => {
        setServicesLoading(false);
      });
  }, []);


  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, goals, and current systems to create a comprehensive project roadmap.',
      icon: Target
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team designs user-friendly interfaces and robust system architecture tailored to your needs.',
      icon: Award
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development with regular testing ensures high-quality, bug-free solutions.',
      icon: Code
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with comprehensive training and ongoing support for optimal performance.',
      icon: CheckCircle
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: CheckCircle },
    { number: '5+', label: 'Happy Clients', icon: Users },
    { number: '7+', label: 'Expert Developers', icon: Code },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const industries = [
    { name: 'Healthcare', projects: '50+', icon: '🏥' },
    { name: 'Finance & Banking', projects: '40+', icon: '🏦' },
    { name: 'E-commerce', projects: '80+', icon: '🛒' },
    { name: 'Education', projects: '35+', icon: '🎓' },
    { name: 'Manufacturing', projects: '25+', icon: '🏭' },
    { name: 'Startups', projects: '100+', icon: '🚀' }
  ];

  const initialTestimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Inc.',
      message: 'dacitos transformed our entire infrastructure. Their cloud migration saved us 40% in operational costs while improving performance dramatically.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupXYZ',
      company: 'StartupXYZ',
      message: 'The mobile app they developed exceeded our expectations. User engagement increased by 300% within the first month of launch.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director, FinanceFlow',
      company: 'FinanceFlow',
      message: 'Their cybersecurity implementation gave us peace of mind. No security incidents in 2 years since working with dacitos.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];


  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [loading, setLoading] = useState(false);


    useEffect(() => {
      let cancelled = false;
  
      async function fetchTestimonials() {
        setLoading(true);
        try {
          const res = await fetch('https://dacitos-backend.vercel.app/api/testimonials');
          const data = await res.json();
          // Accept either { testimonials: [...] } or direct array response
          const fetched = Array.isArray(data?.testimonials)
            ? data.testimonials
            : Array.isArray(data)
            ? data
            : [];
  
          // Normalize fields to: name, role, company, message, rating, image
          const normalized = fetched.map((t) => ({
            name: t.name || t.fullName || '',
            role: t.role || t.position || '',
            company: t.company || t.org || t.employer || '',
            message: t.message || t.content || '',
            rating: typeof t.rating === 'number' ? t.rating : Number(t.rating) || 0,
            image: t.image || t.avatar || '/api/placeholder/60/60'
          }));
  
          if (!cancelled && normalized.length > 0) {
            setTestimonials(normalized);
            setCurrentTestimonial(0);
          }
        } catch (error) {
          // keep initial testimonials on error
          console.error('Failed to fetch testimonials:', error);
        } finally {
          if (!cancelled) setLoading(false);
        }
      }
  
      fetchTestimonials();
      return () => {
        cancelled = true;
      };
    }, []);
  
    // Auto-rotate testimonials only when we have at least one testimonial
    useEffect(() => {
      if (!testimonials || testimonials.length === 0) return;
  
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [testimonials]);
  



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-800">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Technology Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that drive innovation and business success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id || service._id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-800 p-3 rounded-lg mb-3 flex items-center space-x-3">
                      <service.icon className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.shortDesc || service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {service.timeline}
                    </div>
                    <div className="text-sm font-semibold text-blue-800">
                      {service.pricing}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center" onClick={() => location.href=`services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Deep Dive</h2>
            <p className="text-gray-600 text-lg">
              Explore our services in detail and see what makes us the right choice for your project.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center px-6 py-3 font-medium transition-all ${
                  service === index
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-600 hover:text-blue-800'
                }`}
              >
                <service.icon className="w-4 h-4 mr-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 p-3 rounded-lg mr-4">
                    {React.createElement(services[activeService].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{services[activeService].fullDesc}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Complete Feature Set:</h4>
                  <ul className="space-y-2">
                    {services[activeService].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {services[activeService].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-800 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 p-8 text-white">
                <h4 className="text-xl font-bold mb-6">Technologies We Use</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {services[activeService].technologies.map((tech) => (
                    <div key={tech} className="bg-white/10 rounded-lg p-3 text-center text-sm font-medium">
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="font-semibold mb-4">Project Investment</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Starting Price:</span>
                      <span className="font-semibold">{services[activeService].pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Timeline:</span>
                      <span className="font-semibold">{services[activeService].timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Support:</span>
                      <span className="font-semibold">12 months included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach that ensures successful project delivery and exceeds client expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-800 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/*<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bringing specialized expertise and innovative solutions across diverse industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {industry.projects}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Testimonial */}
      {/*<section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 to-green-600 rounded-2xl p-8 text-white text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[0]?.rating || 0)].map((_, index) => (
                <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              {testimonials[0]?.message || 'Loading testimonial...'}
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{testimonials[0]?.name || 'Loading...'}</div>
                <div className="text-blue-200">{testimonials[0]?.role || 'Loading...'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-gray-600 text-lg">
              Flexible packages designed to meet different business needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹50,000',
                description: 'Perfect for small businesses and startups',
                features: [
                  'Basic web development',
                  'Mobile-responsive design',
                  '3 months support',
                  'Basic SEO setup',
                  'Contact form integration'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '₹2,00,000',
                description: 'Comprehensive solution for growing businesses',
                features: [
                  'Advanced web/mobile app',
                  'Cloud integration',
                  '12 months support',
                  'Advanced analytics',
                  'Security audit included',
                  'Performance optimization'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'Full-scale digital transformation',
                features: [
                  'Complete digital ecosystem',
                  'Multi-platform development',
                  'Ongoing partnership',
                  'Dedicated team',
                  'Advanced security',
                  'Custom integrations',
                  '24/7 priority support'
                ],
                popular: false
              }
            ].map((package_, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${package_.popular ? 'ring-2 ring-blue-800 transform scale-105' : ''}`}>
                {package_.popular && (
                  <div className="bg-blue-800 text-white text-center py-2 font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{package_.name}</h3>
                  <div className="text-3xl font-bold text-blue-800 mb-3">{package_.price}</div>
                  <p className="text-gray-600 mb-6">{package_.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    package_.popular 
                      ? 'bg-blue-800 hover:bg-blue-900 text-white' 
                      : 'border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'
                  }`}>
                    {package_.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose dacitos Services?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine technical excellence with business acumen to deliver solutions that drive real results for your organization.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: 'Rapid Development',
                    description: 'Agile methodologies and proven frameworks for faster time-to-market'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'Military-grade security practices and compliance with industry standards'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Certified professionals with 5+ years average experience'
                  },
                  {
                    icon: Award,
                    title: 'Quality Assurance',
                    description: 'Rigorous testing and quality control processes ensure bug-free delivery'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-800 p-3 rounded-lg mr-4 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let&apos;s discuss your project requirements and provide you with a customized solution proposal.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-800 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="w-full border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Process Video
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-blue-200 text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">72hrs</div>
                    <div className="text-blue-200 text-sm">Average Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Comparison</h2>
            <p className="text-gray-600 text-lg">
              Compare our service offerings to find the perfect fit for your business needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Timeline</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Starting Price</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Complexity</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <service.icon className="w-5 h-5 text-blue-800 mr-3" />
                          <span className="font-medium text-gray-900">{service.title}</span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 text-gray-600">{service.timeline}</td>
                      <td className="text-center py-4 px-4 text-gray-900 font-semibold">{service.pricing}</td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          index < 2 ? 'bg-green-100 text-green-800' :
                          index < 4 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {index < 2 ? 'Simple' : index < 4 ? 'Medium' : 'Complex'}
                        </span>
                      </td>
                      <td className="text-center py-4 px-4 text-gray-600 text-sm">
                        {index < 2 ? 'Small-Medium Business' : index < 4 ? 'Enterprise' : 'Large Enterprise'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Business Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let technology challenges hold you back. Our expert team is ready to help you achieve your digital goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-gray-600 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-400 text-sm">No hidden costs, clear project estimates</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm">98% of projects delivered on schedule</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-400 text-sm">Ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}