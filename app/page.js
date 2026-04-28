'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Code,
  Settings,
  Users,
  Award,
  TrendingUp,
  Clock,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Quote,
  Play,
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });


  // ...existing code...

  // Animate stats counter
  useEffect(() => {
    const targetStats = { projects: 10, clients: 5, years: 1, satisfaction: 98 };
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setStats(prev => ({
        projects: Math.min(prev.projects + targetStats.projects / steps, targetStats.projects),
        clients: Math.min(prev.clients + targetStats.clients / steps, targetStats.clients),
        years: Math.min(prev.years + targetStats.years / steps, targetStats.years),
        satisfaction: Math.min(prev.satisfaction + targetStats.satisfaction / steps, targetStats.satisfaction)
      }));
    }, stepTime);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      id: 'fintech-solutions',
      title: 'Fintech Solutions',
      description: 'Advanced fintech solutions including AEPS, DMT, payout APIs, wallet systems, and payment gateway integrations for modern businesses.',
      features: [
        'AEPS Integration',
        'DMT Services',
        'Payout APIs',
        'Wallet Systems',
        'Payment Gateway'
      ],
    },
    {
      icon: Globe,
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
    },
    {
      icon: Smartphone,
      id: 'mobile-apps',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Ready'],
    },
    {
      icon: Cloud,
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable cloud solutions, migration services, and infrastructure management on AWS, Azure, and GCP.',
      features: ['Cloud Migration', 'DevOps', 'Auto-Scaling', '24/7 Monitoring'],
    },
    {
      icon: Shield,
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security audits, implementation, and monitoring to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
    },
    {
      icon: Code,
      id: 'custom-software',
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs and workflows.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Legacy Modernization'],
    },
    {
      icon: Settings,
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Strategic technology guidance to help your business leverage the latest innovations effectively.',
      features: ['Digital Strategy', 'Tech Roadmap', 'Process Optimization', 'Training'],
    }
  ];

  // Initial testimonials used as a fallback while the API responds
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

  // Fetch testimonials from the API on mount. Only replace the initial testimonials
  // if the API returns a non-empty array to avoid flashing an empty state.
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


  const whyChooseUs = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your business growth and efficiency.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Always using the latest technologies and best practices to keep your business ahead of the competition.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified professionals bring years of experience across multiple industries and technologies.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
    }
  ];

  const techStack = [
    'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 
    'MongoDB', 'PostgreSQL', 'TypeScript', 'Flutter', 'React Native', 'DevOps'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5FAFF] to-[#E6F7FB]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Transforming Businesses Since 2024
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted
                <span className="block bg-gradient-to-r from-[#003566] via-[#006A8A] to-[#00B4D8] bg-clip-text text-transparent">
                  IT Partner
                </span>
                for Success
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                We deliver cutting-edge IT solutions and software development services that drive growth, 
                enhance efficiency, and transform your business for the digital age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#003566] via-[#006A8A] to-[#00B4D8] text-white rounded-xl hover:from-blue-900 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
                <Link 
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-800 text-blue-800 rounded-xl hover:bg-blue-800 hover:text-white transition-all duration-300 font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Our Work
                </Link>
              </div>
              
              {/* Trust Indicators */}
              {/*<div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-600 mr-2" />
                  ISO 27001 Certified
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  AWS Partner
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-green-600 mr-2" />
                  {stats.averageRating}/5 Client Rating
                </div>
              </div>*/}
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">dacitos.com</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-[#003566] via-[#006A8A] to-[#00B4D8] rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-800" />
                      </div>
                      <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-blue-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-600 to-blue-800 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">
                {Math.floor(stats.projects)}+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {Math.floor(stats.clients)}+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">
                {Math.floor(stats.years)}+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {Math.floor(stats.satisfaction)}%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" data-animate className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to cloud infrastructure, we provide end-to-end technology solutions 
              that scale with your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-800 hover:text-green-600 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" data-animate className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Innovation, Designed for Growth
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that 
                not only work but drive real business value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Discovery & Planning', desc: 'Understanding your needs' },
                    { step: '02', title: 'Design & Development', desc: 'Building your solution' },
                    { step: '03', title: 'Testing & Deployment', desc: 'Ensuring quality delivery' },
                    { step: '04', title: 'Support & Maintenance', desc: 'Ongoing partnership' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm opacity-80">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-gray-600">
              Leveraging the latest and most reliable technologies to build your solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div 
                key={tech}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-[#003566] hover:bg-[#F0F8FF] transition-all duration-200 cursor-default"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" data-animate className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Quote className="w-4 h-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#F5FAFF] to-[#E6F7FB] rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].message}
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-blue-800 text-sm font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-blue-800 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003566] via-[#006A8A] to-[#00B4D8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let&apos;s discuss how we can help you achieve your technology goals and drive your business forward 
            with innovative IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact#contactForm"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-800 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get Free Consultation
            </Link>
            
            <Link 
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-800 transition-all duration-300 font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            Free consultation • No obligation • Quick response within 24 hours
          </div>
        </div>
      </section>
    </div>
  );
}