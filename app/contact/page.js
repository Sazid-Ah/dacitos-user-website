'use client';

import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare, 
  Building, Globe, Calendar, CheckCircle, ArrowRight, 
  Linkedin, Twitter, Facebook, Instagram, Youtube,
  Headphones, Shield, Zap, Users
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://dacitos-backend.vercel.app/api/contact/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle response (optional)
      const data = await response.json();
      console.log('Success:', data);

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
      setIsSubmitting(false);
    }
  };


  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Cybersecurity',
    'Custom Software Development',
    'IT Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP (Rush Project)',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Ongoing partnership',
    'Just exploring'
  ];

  /*
  const offices = [
    {
      city: "Bengaluru",
      country: "India",
      address: "HSR Layout, Sector 1, Bengaluru, Karnataka 560102",
      phone: "+91 80 4567 8900",
      email: "bengaluru@dacitos.com",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM IST",
      isHeadquarters: true
    },
    {
      city: "Mumbai",
      country: "India",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      phone: "+91 22 6789 0123",
      email: "mumbai@dacitos.com",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM IST",
      isHeadquarters: false
    },
    {
      city: "San Francisco",
      country: "USA",
      address: "SOMA District, San Francisco, CA 94103",
      phone: "+1 (415) 123-4567",
      email: "usa@dacitos.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      isHeadquarters: false
    }
  ];
  */

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      value: "+91 85408 68767",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "contact@dacitos.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support online",
      value: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      description: "Schedule a consultation",
      value: "Free 30-min consultation",
      action: "Schedule Now"
    }
  ];

  const whyChooseUs = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security for all your projects"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick turnaround times and efficient delivery"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals across all technologies"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className='text-center max-w-4xl mx-auto'>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Let&apos;s Build Something <span className="text-blue-800">Amazing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your business with cutting-edge technology? Our expert team is here to help you every step of the way.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <method.icon className="w-5 h-5 text-blue-800 mr-3" />
                      <h3 className="font-semibold">{method.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                    <p className="text-blue-600 font-medium text-sm">{method.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Quick Connect</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-blue-800 mb-4">Get a response within 2 hours</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full flex items-center justify-center" onClick={() => { window.location.href='tel:+918540868767' }}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 85408 68767
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-blue-800 mb-4">Or schedule a free consultation</p>
                  <button className="border border-white/30 hover:bg-white hover:text-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold transition-all w-full flex items-center justify-center" onClick={() => { window.location.href='#contactForm' }}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" id='contactForm'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we&apos;ll get back to you within 24 hours with a detailed proposal.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-green-800 hover:text-green-900 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-800 transition-all resize-none"
                        placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We&apos;re here to help you succeed. Reach out to discuss your project, get a quote, or learn more about our services.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose dacitos?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-800 p-2 rounded-lg mr-4 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-800 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    <span>+91 85408 68767</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-green-400" />
                    <span>contact@dacitos.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-green-400" />
                    <span>Mon-Fri: 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-700">
                  <p className="text-blue-100 text-sm mb-3">Follow us on social media:</p>
                  <div className="flex space-x-3">
                    {[{ Icon: Linkedin, url: "https://www.linkedin.com/in" }, { Icon: Twitter, url: "https://www.x.com" }, { Icon: Facebook, url: "https://www.facebook.com" }, { Icon: Instagram, url: "https://www.instagram.com" }, { Icon: Youtube, url: "https://www.youtube.com/channel"  }].map(({ Icon, url }, index) => (
                      <button key={index} className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors" onClick={() => window.open(url, '_blank')}>
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/*<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With offices across continents, we're positioned to serve clients worldwide with local expertise and global capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-800 to-green-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{office.city}</h3>
                    <p className="text-blue-100">{office.country}</p>
                    {office.isHeadquarters && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium mt-1 inline-block">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <Globe className="absolute top-4 right-4 w-8 h-8 text-white/70" />
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-800 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-800 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-800 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.hours}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      {/*<section className="py-20 bg-gradient-to-r from-blue-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {['RetailTech Corp', 'MediCare Solutions', 'FinanceFirst Bank', 'DataDriven Inc'].map((client) => (
                <span key={client} className="text-white font-medium">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}