'use client';

import { useState } from 'react';
import { 
  Users,
  Globe,
  Award,
  Heart,
  Coffee,
  Target,
  Zap,
  Calendar,
  Clock,
  Laptop,
  GraduationCap,
  Briefcase,
  Star,
  Send,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    'Engineering',
    'Design',
    'Product',
    'Marketing',
    'Sales',
    'HR'
  ];

  const openPositions = [/*
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '5-8 years',
      description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build scalable solutions.",
      requirements: [
        'Strong experience with React, Node.js, and modern JavaScript',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Understanding of CI/CD and DevOps practices',
        'Excellent problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients.',
      requirements: [
        'Strong portfolio demonstrating UI/UX projects',
        'Proficiency in Figma and design tools',
        'Understanding of user-centered design principles',
        'Experience with design systems'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead product strategy and execution for our enterprise solutions.',
      requirements: [
        'Experience in B2B product management',
        'Strong analytical and strategic thinking',
        'Excellent communication skills',
        'Technical background preferred'
      ]
    }*/
  ];

  const filteredPositions = selectedDepartment === 'All'
    ? openPositions
    : openPositions.filter(position => position.department === selectedDepartment);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget and regular training sessions'
    },
    {
      icon: Star,
      title: 'Performance Rewards',
      description: 'Competitive salary and performance-based bonuses'
    }
  ];

  const culture = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We encourage creative thinking and innovative solutions'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Work with talented individuals in a supportive environment'
    },
    {
      icon: Zap,
      title: 'Fast-Paced Growth',
      description: 'Rapid learning and career advancement opportunities'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-blue-800">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Be part of a dynamic team building innovative solutions for the digital future. 
              We value creativity, collaboration, and continuous learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">Best Places to Work 2025</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Users className="h-5 w-5 text-blue-800 mr-2" />
                <span className="text-gray-700 font-medium">200+ Team Members</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Globe className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">10+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment where innovation thrives and every team member can make an impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join us in building amazing solutions.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPositions.length > 0 ? (
              filteredPositions.map((position) => (
                <div 
                  key={position.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.department}
                    </span>
                    <span className="text-gray-500 text-sm">{position.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {position.experience}
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {position.location}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{position.description}</p>

                  <div className="space-y-2 mb-6">
                    {position.requirements.map((req, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-800 to-green-600 text-white py-2 rounded-lg font-medium hover:from-blue-900 hover:to-green-700 transition-all duration-300 flex items-center justify-center">
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl p-12 text-center shadow-sm">
                <Users className="mx-auto mb-4 h-10 w-10 text-blue-800" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No open positions right now</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive compensation and great perks to keep you happy, healthy, and productive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="h-8 w-8 text-blue-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-20 bg-gradient-to-r from-blue-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our team and help build innovative solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              View All Positions
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Send Your Resume
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}