"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const dacitosChatBot = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hello! 👋 Welcome to dacitos. I'm here to help you learn about our IT services, digital solutions, and how we can help transform your business. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [appointmentPreview, setAppointmentPreview] = useState(null); // holds validated data to confirm
  // handle form field changes
  const handleAppointmentChange = (field, value) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
    // clear preview if user edits after preview was generated
    if (appointmentPreview) setAppointmentPreview(null);
  };
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Drag state
  const containerRef = useRef(null);
  const panelRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    moved: false,
    startOnClosedButton: false,
  });
  const [pos, setPos] = useState({ x: null, y: null });
  const [isDragging, setIsDragging] = useState(false);

  // Approx panel dims (used for placement). updated after mount if measured.
  const [panelDims, setPanelDims] = useState({ w: 420, h: 640 });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showAppointmentForm]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Measure panel size after it renders (keeps placement accurate)
  useEffect(() => {
    const measure = () => {
      const el = panelRef.current;
      if (el) {
        setPanelDims({ w: el.offsetWidth || 420, h: el.offsetHeight || 640 });
      }
    };
    // measure on mount and on resize
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isOpen]);

  // Initialize position (load from localStorage or set bottom-right)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('dacitos_assistant_pos');
    const containerWidth = containerRef.current?.offsetWidth ?? 56;
    const containerHeight = containerRef.current?.offsetHeight ?? 56;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // ensure within bounds
        const x = Math.min(Math.max(12, parsed.x), window.innerWidth - containerWidth - 12);
        const y = Math.min(Math.max(12, parsed.y), window.innerHeight - containerHeight - 12);
        setPos({ x, y });
        return;
      } catch { }
    }
    // default bottom-right
    setPos({
      x: Math.max(12, window.innerWidth - containerWidth - 24),
      y: Math.max(12, window.innerHeight - containerHeight - 24),
    });
  }, []);

  // Update position on resize to keep it onscreen
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      setPos((p) => {
        if (p.x == null || p.y == null) return p;
        const x = Math.min(p.x, window.innerWidth - w - 12);
        const y = Math.min(p.y, window.innerHeight - h - 12);
        return { x: Math.max(12, x), y: Math.max(12, y) };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pointer handlers (support mouse + touch)
  const startDrag = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragRef.current = {
      ...dragRef.current,
      active: true,
      moved: false,
      startOnClosedButton: !isOpen, // mark whether drag started from the closed bubble
      startX: clientX,
      startY: clientY,
      origX: pos.x ?? (window.innerWidth - (containerRef.current?.offsetWidth ?? 56) - 24),
      origY: pos.y ?? (window.innerHeight - (containerRef.current?.offsetHeight ?? 56) - 24),
    };
    setIsDragging(true);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchmove', onDragMove, { passive: false });
    window.addEventListener('touchend', endDrag);
  };

  const onDragMove = (e) => {
    if (!dragRef.current.active) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = clientX - dragRef.current.startX;
    const dy = clientY - dragRef.current.startY;

    // If user moves more than threshold, mark as moved (so it won't open on release)
    if (!dragRef.current.moved && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      dragRef.current.moved = true;
    }

    const containerWidth = containerRef.current?.offsetWidth ?? 56;
    const containerHeight = containerRef.current?.offsetHeight ?? 56;
    let newX = dragRef.current.origX + dx;
    let newY = dragRef.current.origY + dy;
    // keep inside viewport with 12px padding
    newX = Math.min(Math.max(12, newX), window.innerWidth - containerWidth - 12);
    newY = Math.min(Math.max(12, newY), window.innerHeight - containerHeight - 12);
    setPos({ x: newX, y: newY });
  };

  const endDrag = () => {
    dragRef.current.active = false;
    setIsDragging(false);
    window.removeEventListener('mousemove', onDragMove);
    window.removeEventListener('mouseup', endDrag);
    window.removeEventListener('touchmove', onDragMove);
    window.removeEventListener('touchend', endDrag);

    // If the drag started on the closed bubble and the user did NOT move (a click/tap), open the chat
    if (dragRef.current.startOnClosedButton && !dragRef.current.moved) {
      setIsOpen(true);
    }

    // persist position
    if (pos.x != null && pos.y != null) {
      localStorage.setItem('dacitos_assistant_pos', JSON.stringify(pos));
    }
  };

  // compute panel placement (opens away from nearest edges)
  const computePanelStyle = () => {
    if (typeof window === 'undefined') return { left: undefined, top: undefined };
    const pw = panelDims.w;
    const ph = panelDims.h;
    const bubbleW = containerRef.current?.firstChild?.offsetWidth ?? 56;
    const bubbleH = containerRef.current?.firstChild?.offsetHeight ?? 56;
    const anchorX = pos.x ?? (window.innerWidth - bubbleW - 24);
    const anchorY = pos.y ?? (window.innerHeight - bubbleH - 24);

    // decide horizontal direction: open to left if anchor is on right half
    const openLeft = anchorX > window.innerWidth / 2;
    // decide vertical: open up if anchor is on bottom half
    const openUp = anchorY > window.innerHeight / 2;

    let left = anchorX + 12; // default open to right of bubble
    let top = anchorY + 12; // default open below bubble

    if (openLeft) {
      left = anchorX - pw - 12;
    }
    if (openUp) {
      top = anchorY - ph - 12;
    }

    // clamp within viewport
    left = Math.min(Math.max(12, left), window.innerWidth - pw - 12);
    top = Math.min(Math.max(12, top), window.innerHeight - ph - 12);

    return { position: 'fixed', left, top, zIndex: 9999 };
  };

  const companyKnowledge = `
You are a helpful AI assistant for dacitos, a leading IT solutions provider founded in 2024.

Company Overview
dacitos is a trusted IT solutions partner delivering innovative technology services that drive growth, efficiency, and digital transformation for businesses of all sizes. Founded in 2024, dacitos aims to make enterprise-grade technology accessible through custom software development, cloud solutions, cybersecurity, and strategic IT consulting. With a team of certified professionals bringing years of experience, the company emphasizes delivering measurable business value and scalable solutions using modern technologies such as React, Next.js, Node.js, AWS, Azure, and GCP.

Core Services
- Web and Application Development: Custom websites and web apps with a focus on user experience and scalability using React, Next.js, and Node.js.
- Mobile App Development: Native and cross-platform apps for iOS and Android designed for seamless user experience.
- Cloud Solutions and Infrastructure: Cloud migration, management, and cost optimization on AWS, Azure, and GCP platforms.
- Cybersecurity: Security audits, implementation, monitoring, and SOC 2 Type II compliant practices to protect digital assets.
- Custom Software Solutions: Tailored software matching unique business workflows and needs.
- Technology Consulting: Strategic guidance to leverage latest technological innovations and solve complex business challenges.

Company Values and Approach
- Committed to delivering exceptional business outcomes through technology.
- Embraces continuous learning and adapts to technological evolution.
- Employs iterative agile development with regular feedback and updates.
- Ensures quality, security, and optimal performance through rigorous testing.
- Provides round-the-clock support and monitoring to ensure business continuity.
- Delivers transparent, timely results with proven methodologies.

About dacitos
- Established with the vision of bridging the gap for reliable, innovative, and cost-effective IT solutions.
- Trusted by clients across industries and countries, with successful project delivery and strong client relationships.
- Leaders have decades of combined industry experience guiding the company's vision.
- Focus on fostering client success as shared success.
- Emphasis on culture of continuous skill upgrading and innovation.

Portfolio Highlights
- Deliver projects generating measurable results across multiple industries.
- Expertise in understanding business needs, creating project roadmaps, and detailed technical architectures.
- Agile development with continuous updates and client communication.
- Comprehensive testing, deployment, and post-launch support.
- Adaptability across verticals, showcasing specialized solutions for diverse business sectors.

Services Details
- End-to-end project delivery from concept through development, testing, deployment, and maintenance.
- Scalable cloud infrastructure with cost reduction and performance improvement focus.
- Data-driven SEO and digital marketing integration for growth enhancement.
- Security leadership with a proactive stance on latest cybersecurity threats.
- Support includes free consultations, quick quote responses, and enterprise-grade security.

Blog Themes and Insights
- Articles on digital transformation, cloud strategies, cybersecurity best practices.
- Tips for improving business performance through technology.
- Insights on data-driven marketing and SEO trends.
- Practical guides on managing cloud costs and cloud migration benefits.

Contact and Support
- Direct expert consultation available via phone (+91 85408 68767) and email (contact@dacitos.com).
- 24/7 online support and technical assistance provided.
- Offers free 30-minute consultation with follow-up detailed proposals within 24 hours.
- Social media presence for engagement and updates.

Frequently Asked Questions (FAQ)
- How to get started with dacitos services.
- Payment methods accepted by the company.
- Approach to data security and compliance.
- Support options for project management and post-launch assistance.

Suggested Chatbot Interaction Examples

Greetings and Introductions
"Welcome to dacitos, your trusted partner for innovative IT solutions. How can I assist you with your business technology needs today?"

Service Inquiry
"Are you interested in custom web development, cloud migration, cybersecurity, or mobile applications? I can provide detailed information or help you schedule a free consultation."

Portfolio and Project Process
"Our projects showcase measurable success across industries. We follow a proven agile methodology with continuous client feedback. Would you like to know more about specific project types or technologies we use?"

Consultation and Contact
"You can speak with our experts directly via phone or email. We also offer a free 30-minute consultation to discuss your project goals and provide a detailed proposal within 24 hours. Would you like to schedule an appointment now?"

Security and Compliance
"Data security is a priority at dacitos. We follow industry-leading practices and are SOC 2 Type II compliant. Our team can perform comprehensive security audits and continuous monitoring."

FAQ Support
"Here are some frequently asked questions: How do I start a project? What payment methods do you accept? How do you ensure data security? Feel free to ask if you need detailed answers."

Appointment Scheduling
If user asks about scheduling, consultation, meeting, appointment, or booking, respond: "I'd be happy to help you schedule a consultation with our team! Let me show you our appointment form."

Important: Note that all responses must be concise; each answer should be from this knowledge base only and no external information. and if someone asks for help outside of this knowledge base, politely decline and suggest they contact dacitos directly through their website at dacitos.com and make some humorous remarks to keep the tone light and engaging.
`;

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const text = input.trim();
    const lower = text.toLowerCase();

    // If we have a preview awaiting confirmation, allow quick confirm/edit via chat input
    if (appointmentPreview) {
      if (lower === 'confirm') {
        setInput('');
        await handleAppointmentConfirm();
        return;
      }
      if (lower === 'edit') {
        setInput('');
        handleAppointmentEdit();
        return;
      }
      // allow quick edits like "name: New Name" or "email: a@b.com"
      if (lower.startsWith('name:') || lower.startsWith('fullname:')) {
        const v = text.split(':').slice(1).join(':').trim();
        handleAppointmentChange('name', v);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Name updated. Type "confirm" when ready.' }]);
        setInput('');
        return;
      }
      if (lower.startsWith('email:')) {
        const v = text.split(':').slice(1).join(':').trim();
        handleAppointmentChange('email', v);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Email updated. Type "confirm" when ready.' }]);
        setInput('');
        return;
      }
      if (lower.startsWith('phone:')) {
        const v = text.split(':').slice(1).join(':').trim();
        handleAppointmentChange('phone', v);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Phone updated. Type "confirm" when ready.' }]);
        setInput('');
        return;
      }
      // If appointment preview exists but user typed something else, treat as normal chat input (or editing message)
    }

    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check if user is asking about appointment/scheduling
    const userInput = text.toLowerCase();
    const appointmentKeywords = ['appointment', 'schedule', 'book', 'consultation', 'meeting', 'call', 'talk to', 'speak with'];
    const isAppointmentQuery = appointmentKeywords.some(keyword => userInput.includes(keyword));

    if (isAppointmentQuery) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'd be happy to help you schedule a consultation with our team! 📅 Please fill out the appointment form below, and we'll get back to you within 24 hours.",
        },
      ]);
      setShowAppointmentForm(true);
      return;
    }

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY || "REMOVED_KEY"}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: [{ role: 'system', content: companyKnowledge }, ...messages.slice(-10), userMessage],
          temperature: 0.7,
          max_tokens: 500,
          top_p: 0.9,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at dacitos.com for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const quickQuestions = ['What services do you offer?', 'Tell me about web development', 'How can you help my business?', 'Schedule a consultation'];

  const handleQuickQuestion = (question) => {
    setInput(question);
    if (question === 'Schedule a consultation') {
      const fakeEvent = { target: { value: question } };
      setInput(question);
      setTimeout(() => handleSubmit(), 0);
    } else {
      inputRef.current?.focus();
    }
  };

  // validate form and show confirmation preview (do not POST yet)
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // basic validation
    const d = appointmentData;
    if (!d.name.trim()) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please provide your full name.' }]);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(d.email)) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please provide a valid email address.' }]);
      return;
    }
    if (!d.phone.trim()) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please provide a phone number.' }]);
      return;
    }
    if (!d.service.trim()) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please select a service.' }]);
      return;
    }
    if (!d.preferredDate || !d.preferredTime) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please choose preferred date and time.' }]);
      return;
    }

    // create a preview and ask for confirmation
    const preview = { ...d };
    setAppointmentPreview(preview);
    setMessages(prev => [
      ...prev,
      {
        role: 'assistant',
        content:
          `Please confirm your appointment details:\n\n**Name:** ${preview.name}\n**Email:** ${preview.email}\n**Phone:** ${preview.phone}\n**Company:** ${preview.company || '—'}\n**Service:** ${preview.service}\n**Preferred:** ${preview.preferredDate} at ${preview.preferredTime}\n**Message:** ${preview.message || '—'}\n\nType "confirm" to send or click the Confirm button below. Type "edit" to modify.`,
      },
    ]);
    // keep the form visible so user can edit if they choose
    setIsLoading(false);
    return;
  };

  // POST to API after confirmation
  const handleAppointmentConfirm = async () => {
    // ensure we have latest data (use appointmentData if preview missing)
    const preview = appointmentPreview || { ...appointmentData };

    // map frontend keys to backend expected keys
    const payload = {
      fullname: preview.name || preview.fullname || '',
      email: preview.email || '',
      phone: preview.phone || '',
      service: preview.service || '',
      date: preview.preferredDate || preview.date || '',
      time: preview.preferredTime || preview.time || '',
      company: preview.company || '',
      message: preview.message || '',
    };

    // basic safety check before sending
    if (!payload.fullname || !payload.email || !payload.phone || !payload.service || !payload.date || !payload.time) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Missing required fields. Please complete the form.' }]);
      return;
    }

    setIsLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch('https://dacitos-backend.vercel.app/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const text = await res.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = null; }

      if (!res.ok) {
        const errMsg = data?.error || data?.message || text || `${res.status} ${res.statusText}`;
        console.error('Appointment POST failed:', errMsg);
        setMessages(prev => [...prev, { role: 'assistant', content: `❌ Failed to send appointment: ${errMsg}` }]);
        setIsLoading(false);
        return;
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `✅ Appointment request sent. We'll contact you to confirm. Thank you, ${payload.fullname}!`,
        },
      ]);

      // reset form & preview
      setShowAppointmentForm(false);
      setAppointmentData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      setAppointmentPreview(null);
    } catch (err) {
      if (err.name === 'AbortError') {
        setMessages(prev => [...prev, { role: 'assistant', content: '❌ Request timed out. Please try again.' }]);
      } else {
        console.error('Appointment POST error:', err);
        setMessages(prev => [...prev, { role: 'assistant', content: `❌ Network error: ${err.message || 'Failed to connect'}` }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppointmentEdit = () => {
    // allow editing: clear preview but keep form open
    setAppointmentPreview(null);
    setMessages(prev => [...prev, { role: 'assistant', content: 'You can edit the form now. Make changes and submit again.' }]);
  };

  // Format assistant messages with styling
  const formatAssistantMessage = (content) => {
    let formatted = content;

    // Convert markdown tables to HTML tables
    formatted = formatted.replace(/\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g, (match, header, rows) => {
      const headerCells = header.split('|').filter(cell => cell.trim()).map(cell =>
        `<th class="border border-gray-300 px-3 py-2 bg-blue-50 text-left text-xs font-semibold text-gray-700">${cell.trim()}</th>`
      ).join('');

      const bodyRows = rows.trim().split('\n').map(row => {
        const cells = row.split('|').filter(cell => cell.trim()).map(cell =>
          `<td class="border border-gray-300 px-3 py-2 text-xs">${cell.trim()}</td>`
        ).join('');
        return `<tr>${cells}</tr>`;
      }).join('');

      return `<div class="overflow-x-auto my-3"><table class="min-w-full border-collapse border border-gray-300 text-sm"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
    });

    // Convert bullet points (- or •) to styled lists
    formatted = formatted.replace(/^[\s]*[-•]\s*\*\*(.+?)\*\*\s*[-–—]\s*(.+)$/gm,
      '<li class="ml-4 mb-2"><span class="font-semibold text-blue-700">$1</span> – $2</li>'
    );

    formatted = formatted.replace(/^[\s]*[-•]\s*(.+)$/gm, '<li class="ml-4 mb-1.5">$1</li>');

    // Wrap consecutive list items in ul tags
    formatted = formatted.replace(/(<li class="ml-4[^>]*>.*?<\/li>\s*)+/gs, '<ul class="space-y-1 my-2">$&</ul>');

    // Bold text (**text** or __text__)
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
    formatted = formatted.replace(/__(.+?)__/g, '<strong class="font-semibold text-gray-900">$1</strong>');

    // Italic text (*text* or _text_)
    formatted = formatted.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
    formatted = formatted.replace(/_(.+?)_/g, '<em class="italic">$1</em>');

    // Code blocks (```code```)
    formatted = formatted.replace(/```(.+?)```/gs, '<code class="block bg-gray-100 p-2 rounded text-xs my-2 overflow-x-auto">$1</code>');

    // Inline code (`code`)
    formatted = formatted.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">$1</code>');

    // Headers (## Header)
    formatted = formatted.replace(/^##\s+(.+)$/gm, '<h3 class="text-base font-bold text-gray-900 mt-3 mb-2">$1</h3>');
    formatted = formatted.replace(/^#\s+(.+)$/gm, '<h2 class="text-lg font-bold text-gray-900 mt-3 mb-2">$1</h2>');

    // Line breaks
    formatted = formatted.replace(/\n\n/g, '<br/><br/>');
    formatted = formatted.replace(/\n/g, '<br/>');

    return formatted;
  };

  // wrapper style: fixed positioned using pos (bubble anchor)
  const wrapperStyle = {
    position: 'fixed',
    left: pos.x ?? undefined,
    top: pos.y ?? undefined,
    right: pos.x == null ? 24 : undefined,
    bottom: pos.y == null ? 24 : undefined,
    zIndex: 9999,
  };

  // panel style computed when open
  const panelStyle = isOpen ? computePanelStyle() : null;

  return (
    <div ref={containerRef} style={wrapperStyle} className={className}>
      {/* closed bubble (draggable, open on click/tap if not dragged) */}
      {!isOpen && (
        <button
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-3.5 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 cursor-grab"
          aria-label="Open chat"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline-block text-sm font-medium tracking-tight">Chat with us</span>
        </button>
      )}

      {/* open panel (rendered fixed at computed panelStyle so it expands away from edges) */}
      {isOpen && (
        <div
          ref={panelRef}
          style={panelStyle}
          className="bg-white rounded-2xl shadow-2xl w-[360px] sm:w-[420px] md:w-[480px] h-[640px] flex flex-col overflow-hidden border border-gray-100"
        >
          {/* Header (drag handle) */}
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">dacitos AI</h3>
                <p className="text-xs opacity-90">Concise answers · Quick help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (pos.x != null && pos.y != null) localStorage.setItem('dacitos_assistant_pos', JSON.stringify(pos));
                }}
                className="hover:bg-white/10 rounded-full p-2 transition-colors"
                aria-label="Minimize chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-gray-50 scrollbar-thin scrollbar-thumb-blue-200">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 items-end ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${message.role === 'user' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gray-100'
                    }`}
                >
                  {message.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
                </div>

                <div className={`flex-1 ${message.role === 'user' ? 'flex justify-end' : ''}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[85%] break-words ${message.role === 'user' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-lg' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                      }`}
                  >
                    {message.role === 'assistant' ? (
                      <div className="text-sm leading-snug" dangerouslySetInnerHTML={{ __html: formatAssistantMessage(message.content) }} />
                    ) : (
                      <p className="text-sm leading-snug whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <Bot size={16} className="text-gray-600" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Appointment Form */}
            {showAppointmentForm && (
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100">
                <form onSubmit={handleAppointmentSubmit} className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Schedule Your Consultation</h4>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={appointmentData.name}
                      onChange={(e) => handleAppointmentChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={appointmentData.email}
                      onChange={(e) => handleAppointmentChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={appointmentData.phone}
                      onChange={(e) => handleAppointmentChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      value={appointmentData.company}
                      onChange={(e) => handleAppointmentChange('company', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Service Interested In *</label>
                    <select
                      required
                      value={appointmentData.service}
                      onChange={(e) => handleAppointmentChange('service', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Technology Consulting">Technology Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={appointmentData.preferredDate}
                        onChange={(e) => handleAppointmentChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Time *</label>
                      <select
                        required
                        value={appointmentData.preferredTime}
                        onChange={(e) => handleAppointmentChange('preferredTime', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Additional Message</label>
                    <textarea
                      value={appointmentData.message}
                      onChange={(e) => handleAppointmentChange('message', e.target.value)}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    {!appointmentPreview ? (
                      <>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          {isLoading ? 'Checking...' : 'Review & Confirm'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowAppointmentForm(false);
                            setAppointmentData({
                              name: '',
                              email: '',
                              phone: '',
                              company: '',
                              service: '',
                              preferredDate: '',
                              preferredTime: '',
                              message: ''
                            });
                            setAppointmentPreview(null);
                          }}
                          className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={handleAppointmentConfirm}
                          disabled={isLoading}
                          className="flex-1 bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          {isLoading ? 'Sending...' : 'Confirm & Send'}
                        </button>
                        <button
                          type="button"
                          onClick={handleAppointmentEdit}
                          className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-white border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm bg-white"
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-3 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default dacitosChatBot;