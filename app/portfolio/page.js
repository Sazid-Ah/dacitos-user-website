'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Filter,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  Briefcase
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterCategories = [
    'All',
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software',
    'E-commerce'
  ];

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await fetch('https://dacitos-backend.vercel.app/api/portfolio');
        const data = await res.json();
        setProjects(Array.isArray(data.portfolios) ? data.portfolios : []);
      } catch (error) {
        setProjects([]);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Web Development': Globe,
      'Mobile Apps': Smartphone,
      'Cloud Solutions': Cloud,
      'Cybersecurity': Shield,
      'Custom Software': Code,
      'E-commerce': TrendingUp
    };
    return iconMap[category] || Code;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-800">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our successful projects and discover how we&apos;ve helped businesses across 
              various industries achieve their digital transformation goals through innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">10+ Projects Delivered</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Users className="h-5 w-5 text-blue-800 mr-2" />
                <span className="text-gray-700 font-medium">5+ Happy Clients</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Globe className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">1+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter Projects:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500 text-xl py-20">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <div 
                    key={project.id ?? project.slug ?? `${project.title ?? 'project'}-${index}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-green-100">
                      <div className="absolute inset-0 flex items-center justify-center" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        {/*<Image 
                          src={project.clientLogo} 
                          alt={`${project.client} Logo`}
                          width={80}
                          height={80}
                          className="object-contain h-20 w-20 group-hover:scale-110 transition-transform"
                        />*/}
                        {/*<CategoryIcon className="h-16 w-16 text-blue-800 group-hover:scale-110 transition-transform" />*/}
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-gray-700">{project.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-green-600 font-medium mb-3">{project.client}</p>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={`${tech ?? 'tech'}-${index}`}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {project.teamSize}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Header */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="relative h-64 rounded-xl mb-4">
                    <div className="absolute inset-0 flex items-center justify-center" style={{backgroundImage: `url(${selectedProject.image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                      {/*(() => {
                        const CategoryIcon = getCategoryIcon(selectedProject.category);
                        return <CategoryIcon className="h-20 w-20 text-blue-800" />;
                      })()*/}
                      {/*<Image 
                        src={selectedProject.clientLogo} 
                        alt={`${selectedProject.client} Logo`}
                        width={80}
                        height={80}
                        className="object-contain h-20 w-20"
                      />*/}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    {/*<ExternalLink className="h-5 w-5 text-gray-400" />*/}
                    <Image 
                        src={selectedProject.clientLogo} 
                        alt={`${selectedProject.client} Logo`}
                        width={80}
                        height={80}
                        className="object-contain h-20 w-20"
                      />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6 text-justify">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Client</div>
                      <div className="font-medium text-gray-900">{selectedProject.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="font-medium text-gray-900">{selectedProject.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Team Size</div>
                      <div className="font-medium text-gray-900">{selectedProject.teamSize}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <div className="font-medium text-green-600">Completed</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={`${tech ?? 'tech'}-${index}`}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">The Challenge</h4>
                  <p className="text-red-700">{selectedProject.challenge}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Our Solution</h4>
                  <p className="text-green-700">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={`${result ?? 'result'}-${index}`} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <blockquote className="text-blue-800 font-medium italic mb-2">
                      {selectedProject.testimonial}
                    </blockquote>
                    <cite className="text-blue-600 text-sm">— {selectedProject.client}</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our projects have generated measurable results and lasting impact for our clients 
              across various industries and business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">250%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Database className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-gray-600">Security Compliance</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans multiple industries, showcasing our ability to adapt 
              and deliver specialized solutions for various business sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Healthcare & Life Sciences',
              'Financial Services',
              'E-commerce & Retail',
              'Education Technology',
              'Manufacturing & Logistics',
              'Media & Entertainment'
            ].map((industry) => (
              <div key={industry} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Briefcase className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful project follows our proven methodology that ensures quality, 
              transparency, and timely delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and project requirements" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and technical architecture" },
              { step: "03", title: "Development", description: "Agile development with regular updates and feedback loops" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support and maintenance" }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our proven expertise
            and innovative approach to software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" onClick={ () => { window.location.href = '/contact'; }}>
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors" onClick={ () => { window.location.href = '/case-studies'; }}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}