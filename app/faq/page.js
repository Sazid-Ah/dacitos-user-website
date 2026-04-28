'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, User } from 'lucide-react';

const categories = [
  'All Categories',
  'Getting Started',
  'Account & Billing',
  'Security',
  'Integrations',
  'Troubleshooting',
];

const fallbackFaqs = [
  {
    _id: '1',
    question: 'How do I get started with dacitos services?',
    answer:
      'To get started, schedule a consultation via our contact page or send an email. We will review your requirements, propose a plan, and start with a discovery phase to scope the work.',
    category: 'Getting Started',
    tags: ['onboarding', 'start'],
    author: 'Support Team',
    date: new Date().toISOString(),
  },
  {
    _id: '2',
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards, bank transfers, and invoiced payments for enterprise customers. For payment details, please contact contact@dacitos.com.',
    category: 'Account & Billing',
    tags: ['billing', 'payment'],
    author: 'Billing',
    date: new Date().toISOString(),
  },
  {
    _id: '3',
    question: 'How does dacitos approach data security?',
    answer:
      'Security is a core part of our delivery. We follow best practices including secure development life cycle, encryption at rest and transit, access controls, and periodic audits. We can sign an NDA and provide SOC/ISO details on request.',
    category: 'Security',
    tags: ['security', 'compliance'],
    author: 'Security',
    date: new Date().toISOString(),
  },
  {
    _id: '4',
    question: 'Do you provide integrations with third-party systems?',
    answer:
      'Yes — we build integrations with CRMs, analytics platforms, payment gateways, and more. Tell us which systems you need connected and we will propose options (API, webhook, ETL).',
    category: 'Integrations',
    tags: ['api', 'webhooks'],
    author: 'Integrations Team',
    date: new Date().toISOString(),
  },
  {
    _id: '5',
    question: 'I found an issue — how can I report bugs or get support?',
    answer:
      'Please open a support ticket through our contact form with as much detail as possible (screenshots, reproduction steps). For urgent incidents, include "Urgent" in the subject and we will respond faster.',
    category: 'Troubleshooting',
    tags: ['support', 'bugs'],
    author: 'Support Team',
    date: new Date().toISOString(),
  },
];

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 10;

  // Try to fetch FAQs from backend; fall back to local data
  useEffect(() => {
    let mounted = true;

    async function fetchFaqs() {
      try {
        const res = await fetch('https://dacitos-backend.vercel.app/api/faq', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('No API');

        const data = await res.json();
        if (mounted) setFaqs(Array.isArray(data.faq) ? data.faq : fallbackFaqs);
      } catch (err) {
        // If API not available, use fallback local FAQs
        if (mounted) setFaqs(fallbackFaqs);
      }
    }

    fetchFaqs();

    return () => (mounted = false);
  }, []);

  // Filter faqs based on search and category
  useEffect(() => {
    let items = faqs;

    if (selectedCategory !== 'All Categories') {
      items = items.filter((f) => f.category === selectedCategory);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q) ||
          f.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    setFilteredFaqs(items);
    // Reset to first page when filters/search change
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, faqs]);

  const toggleExpand = (faq) => {
    setExpandedFaq((prev) => (prev && prev._id === faq._id ? null : faq));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Frequently Asked <span className="text-blue-800">Questions</span></h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about our services, billing, security, and integrations.
            </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions, keywords, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Filters & Count */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-700 font-medium mr-4">Filter by:</span>

              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  {selectedCategory}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>

                {showFilters && (
                  <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedCategory === cat ? 'bg-blue-50 text-blue-800' : 'text-gray-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="text-gray-600">Showing {filteredFaqs.length} of {faqs.length} FAQs</div>
          </div>

          {/* FAQs list */}
          {filteredFaqs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {(() => {
                const indexOfLast = currentPage * faqsPerPage;
                const indexOfFirst = indexOfLast - faqsPerPage;
                const currentFaqs = filteredFaqs.slice(indexOfFirst, indexOfLast);
                return currentFaqs.map((faq) => (
                <article
                  key={faq._id}
                  className="group bg-white rounded-xl shadow-md p-6 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => toggleExpand(faq)}
                  aria-expanded={expandedFaq && expandedFaq._id === faq._id}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors line-clamp-2">{faq.question}</h3>
                      {/*<div className="text-gray-600 mb-4 line-clamp-3">
                        {faq.answer}
                      </div>*/}
                      {/* Author shown under question; category/tags are hidden (used for filtering only) */}
                      {/*<div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{faq.author}</span>
                      </div>*/}
                    </div>

                    {/* Right-most chevron button for expand/collapse */}
                    <div className="ml-4 flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(faq);
                        }}
                        aria-expanded={expandedFaq && expandedFaq._id === faq._id}
                        aria-label={expandedFaq && expandedFaq._id === faq._id ? 'Collapse answer' : 'Expand answer'}
                        className="p-2 rounded-md bg-white/0 hover:bg-gray-50 text-gray-600"
                      >
                        {expandedFaq && expandedFaq._id === faq._id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expandedFaq && expandedFaq._id === faq._id && (
                    <div className="mt-4 prose max-w-none text-gray-900">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
                ));
              })()}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">Try a different search term or category</p>
            </div>
          )}
          {/* Pagination */}
          {Math.ceil(filteredFaqs.length / faqsPerPage) > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(filteredFaqs.length / faqsPerPage) }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === i + 1
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
