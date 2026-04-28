'use client';

import { useEffect, useState } from 'react';
import { 
  Star,
  Quote,
  Users,
  Building,
  Award,
  ThumbsUp,
  MessageCircle,
  Globe
} from 'lucide-react';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All',
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Enterprise Software',
    'Digital Transformation'
  ];

  useEffect(() => {
    async function fetchTestimonials() {
      setLoading(true);
      try {
        const res = await fetch('https://dacitos-backend.vercel.app/api/testimonials');
        const data = await res.json();
        setTestimonials(Array.isArray(data.testimonials) ? data.testimonials : []);
      } catch (error) {
        setTestimonials([]);
      }
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  const filteredTestimonials = activeFilter === 'All'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.category === activeFilter);

  const stats = {
    averageRating: testimonials.length 
      ? Number(testimonials.reduce((acc, t) => acc + Number(t.rating), 0) / testimonials.length).toFixed(1)
      : 0,
    totalReviews: testimonials.length,
    satisfactionRate: testimonials.length 
      ? Math.round((testimonials.filter(t => t.rating >= 4).length / testimonials.length) * 100)
      : 0
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-blue-800">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover what our clients say about their experience working with us and how 
              we&apos;ve helped transform their businesses through innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-700 font-medium">{stats.averageRating}/5 Average Rating</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <MessageCircle className="h-5 w-5 text-blue-800 mr-2" />
                <span className="text-gray-700 font-medium">{stats.totalReviews}+ Reviews</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">{stats.satisfactionRate}% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category, index) => (
              <button
                key={`filter-${category}-${index}`}
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500 text-xl py-20">Loading testimonials...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <div 
                  key={`testimonial-${testimonial.id || index}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="h-8 w-8 text-blue-800" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-blue-800">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-200 mb-2" />
                    <p className="text-gray-700 italic">{testimonial.message}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`${testimonial.id}-star-${i}`}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has resulted in exceptional client satisfaction 
              and lasting partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Award className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">{stats.satisfactionRate}%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.totalReviews}</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Globe className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {new Set(testimonials.map(t => t.category)).size}
              </div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <ThumbsUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.averageRating}/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help transform your business with our innovative
            solutions and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}