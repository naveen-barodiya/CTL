import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, Target, Clock, Heart, TrendingUp, Lightbulb,
    Users, BarChart3, Handshake, Star, Award, Zap, Shield,
    Rocket, X
} from 'lucide-react';

const WhyUs = () => {
    const [expandedValue, setExpandedValue] = useState(null);
    const [counters, setCounters] = useState({ retention: 0, projects: 0, support: 0, quality: 0 });
    const sectionRef = React.useRef(null);

    // Animate counters on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const steps = 60;
                    const interval = duration / steps;

                    let step = 0;
                    const timer = setInterval(() => {
                        step++;
                        const progress = step / steps;
                        setCounters({
                            retention: Math.min(95, Math.floor(95 * progress)),
                            projects: Math.min(50, Math.floor(50 * progress)),
                            support: 24,
                            quality: Math.min(100, Math.floor(100 * progress))
                        });
                        if (step >= steps) clearInterval(timer);
                    }, interval);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const values = [
        {
            id: 0,
            icon: <Target size={24} />,
            title: "Strategy First",
            desc: "We build authentic systems that reflect your unique personality and business goals.",
            detail: "No cookie-cutter templates. Every solution is crafted from scratch based on deep discovery sessions with your team.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 1,
            icon: <Clock size={24} />,
            title: "Time Freedom",
            desc: "We handle the technical complexity so you can focus on running your business.",
            detail: "From SEO to high-converting emails, our full-service team manages the overwhelm. You get regular updates, zero micromanagement.",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 2,
            icon: <Heart size={24} />,
            title: "Human Connection",
            desc: "We move beyond vanity metrics to create 'heart and soul' brand connections.",
            detail: "Through storytelling and consistency, we help you become the most trusted authority in your niche—not just another vendor.",
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 3,
            icon: <TrendingUp size={24} />,
            title: "Sustainable Growth",
            desc: "We build systems designed to compound over time, not short-term spikes.",
            detail: "Long-term growth is our priority. Every feature, every optimization, every line of code serves your future success.",
            color: "from-purple-500 to-violet-500"
        },
        {
            id: 4,
            icon: <Lightbulb size={24} />,
            title: "Owner Mindset",
            desc: "Led by Prati & Divakar, our global team thinks like owners, not vendors.",
            detail: "We're invested in your long-term success. Every project is treated as if it were our own business.",
            color: "from-orange-500 to-amber-500"
        },
        {
            id: 5,
            icon: <Users size={24} />,
            title: "Built for You",
            desc: "We understand real-world constraints: time, budget, and bandwidth.",
            detail: "Our solutions are practical, scalable, and tailored. No over-engineering, no unnecessary complexity.",
            color: "from-indigo-500 to-blue-500"
        },
        {
            id: 6,
            icon: <BarChart3 size={24} />,
            title: "Transparent & Data-Driven",
            desc: "Clear reporting, measurable outcomes, and honest communication.",
            detail: "You always know what's working and why. No hidden agendas, no vanity metrics—just real business impact.",
            color: "from-red-500 to-pink-500"
        },
        {
            id: 7,
            icon: <Handshake size={24} />,
            title: "True Partnership",
            desc: "We operate as an extension of your team, aligned with your vision.",
            detail: "Your goals become our goals. Your voice shapes our work. Your success is our success.",
            color: "from-slate-500 to-gray-500"
        },
    ];

    const stats = [
        { key: 'retention', number: counters.retention, suffix: "%", label: "Client Retention", icon: <Heart size={18} /> },
        { key: 'projects', number: counters.projects, suffix: "+", label: "Projects Delivered", icon: <Rocket size={18} /> },
        { key: 'support', number: counters.support, suffix: "/7", label: "Support Available", icon: <Shield size={18} /> },
        { key: 'quality', number: counters.quality, suffix: "%", label: "Quality Commitment", icon: <Award size={18} /> },
    ];

    const comparisons = [
        { theirs: "Cookie-cutter templates", ours: "Custom-built solutions" },
        { theirs: "Focus on vanity metrics", ours: "Focus on real business growth" },
        { theirs: "Limited post-launch support", ours: "24/7 ongoing partnership" },
        { theirs: "Hidden costs & fees", ours: "Transparent, fixed pricing" },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
        hover: { y: -4, transition: { duration: 0.2 } }
    };

    const toggleExpand = (id) => {
        setExpandedValue(expandedValue === id ? null : id);
    };

    return (
        <section ref={sectionRef} className="py-12 md:py-20 bg-brand-dark relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-brand-primary/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-brand-accent/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-semibold mb-4 border border-brand-primary/20">
                        Why Choose Us
                    </span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                        Why Clients <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Trust Us</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto px-2">
                        We operate as an extension of your team, aligned with your goals, your voice, and your long-term vision.
                    </p>
                </motion.div>

                {/* Stats Section - Animated Counters */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-14">
                    {stats.map((stat) => (
                        <motion.div key={stat.key} variants={cardVariants} whileHover={{ y: -3, scale: 1.02 }} className="glass-card p-4 md:p-6 rounded-xl border border-gray-800 text-center group">
                            <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                {stat.icon}
                            </div>
                            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-1">
                                {stat.number}{stat.suffix}
                            </div>
                            <p className="text-gray-400 text-[10px] md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ✅ UNIFIED CORE VALUES SECTION - No Duplicate */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 md:mb-14">
                    <div className="text-center mb-6 md:mb-8">
                        <h3 className="text-base md:text-xl font-bold text-white mb-2">Our Core Values</h3>
                        <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">The principles that guide everything we build</p>
                    </div>

                    {/* Responsive Grid: 1col mobile → 2col tablet → 4col desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.id}
                                variants={cardVariants}
                                whileHover="hover"
                                onClick={() => toggleExpand(value.id)}
                                className={`glass-card p-4 md:p-5 rounded-xl border border-gray-800 cursor-pointer transition-all group relative overflow-hidden ${expandedValue === value.id ? 'ring-2 ring-brand-primary/50 bg-brand-primary/5' : 'hover:border-gray-700'
                                    }`}
                            >
                                {/* Gradient Glow on Hover/Expand */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${expandedValue === value.id ? 'opacity-15' : ''}`} />

                                {/* Icon */}
                                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-3 shadow-md group-hover:shadow-lg transition-shadow`}>
                                    {value.icon}
                                </div>

                                {/* Title & Desc */}
                                <h4 className="text-sm md:text-base font-bold text-white mb-1.5 group-hover:text-brand-primary transition-colors">
                                    {value.title}
                                </h4>
                                <p className={`text-gray-400 text-xs md:text-sm transition-all duration-300 ${expandedValue === value.id ? 'line-clamp-none' : 'line-clamp-2'}`}>
                                    {expandedValue === value.id ? value.detail : value.desc}
                                </p>

                                {/* Expand/Collapse Indicator */}
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800/50">
                                    <span className="text-[10px] text-brand-accent font-medium">
                                        {expandedValue === value.id ? 'Show less' : 'Learn more'}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: expandedValue === value.id ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center"
                                    >
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-brand-accent">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Close Button for Expanded State */}
                                <AnimatePresence>
                                    {expandedValue === value.id && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={(e) => { e.stopPropagation(); setExpandedValue(null); }}
                                            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
                                            aria-label="Close"
                                        >
                                            <X size={12} />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Comparison Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-5 md:p-8 rounded-2xl border border-gray-800 mb-10 md:mb-14">
                    <h3 className="text-base md:text-xl font-bold text-white text-center mb-4 md:mb-6">The Difference</h3>

                    {/* Responsive: Stacked mobile, Grid desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Traditional */}
                        <div className="p-4 md:p-6 rounded-xl border border-gray-800 bg-gray-900/30">
                            <h4 className="text-sm md:text-base font-bold text-gray-400 mb-3 md:mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-500"></span>
                                Traditional Approach
                            </h4>
                            <ul className="space-y-2 md:space-y-3">
                                {comparisons.map((comp, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-500">
                                        <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-700 flex items-center justify-center text-[8px] md:text-xs flex-shrink-0 mt-0.5">✕</span>
                                        {comp.theirs}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Custom Tech Labs */}
                        <div className="p-4 md:p-6 rounded-xl border border-brand-primary/30 bg-brand-primary/5">
                            <h4 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-primary"></span>
                                Custom Tech Labs
                            </h4>
                            <ul className="space-y-2 md:space-y-3">
                                {comparisons.map((comp, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                                        <CheckCircle2 size={12} className="text-brand-accent flex-shrink-0 mt-0.5" />
                                        {comp.ours}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Philosophy Quote */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
                    <div className="glass-card p-5 md:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
                        <Heart size={24} className="mx-auto mb-3 md:mb-4 text-brand-accent" />
                        <blockquote className="text-gray-300 text-sm md:text-base italic mb-3 md:mb-4 px-2">
                            "Technology should never feel like a burden. It should empower, simplify, and strengthen human connection."
                        </blockquote>
                        <p className="text-brand-primary font-semibold text-xs md:text-sm">— That's what we build at Custom Tech Labs</p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <p className="text-gray-400 text-xs md:text-sm mb-4">Ready to work with a team that truly cares about your success?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-xs md:text-sm font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105">
                        Start Your Journey With Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;