import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Link2, Layers, Code2, Smartphone, Cloud, Database, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [visibleCards, setVisibleCards] = useState(1);
    const sliderRef = useRef(null);

    const filters = ['All', 'E-commerce', 'Media', 'SaaS', 'Mobile', 'Fintech'];

    const projects = [
        {
            id: 1, name: "Aluminate Life", type: "E-commerce & AI", category: "E-commerce",
            shortDesc: "Premium AI-powered platform with React & Laravel.",
            longDesc: "A luxury e-commerce experience powered by AI-driven product recommendations, personalized shopping journeys, and seamless checkout. Built for performance and elegance.",
            image: "🛍️", tech: ["React", "Next.js", "Laravel", "Tailwind", "AI/ML"],
            features: ["AI Recommendations", "Secure Payments", "Admin Dashboard", "Mobile Responsive"],
            link: "#", color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2, name: "ANI News", type: "Media Portal", category: "Media",
            shortDesc: "High-performance video news portal.",
            longDesc: "A scalable news platform handling millions of daily views with real-time updates, video streaming, and multi-device support. Optimized for speed and reliability.",
            image: "📰", tech: ["PHP", "Laravel", "MySQL", "CDN", "Video Streaming"],
            features: ["Real-time Publishing", "Video Syndication", "Mobile Optimized", "High Traffic Ready"],
            link: "#", color: "from-purple-500 to-violet-500"
        },
        {
            id: 3, name: "SteerPOS", type: "SaaS Platform", category: "SaaS",
            shortDesc: "Cloud-based business management solution.",
            longDesc: "A modern POS platform for managing sales, inventory, customers, and staff in one place. Multi-device compatible with real-time data sync and analytics.",
            image: "💼", tech: ["PHP", "MySQL", "Cloud SaaS", "REST API"],
            features: ["Multi-Device Sync", "Real-time Analytics", "Inventory Management", "Payment Integration"],
            link: "#", color: "from-green-500 to-emerald-500"
        },
        {
            id: 4, name: "My Eye Origin", type: "Mobile App", category: "Mobile",
            shortDesc: "AI-powered eye analysis using Flutter.",
            longDesc: "A mobile app that analyzes eye images using intelligent image processing to provide personalized insights. Built with Flutter for seamless iOS and Android experience.",
            image: "👁️", tech: ["Flutter", "Python", "TensorFlow", "Firebase"],
            features: ["AI Image Analysis", "Cross-Platform", "Secure Data", "Real-time Results"],
            link: "#", color: "from-pink-500 to-rose-500"
        },
        {
            id: 5, name: "RedPay", type: "Fintech", category: "Fintech",
            shortDesc: "Digital payment & API financial services.",
            longDesc: "A modern fintech platform offering recharge, money transfer, BBPS, AePS, and payout systems. Built with security, scalability, and developer-friendly APIs.",
            image: "💳", tech: ["PHP", "MySQL", "REST API", "Security"],
            features: ["Multi-API Support", "Secure Transactions", "B2B Onboarding", "Compliance Ready"],
            link: "#", color: "from-red-500 to-pink-500"
        },
    ];

    // Filter projects
    const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

    // Calculate visible cards based on screen size - FIXED
    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 1;
        const width = window.innerWidth;
        if (width >= 1024) return 3;   // Desktop
        if (width >= 768) return 2;    // Tablet
        return 1;                       // Mobile
    };

    // Update visible cards on resize - FIXED
    useEffect(() => {
        const handleResize = () => {
            const newVisible = getVisibleCards();
            setVisibleCards(newVisible);
            // Reset slide when visible cards change to avoid overflow
            setCurrentSlide(0);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide every 2 seconds
    useEffect(() => {
        if (!isAutoPlaying || filteredProjects.length <= visibleCards) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => {
                const maxSlide = Math.max(0, filteredProjects.length - visibleCards);
                return prev >= maxSlide ? 0 : prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, filteredProjects.length, visibleCards]);

    // Reset slide when filter changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [activeFilter]);

    // Navigation functions - FIXED
    const nextSlide = () => {
        setIsAutoPlaying(false);
        const maxSlide = Math.max(0, filteredProjects.length - visibleCards);
        setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        const maxSlide = Math.max(0, filteredProjects.length - visibleCards);
        setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    // Modal functions
    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
        exit: { opacity: 0, x: -30, transition: { duration: 0.3 } }
    };

    const filterVariants = {
        hover: { scale: 1.05, y: -2 },
        tap: { scale: 0.98 }
    };

    const maxSlide = Math.max(0, filteredProjects.length - visibleCards);

    return (
        <section id="portfolio" className="py-12 md:py-20 bg-brand-dark relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-72 md:h-72 bg-brand-primary/5 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-72 md:h-72 bg-brand-accent/5 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header - Mobile Optimized */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6 md:mb-10">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] md:text-xs font-semibold mb-3 border border-brand-primary/20">
                        Our Work
                    </span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 px-2">
                        Featured <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto px-3">
                        Explore our portfolio of custom digital solutions built for real business impact.
                    </p>
                </motion.div>

                {/* Filter Tabs - Mobile Scrollable */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-6 md:mb-10">
                    <div className="flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide w-full max-w-full">
                        {filters.map((filter) => (
                            <motion.button
                                key={filter}
                                variants={filterVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2.5 rounded-xl text-[10px] md:text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 min-h-[40px] flex items-center justify-center ${activeFilter === filter
                                        ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/25'
                                        : 'glass-card text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                                    }`}
                            >
                                {filter}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Slider Container - Mobile Fixed */}
                <div ref={sliderRef} className="relative mb-8 md:mb-12">
                    {/* Navigation Buttons - Mobile Positioning Fixed */}
                    {filteredProjects.length > visibleCards && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 md:left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-900/90 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-primary hover:bg-gray-800 transition-all shadow-lg min-w-[36px] min-h-[36px]"
                                aria-label="Previous projects"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-2 md:right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-900/90 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-primary hover:bg-gray-800 transition-all shadow-lg min-w-[36px] min-h-[36px]"
                                aria-label="Next projects"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </>
                    )}

                    {/* Slider Track - FIXED WIDTH CALCULATION */}
                    <div className="overflow-hidden px-1 md:px-4">
                        <motion.div
                            className="flex gap-3 md:gap-5"
                            animate={{ x: `-${currentSlide * (100 / visibleCards)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                width: `${(filteredProjects.length / visibleCards) * 100}%`,
                                minWidth: '100%'
                            }}
                        >
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={cardVariants}
                                    // FIXED: Proper responsive width classes
                                    className={`flex-shrink-0 ${visibleCards === 1 ? 'w-full' :
                                            visibleCards === 2 ? 'w-[calc(50%-0.5rem)]' :
                                                'w-[calc(33.333%-0.66rem)]'
                                        }`}
                                >
                                    {/* Project Card - Mobile Optimized */}
                                    <div className="glass-card rounded-xl md:rounded-2xl border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all h-full flex flex-col min-h-[280px] md:min-h-[320px]">
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                        {/* Project Image/Icon - Mobile Size Fixed */}
                                        <div className="h-28 md:h-32 bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center relative">
                                            <span className="text-4xl md:text-5xl">{project.image}</span>
                                            {/* Category Badge - Mobile Size */}
                                            <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-full bg-gray-800/90 text-[9px] text-gray-400 flex items-center gap-0.5">
                                                <Sparkles size={8} /> {project.category}
                                            </div>
                                        </div>

                                        {/* Content - Mobile Padding Fixed */}
                                        <div className="p-3 md:p-4 flex-1 flex flex-col">
                                            {/* Type Badge */}
                                            <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-medium bg-gradient-to-r ${project.color} text-white mb-2 w-fit`}>
                                                {project.type}
                                            </span>

                                            {/* Title - Mobile Font Size */}
                                            <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-brand-primary transition-colors line-clamp-1">
                                                {project.name}
                                            </h3>

                                            {/* Description - Mobile Font Size + Line Clamp */}
                                            <p className="text-gray-400 text-[10px] md:text-xs line-clamp-2 flex-1">
                                                {project.shortDesc}
                                            </p>

                                            {/* Tech Tags - Mobile Size */}
                                            <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-gray-800/50">
                                                {project.tech.slice(0, 2).map((tech, i) => (
                                                    <span key={i} className="px-1.5 py-0.5 bg-gray-800/50 rounded text-[8px] md:text-[9px] text-gray-400 border border-gray-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 2 && (
                                                    <span className="px-1.5 py-0.5 bg-gray-800/50 rounded text-[8px] md:text-[9px] text-brand-accent border border-gray-700">
                                                        +{project.tech.length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Action Buttons - Mobile Size + Touch Friendly */}
                                            <div className="flex gap-2 mt-3">
                                                <a
                                                    href={project.link}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`flex-1 flex items-center justify-center gap-1 px-2.5 py-2 rounded-lg text-[9px] md:text-[10px] font-medium bg-gradient-to-r ${project.color} text-white hover:opacity-90 transition-opacity min-h-[32px]`}
                                                >
                                                    <ExternalLink size={10} /> View
                                                </a>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); openModal(project); }}
                                                    className="flex-1 flex items-center justify-center gap-1 px-2.5 py-2 rounded-lg text-[9px] md:text-[10px] font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 transition-colors min-h-[32px]"
                                                >
                                                    <Link2 size={10} /> Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator - Mobile Size */}
                    {filteredProjects.length > visibleCards && (
                        <div className="flex justify-center gap-1.5 mt-4">
                            {Array.from({ length: filteredProjects.length - visibleCards + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all min-w-[6px] min-h-[6px] ${currentSlide === index
                                            ? `bg-gradient-to-r ${projects[0].color} w-4 md:w-6`
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Auto-play Status - Mobile Size */}
                    <div className="flex justify-center mt-3">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] md:text-[10px] ${isAutoPlaying ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-800 text-gray-400'
                            }`}>
                            <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${isAutoPlaying ? 'bg-brand-primary animate-pulse' : 'bg-gray-500'}`} />
                            {isAutoPlaying ? 'Auto-sliding' : 'Paused'}
                        </div>
                    </div>
                </div>

                {/* Empty State - Mobile */}
                {filteredProjects.length === 0 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                        <p className="text-gray-400 text-xs px-4">No projects found in this category.</p>
                        <button onClick={() => setActiveFilter('All')} className="mt-3 px-4 py-2 text-xs text-brand-accent hover:text-brand-primary transition-colors">
                            View all projects →
                        </button>
                    </motion.div>
                )}

                {/* CTA Section - Mobile */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10 md:mt-14">
                    <p className="text-gray-400 text-xs mb-3 px-4">Have a project in mind?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-xs font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 min-h-[40px]">
                        Let's Build Yours
                    </a>
                </motion.div>
            </div>

            {/* ================= PROJECT DETAILS MODAL - Mobile Fixed ================= */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm"
                        />

                        {/* Modal Content - Mobile Positioning Fixed */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="fixed z-50 inset-x-3 md:inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[95vw] md:max-w-2xl glass-card rounded-2xl border border-gray-700 shadow-2xl overflow-hidden max-h-[85vh] md:max-h-[85vh] flex flex-col"
                        >
                            {/* Header - Mobile Padding */}
                            <div className={`p-4 md:p-5 border-b border-gray-700 bg-gradient-to-r ${selectedProject.color} bg-opacity-10 flex items-start justify-between`}>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl md:text-4xl">{selectedProject.image}</span>
                                    <div className="min-w-0">
                                        <h3 className="text-base md:text-lg font-bold text-white truncate">{selectedProject.name}</h3>
                                        <span className="text-[10px] md:text-xs text-brand-accent">{selectedProject.type}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-800/90 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors min-w-[32px] min-h-[32px]"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* Scrollable Content - Mobile Padding */}
                            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
                                {/* Description */}
                                <div>
                                    <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Overview</h4>
                                    <p className="text-gray-300 text-xs leading-relaxed">{selectedProject.longDesc}</p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Code2 size={12} /> Technology Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span key={i} className={`px-2.5 py-1 rounded-lg text-[10px] bg-gradient-to-r ${selectedProject.color} text-white font-medium`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features Grid - Mobile 1-col */}
                                <div>
                                    <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Layers size={12} /> Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedProject.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-800/30 border border-gray-700">
                                                <CheckCircle2 size={12} className={`text-transparent bg-gradient-to-r ${selectedProject.color} bg-clip-text mt-0.5 flex-shrink-0`} />
                                                <span className="text-[10px] text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Stats - Mobile Stack */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700 text-center">
                                        <Cloud size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedProject.color} bg-clip-text`} />
                                        <p className="text-[10px] font-bold text-white">Cloud</p>
                                        <p className="text-[8px] text-gray-500">Deployed</p>
                                    </div>
                                    <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700 text-center">
                                        <Database size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedProject.color} bg-clip-text`} />
                                        <p className="text-[10px] font-bold text-white">Secure</p>
                                        <p className="text-[8px] text-gray-500">Data</p>
                                    </div>
                                    <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700 text-center">
                                        <Smartphone size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedProject.color} bg-clip-text`} />
                                        <p className="text-[10px] font-bold text-white">Responsive</p>
                                        <p className="text-[8px] text-gray-500">Design</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions - Mobile Stack */}
                            <div className="p-4 border-t border-gray-700 bg-gray-900/50 flex flex-col sm:flex-row gap-2">
                                <a
                                    href={selectedProject.link}
                                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white text-[10px] font-semibold hover:opacity-90 transition-opacity min-h-[40px]"
                                >
                                    <ExternalLink size={14} /> View Live Project
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 text-[10px] font-semibold hover:bg-gray-700 border border-gray-700 transition-colors min-h-[40px]"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* CSS Utilities */}
            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Prevent horizontal scroll on mobile */
        @media (max-width: 767px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
        </section>
    );
};

// Simple CheckCircle2 fallback
const CheckCircle2 = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2l4 -4" />
    </svg>
);

export default Portfolio;