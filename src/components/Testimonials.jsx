import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Quote, Star, X, ArrowRight, Building2,
    CheckCircle2, Heart, TrendingUp, Users
} from 'lucide-react';

const Testimonials = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedTestimonial(null), 200);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const reviews = [
        {
            id: 1,
            name: "CEO, SteerMAR",
            company: "SteerMAR",
            industry: "Healthcare Tech",
            text: "Working with Laxmaya has been a game-changer for SteerMAR. Their AI implementation transformed our eMAR software into a truly intelligent, all-in-one care management solution.",
            longText: "The team at Custom Tech Labs understood our vision from day one. They didn't just build what we asked for—they identified gaps we didn't even know existed. The AI-powered features they implemented have reduced manual work by 60% and improved care coordination significantly. Their post-launch support has been exceptional.",
            rating: 5,
            project: "AI-Powered eMAR Platform",
            results: ["60% reduction in manual work", "Improved care coordination", "Real-time analytics"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            name: "Wil Jacques, Founder & CEO",
            company: "Emanus",
            industry: "Business Services",
            text: "Partnering with Laxmaya has been instrumental in enhancing Emanus' digital capabilities. Their expertise allowed us to streamline our systems, improve efficiency, and deliver a seamless experience to our clients.",
            longText: "Custom Tech Labs brought a level of strategic thinking we hadn't experienced with other vendors. They took time to understand our business model, our clients' needs, and our long-term goals. The solution they delivered has become a core competitive advantage for us.",
            rating: 5,
            project: "Digital Transformation",
            results: ["Streamlined operations", "Improved client experience", "Scalable architecture"],
            color: "from-purple-500 to-violet-500"
        },
        {
            id: 3,
            name: "Amy Gillespie Dougherty, CEO",
            company: "My Eye Origin",
            industry: "Health & Wellness",
            text: "Thanks to CustomTechLabs, My Eye Origin delivers a safe, secure, and enriching experience. Their expertise helped us create a seamless platform where users can explore their ancestry and connect with their family legacy.",
            longText: "Security and user privacy were our top priorities. The team at Custom Tech Labs implemented enterprise-grade security measures while maintaining a beautiful, intuitive user experience. Our users love the platform, and we've seen 40% month-over-month growth since launch.",
            rating: 5,
            project: "AI-Powered Mobile App",
            results: ["40% MoM growth", "Enterprise security", "5-star app ratings"],
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 4,
            name: "Director of Operations",
            company: "Aluminate Life",
            industry: "E-Commerce",
            text: "The AI-powered ecommerce platform Custom Tech Labs built for us has exceeded all expectations. Our conversion rates increased by 35% within the first quarter.",
            longText: "From the initial discovery phase to final deployment, the process was smooth and transparent. They delivered a premium, elegant digital ecosystem that perfectly aligns with our luxury brand vision.",
            rating: 5,
            project: "AI E-Commerce Platform",
            results: ["35% conversion increase", "Premium UX", "Scalable infrastructure"],
            color: "from-orange-500 to-amber-500"
        },
        {
            id: 5,
            name: "CTO",
            company: "ANI News",
            industry: "Media & Publishing",
            text: "High-performance news portal that handles millions of views daily. The platform is optimized for speed, mobile responsiveness, and high traffic handling.",
            longText: "Custom Tech Labs built a scalable, enterprise-ready solution for modern digital news distribution. Their expertise in handling high-traffic scenarios and video streaming was impressive.",
            rating: 5,
            project: "News & Media Portal",
            results: ["Millions of daily views", "99.9% uptime", "Fast load times"],
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 6,
            name: "Founder",
            company: "RedPay",
            industry: "Fintech",
            text: "Modern fintech platform with clean UI/UX and robust API infrastructure. Custom Tech Labs simplified onboarding for our B2B customers significantly.",
            longText: "Security and compliance were critical for us. The team delivered a platform that meets all regulatory requirements while providing an exceptional user experience.",
            rating: 5,
            project: "Fintech Payment Platform",
            results: ["Secure & compliant", "Easy onboarding", "Multi-API support"],
            color: "from-red-500 to-pink-500"
        },
    ];

    const stats = [
        { number: "95%", label: "Client Satisfaction", icon: <Heart size={18} /> },
        { number: "50+", label: "Projects Delivered", icon: <TrendingUp size={18} /> },
        { number: "100%", label: "On-Time Delivery", icon: <CheckCircle2 size={18} /> },
        { number: "24/7", label: "Support Available", icon: <Users size={18} /> },
    ];

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 400 } },
        exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-semibold mb-4 border border-brand-primary/20">
                        Testimonials
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Client <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Stories</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
                        Don't just take our word for it. Here's what our clients say about working with Custom Tech Labs.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3, scale: 1.03 }}
                            className="glass-card p-4 md:p-6 rounded-xl border border-gray-800 text-center group"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                {stat.icon}
                            </div>
                            <h4 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onClick={() => openModal(review)}
                            className="glass-card p-5 md:p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all cursor-pointer group relative overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${review.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            {/* Quote Icon */}
                            <Quote className="absolute top-4 md:top-6 right-4 md:right-6 text-gray-800 w-8 h-8 md:w-10 md:h-10" />

                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 mb-3 md:mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-brand-accent text-brand-accent" />
                                ))}
                            </div>

                            {/* Testimonial Text - Truncated */}
                            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 italic line-clamp-4">
                                "{review.text}"
                            </p>

                            {/* Industry Tag */}
                            <span className={`inline-block px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs bg-gradient-to-r ${review.color} text-white font-medium mb-3 md:mb-4`}>
                                {review.industry}
                            </span>

                            {/* Client Info */}
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0`}>
                                    {review.company[0]}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-white text-xs md:text-sm truncate">{review.name}</p>
                                    <p className="text-gray-500 text-[10px] md:text-xs truncate">{review.company}</p>
                                </div>
                            </div>

                            {/* Read More Indicator */}
                            <div className="flex items-center gap-1 mt-4 text-xs text-brand-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Read full story <ArrowRight size={10} />
                            </div>

                            {/* Bottom Accent Line */}
                            <div className={`h-0.5 md:h-1 w-0 group-hover:w-full bg-gradient-to-r ${review.color} transition-all duration-500 mt-4 rounded-full`} />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
                        <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
                            Ready to become our next success story?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-sm md:text-base font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* ================= TESTIMONIAL DETAIL MODAL ================= */}
            <AnimatePresence>
                {isModalOpen && selectedTestimonial && (
                    <>
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={closeModal}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                        />
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="fixed z-50 inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[95vw] md:max-w-2xl"
                        >
                            {/* Mobile Modal */}
                            <div className="md:hidden glass-card rounded-t-2xl border border-gray-700 shadow-2xl flex flex-col max-h-[85vh]">
                                {/* Drag Handle */}
                                <div className="flex justify-center py-3 border-b border-gray-700">
                                    <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
                                </div>
                                {/* Header */}
                                <div className={`sticky top-0 z-10 px-4 py-3 border-b border-gray-700 bg-gradient-to-r ${selectedTestimonial.color} bg-opacity-10 flex items-center justify-between`}>
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${selectedTestimonial.color} flex items-center justify-center text-white flex-shrink-0`}>
                                            {selectedTestimonial.company[0]}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-white truncate">{selectedTestimonial.company}</p>
                                            <div className="flex items-center gap-1">
                                                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={8} className="fill-brand-accent text-brand-accent" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={closeModal} className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 flex-shrink-0">
                                        <X size={14} />
                                    </button>
                                </div>
                                {/* Content */}
                                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                                    {/* Full Quote */}
                                    <div className="glass-card p-4 rounded-lg border border-gray-700">
                                        <Quote size={20} className="text-brand-accent mb-2" />
                                        <p className="text-gray-300 text-sm leading-relaxed italic">"{selectedTestimonial.longText}"</p>
                                    </div>
                                    {/* Project Info */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-2">Project</h4>
                                        <p className="text-white text-sm">{selectedTestimonial.project}</p>
                                    </div>
                                    {/* Results */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-2">Results</h4>
                                        <div className="space-y-1.5">
                                            {selectedTestimonial.results.map((result, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                                    <CheckCircle2 size={10} className="text-brand-accent flex-shrink-0" />
                                                    {result}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Client Info */}
                                    <div className="glass-card p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-2">Client</h4>
                                        <p className="text-white text-sm font-bold">{selectedTestimonial.name}</p>
                                        <p className="text-gray-400 text-xs">{selectedTestimonial.industry}</p>
                                    </div>
                                </div>
                                {/* Close Button */}
                                <div className="sticky bottom-0 z-10 p-4 border-t border-gray-700 bg-gray-900/95">
                                    <button onClick={closeModal} className="w-full py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-lg text-sm font-semibold">
                                        Close
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Modal */}
                            <div className="hidden md:flex glass-card rounded-2xl border border-gray-700 shadow-2xl overflow-hidden max-h-[85vh]">
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    {/* Header */}
                                    <div className={`p-6 border-b border-gray-700 bg-gradient-to-r ${selectedTestimonial.color} bg-opacity-10 flex items-center justify-between`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedTestimonial.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                                                {selectedTestimonial.company[0]}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{selectedTestimonial.company}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                                        <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                                                    ))}
                                                    <span className="text-xs text-gray-400">{selectedTestimonial.industry}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={closeModal} className="w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                                            <X size={20} />
                                        </button>
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                        {/* Full Quote */}
                                        <div className="glass-card p-6 rounded-xl border border-gray-700">
                                            <Quote size={28} className="text-brand-accent mb-3" />
                                            <p className="text-gray-300 text-base leading-relaxed italic">"{selectedTestimonial.longText}"</p>
                                        </div>
                                        {/* Project & Results Grid */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="glass-card p-5 rounded-xl border border-gray-700">
                                                <h4 className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">Project</h4>
                                                <p className="text-white text-sm font-bold">{selectedTestimonial.project}</p>
                                            </div>
                                            <div className="glass-card p-5 rounded-xl border border-gray-700">
                                                <h4 className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">Results</h4>
                                                <div className="space-y-2">
                                                    {selectedTestimonial.results.map((result, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                                            <CheckCircle2 size={12} className="text-brand-accent flex-shrink-0" />
                                                            {result}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Client Info */}
                                        <div className="glass-card p-5 rounded-xl border border-gray-700">
                                            <h4 className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3">Client Information</h4>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedTestimonial.color} flex items-center justify-center text-white font-bold`}>
                                                    {selectedTestimonial.company[0]}
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold">{selectedTestimonial.name}</p>
                                                    <p className="text-gray-400 text-xs">{selectedTestimonial.industry}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Footer */}
                                    <div className="p-4 border-t border-gray-700 bg-gray-900/30">
                                        <button onClick={closeModal} className="w-full py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;