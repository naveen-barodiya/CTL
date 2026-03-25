import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Target, Users, Zap, Lightbulb, Heart, Globe,
    CheckCircle2, X, ArrowRight, Award, Clock, TrendingUp
} from 'lucide-react';

const About = () => {
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

    const openStoryModal = () => {
        setIsStoryModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeStoryModal = () => {
        setIsStoryModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') closeStoryModal(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const features = [
        {
            icon: <Target size={28} />,
            title: "Make technology easy to understand",
            desc: "We break down complex tech into simple, actionable solutions.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Users size={28} />,
            title: "Make products easy to use",
            desc: "User-centered design ensures intuitive, frictionless experiences.",
            color: "from-purple-500 to-violet-500"
        },
        {
            icon: <Zap size={28} />,
            title: "Make results easy to measure",
            desc: "Built-in analytics help you track ROI and make data-driven decisions.",
            color: "from-green-500 to-emerald-500"
        },
    ];

    const values = [
        { icon: <Lightbulb size={20} />, title: "Innovation First", desc: "We embrace new ideas and cutting-edge solutions." },
        { icon: <Heart size={20} />, title: "Human-Centered", desc: "Technology should serve people, not the other way around." },
        { icon: <Globe size={20} />, title: "Global + Local", desc: "World-class execution with local market understanding." },
        { icon: <Award size={20} />, title: "Quality Obsessed", desc: "Every line of code, every pixel, matters to us." },
    ];

    const stats = [
        { number: "50+", label: "Projects Delivered", icon: <TrendingUp size={18} /> },
        { number: "8+", label: "Industries Served", icon: <Globe size={18} /> },
        { number: "95%", label: "Client Retention", icon: <Heart size={18} /> },
        { number: "24/7", label: "Support Available", icon: <Clock size={18} /> },
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
        <section id="about" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
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
                        About Us
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Strategic. Human-Centered.<br />
                        <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                            Tech That Works for People
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto px-2">
                        We combine deep technical expertise with strategic business intelligence to create
                        technology that feels intuitive, efficient, and natural to the people who use it.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
                    {/* Left: Story & Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Mission Card - Clickable for Modal */}
                        <div
                            onClick={openStoryModal}
                            className="glass-card p-5 md:p-6 rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all cursor-pointer group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Lightbulb size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base mb-3">
                                        To make technology human, simple, and smart—for both businesses and the people they serve.
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-xs md:text-sm text-brand-accent font-medium">
                                        Learn more about our story <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quote Block */}
                        <div className="bg-brand-surface/50 p-5 md:p-6 rounded-xl border-l-4 border-brand-primary">
                            <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                                "Most tech companies build what is asked. We build what is <span className="text-brand-primary font-semibold">needed</span>."
                            </p>
                        </div>

                        {/* What Sets Us Apart */}
                        <div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">What Sets Us Apart</h4>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                                We start by understanding <span className="text-brand-accent">why</span> something is being built and <span className="text-brand-accent">who</span> it is for.
                                By blending engineering with empathy, we design solutions that align with real user behavior,
                                operational realities, and long-term business goals.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Strategy First", "No Templates", "User-Focused", "Long-Term Vision"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6"
                    >
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="glass-card p-4 md:p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group"
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-20"
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
                            <h4 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-lg md:text-2xl font-bold text-center text-white mb-6 md:mb-8">Our Core Values</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="glass-card p-4 rounded-xl border border-gray-800 text-center group"
                            >
                                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                    {value.icon}
                                </div>
                                <h4 className="font-bold text-white text-xs md:text-sm mb-1">{value.title}</h4>
                                <p className="text-gray-400 text-[10px] md:text-xs">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Philosophy CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
                        <Heart size={32} className="mx-auto mb-4 text-brand-accent" />
                        <blockquote className="text-gray-300 text-sm md:text-base italic mb-4 md:mb-6 px-2">
                            "Technology should never feel like a burden. It should empower, simplify, and strengthen human connection."
                        </blockquote>
                        <p className="text-brand-primary font-semibold text-sm md:text-base">— That's what we build at Custom Tech Labs</p>
                    </div>
                </motion.div>
            </div>

            {/* ================= OUR STORY MODAL ================= */}
            <AnimatePresence>
                {isStoryModalOpen && (
                    <>
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={closeStoryModal}
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
                            <div className="md:hidden glass-card rounded-t-2xl border border-gray-700 shadow-2xl flex flex-col max-h-[85vh]">
                                {/* Drag Handle */}
                                <div className="flex justify-center py-3 border-b border-gray-700">
                                    <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
                                </div>
                                {/* Header */}
                                <div className="sticky top-0 z-10 px-4 py-3 border-b border-gray-700 bg-brand-primary/10 flex items-center justify-between">
                                    <h3 className="text-sm font-bold text-white">Our Story</h3>
                                    <button onClick={closeStoryModal} className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                                        <X size={14} />
                                    </button>
                                </div>
                                {/* Content */}
                                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                                    <div>
                                        <h4 className="text-xs font-semibold text-brand-accent uppercase mb-2">The Beginning</h4>
                                        <p className="text-gray-300 text-xs leading-relaxed">
                                            Custom Tech Labs was born from a shared vision between two powerhouse companies:
                                            <strong className="text-white"> Laxmaya Technologies</strong>, a global technology and
                                            enterprise engineering company, and <strong className="text-white">Small Biz Marketing (SBM)</strong>,
                                            a U.S.-based strategy and growth marketing agency.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-brand-accent uppercase mb-2">Our Edge</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Strategy Meets Engineering – We build with purpose",
                                                "User-Friendly by Design – Simple for real people",
                                                "Global Strength, Local Insight – Execution from India, strategy from the U.S."
                                            ].map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                                    <CheckCircle2 size={10} className="text-brand-accent mt-0.5 flex-shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="glass-card p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-xs font-semibold text-brand-accent uppercase mb-2">Our Philosophy</h4>
                                        <p className="text-gray-300 text-xs">
                                            We believe technology should empower, not overwhelm. Every solution we build starts
                                            with empathy—for your business, your team, and your customers.
                                        </p>
                                    </div>
                                </div>
                                {/* Close Button */}
                                <div className="sticky bottom-0 z-10 p-4 border-t border-gray-700 bg-gray-900/95">
                                    <button onClick={closeStoryModal} className="w-full py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-lg text-sm font-semibold">
                                        Got It, Thanks!
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Modal */}
                            <div className="hidden md:flex glass-card rounded-2xl border border-gray-700 shadow-2xl overflow-hidden max-h-[85vh]">
                                <div className="w-48 bg-gray-900/40 border-r border-gray-700 p-4">
                                    <h4 className="text-xs font-bold text-white mb-4">Our Story</h4>
                                    <nav className="space-y-2">
                                        {["The Beginning", "Our Edge", "Philosophy", "Team"].map((item, i) => (
                                            <button key={i} className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${i === 0 ? 'bg-brand-primary/20 text-brand-primary' : 'text-gray-400 hover:text-white hover:bg-gray-800/40'}`}>
                                                {item}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    <div className="p-6 border-b border-gray-700 bg-brand-primary/10 flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white">Our Story</h3>
                                        <button onClick={closeStoryModal} className="w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white">
                                            <X size={16} />
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-brand-accent uppercase mb-3">The Beginning</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Custom Tech Labs was born from a shared vision between two powerhouse companies:
                                                <strong className="text-white"> Laxmaya Technologies</strong>, a global technology and
                                                enterprise engineering company with deep technical expertise, and
                                                <strong className="text-white"> Small Biz Marketing (SBM)</strong>, a U.S.-based
                                                strategy and growth marketing agency with proven business intelligence.
                                            </p>
                                            <p className="text-gray-400 text-sm mt-3">
                                                Together, we bridge the gap between complex technology and real business needs,
                                                delivering solutions that don't just function—they feel intuitive, efficient,
                                                and natural to the people who use them.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-brand-accent uppercase mb-3">Our Edge</h4>
                                            <div className="space-y-3">
                                                {[
                                                    { title: "Strategy Meets Engineering", desc: "We build with purpose, not just code." },
                                                    { title: "User-Friendly by Design", desc: "Simple, intuitive experiences for real people." },
                                                    { title: "Global + Local", desc: "World-class execution from India, strategy from the U.S." }
                                                ].map((item, i) => (
                                                    <div key={i} className="glass-card p-4 rounded-lg border border-gray-700">
                                                        <h5 className="font-bold text-white text-sm mb-1">{item.title}</h5>
                                                        <p className="text-gray-400 text-xs">{item.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="glass-card p-5 rounded-xl border border-gray-700 bg-brand-accent/5">
                                            <h4 className="text-sm font-semibold text-brand-accent uppercase mb-3">Our Philosophy</h4>
                                            <p className="text-gray-300 text-sm italic">
                                                "Technology should never feel like a burden. It should empower, simplify, and
                                                strengthen human connection. That's what we build at Custom Tech Labs."
                                            </p>
                                        </div>
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

export default About;