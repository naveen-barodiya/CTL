import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Cpu, Layers, Smartphone, Palette, Headphones,
    ShoppingCart, Database, CheckCircle2, Zap,
    TrendingUp, Shield, Clock, X, ExternalLink, Calendar,
    Users, Settings, Rocket
} from 'lucide-react'; // 👈 ArrowRight hata diya

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const services = [
        {
            id: 1,
            icon: <Code2 size={32} />,
            title: "Custom Web & Mobile App Development",
            desc: "Tailored websites and mobile apps built around your business goals and user needs.",
            longDesc: "We create custom web and mobile applications that are tailored to your specific business requirements. Our development process ensures that every feature aligns with your goals and provides value to your users. From concept to deployment, we handle everything.",
            features: [
                "Responsive & mobile-first design",
                "Progressive Web Apps (PWA)",
                "Cross-platform compatibility",
                "Performance optimized",
                "SEO-friendly architecture",
                "Accessibility compliant (WCAG)"
            ],
            deliverables: ["Source code", "Documentation", "Deployment guide", "Training session"],
            timeline: "4-12 weeks",
            color: "from-blue-500 to-cyan-500",
            popular: true
        },
        {
            id: 2,
            icon: <Cpu size={32} />,
            title: "AI-Powered Product Development",
            desc: "Smart features that automate processes, improve decision-making, and enhance user experience.",
            longDesc: "Leverage the power of artificial intelligence to transform your business operations. We integrate machine learning, natural language processing, and computer vision to create intelligent solutions that learn, adapt, and grow with your business.",
            features: [
                "Machine Learning integration",
                "Chatbots & virtual assistants",
                "Predictive analytics",
                "Image & voice recognition",
                "Automated decision systems",
                "Personalization engines"
            ],
            deliverables: ["AI model", "API endpoints", "Dashboard", "Analytics report"],
            timeline: "6-16 weeks",
            color: "from-purple-500 to-violet-500",
            popular: true
        },
        {
            id: 3,
            icon: <Layers size={32} />,
            title: "System & Tool Integration",
            desc: "Seamless integration of existing tools to create a unified, efficient workflow.",
            longDesc: "Break down silos and connect your existing tools into a cohesive ecosystem. We specialize in API development, third-party integrations, and workflow automation to ensure your systems work together seamlessly.",
            features: [
                "API development & integration",
                "Third-party service connections",
                "Data synchronization",
                "Workflow automation",
                "Real-time data pipelines",
                "Legacy system modernization"
            ],
            deliverables: ["Integration docs", "API specs", "Testing suite", "Support guide"],
            timeline: "3-8 weeks",
            color: "from-green-500 to-emerald-500",
            popular: false
        },
        {
            id: 4,
            icon: <Smartphone size={32} />,
            title: "Enterprise Solutions",
            desc: "Scalable systems for web, iOS, and Android platforms built for performance and growth.",
            longDesc: "Build robust enterprise-grade solutions that scale with your business. From custom CRM and HRMS systems to complex business automation tools, we deliver solutions that handle your most demanding requirements.",
            features: [
                "Custom CRM & HRMS systems",
                "Business automation tools",
                "Multi-user access control",
                "Real-time analytics dashboard",
                "Role-based permissions",
                "Audit logging & compliance"
            ],
            deliverables: ["Enterprise app", "Admin panel", "User manuals", "SLA support"],
            timeline: "8-20 weeks",
            color: "from-orange-500 to-amber-500",
            popular: false
        },
        {
            id: 5,
            icon: <Palette size={32} />,
            title: "UI/UX Design",
            desc: "Human-centered design that makes technology easy to understand and use.",
            longDesc: "Great technology needs great design. Our UI/UX experts create intuitive, beautiful interfaces that users love. We combine user research, wireframing, and visual design to deliver experiences that convert.",
            features: [
                "User research & persona mapping",
                "Wireframing & prototyping",
                "Visual design & branding",
                "Usability testing",
                "Design system creation",
                "Interaction design"
            ],
            deliverables: ["Design files", "Prototype", "Style guide", "Handoff docs"],
            timeline: "2-6 weeks",
            color: "from-pink-500 to-rose-500",
            popular: false
        },
        {
            id: 6,
            icon: <Headphones size={32} />,
            title: "Support & Maintenance",
            desc: "Ongoing support to ensure your digital products perform at their best.",
            longDesc: "Launch is just the beginning. Our support team ensures your solutions continue to perform optimally with regular updates, security patches, and feature enhancements. We're here when you need us.",
            features: [
                "24/7 technical support",
                "Regular security updates",
                "Performance monitoring",
                "Feature enhancements",
                "Bug fixes & troubleshooting",
                "Monthly health reports"
            ],
            deliverables: ["Support portal", "Monthly reports", "Priority tickets", "Dedicated manager"],
            timeline: "Ongoing",
            color: "from-indigo-500 to-blue-500",
            popular: false
        },
        {
            id: 7,
            icon: <ShoppingCart size={32} />,
            title: "Custom eCommerce Solutions",
            desc: "Built to scale with secure payments, inventory management, and customer engagement.",
            longDesc: "Create an online store that converts visitors into customers. We build custom eCommerce platforms with secure payment processing, inventory management, and marketing tools to help you grow your sales.",
            features: [
                "Custom shopping cart & checkout",
                "Payment gateway integration",
                "Inventory & order management",
                "Customer loyalty programs",
                "Multi-currency support",
                "SEO & marketing tools"
            ],
            deliverables: ["eCommerce platform", "Payment setup", "Admin dashboard", "Training"],
            timeline: "6-14 weeks",
            color: "from-teal-500 to-cyan-500",
            popular: true
        },
        {
            id: 8,
            icon: <Database size={32} />,
            title: "Business Automation Systems",
            desc: "Replace repetitive manual work with smart digital workflows.",
            longDesc: "Free your team from repetitive tasks with intelligent automation. We design and build custom workflows that handle document processing, notifications, reporting, and more—so your team can focus on what matters.",
            features: [
                "Process automation",
                "Document management",
                "Report generation",
                "Email & notification systems",
                "Approval workflows",
                "Data extraction & processing"
            ],
            deliverables: ["Automation scripts", "Workflow docs", "Dashboard", "Training videos"],
            timeline: "4-10 weeks",
            color: "from-red-500 to-pink-500",
            popular: false
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 border border-brand-primary/20">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Our Core <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        End-to-end technology services designed to support businesses from idea to execution and beyond.
                        No templates. No shortcuts. Just custom solutions built for your success.
                    </p>
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { icon: <Zap size={24} />, title: "Fast Delivery", desc: "Agile methodology for quick turnaround", color: "from-yellow-500 to-orange-500" },
                        { icon: <Shield size={24} />, title: "Secure & Reliable", desc: "Enterprise-grade security standards", color: "from-green-500 to-emerald-500" },
                        { icon: <TrendingUp size={24} />, title: "Scalable Solutions", desc: "Built to grow with your business", color: "from-blue-500 to-cyan-500" },
                        { icon: <Clock size={24} />, title: "24/7 Support", desc: "Always here when you need us", color: "from-purple-500 to-violet-500" },
                    ].map((item, index) => (
                        <motion.div key={index} whileHover={{ y: -5 }} className="glass-card p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-white">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Services Grid - CLICKABLE CARDS */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                            onClick={() => openModal(service)}
                            className="glass-card p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-xs font-semibold rounded-full z-10">
                                    Popular
                                </div>
                            )}

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                {service.desc}
                            </p>

                            {/* Features Preview */}
                            <ul className="space-y-1 mb-4">
                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                                        <CheckCircle2 size={10} className="text-brand-accent flex-shrink-0" />
                                        <span className="truncate">{feature}</span>
                                    </li>
                                ))}
                                {service.features.length > 3 && (
                                    <li className="text-xs text-brand-primary font-medium">+{service.features.length - 3} more</li>
                                )}
                            </ul>

                            {/* View Details Text (Arrow Removed) */}
                            <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                View Details
                            </div>

                            {/* Bottom Accent Line */}
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 mt-4 rounded-full`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Service Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 glass-card p-8 rounded-2xl border border-gray-800"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2">Our Service Philosophy</h3>
                        <p className="text-gray-400">What makes our approach different</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Make technology easy to understand", desc: "We break down complex tech into simple, actionable solutions that your team can easily manage.", icon: <Code2 size={24} /> },
                            { title: "Make products easy to use", desc: "User-centered design ensures your customers have intuitive, frictionless experiences.", icon: <Smartphone size={24} /> },
                            { title: "Make results easy to measure", desc: "Built-in analytics and reporting help you track ROI and make data-driven decisions.", icon: <TrendingUp size={24} /> },
                        ].map((philosophy, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                                    {philosophy.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">{philosophy.title}</h4>
                                    <p className="text-gray-400 text-sm">{philosophy.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section - Arrow Removed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">Ready to transform your business with custom technology solutions?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105">
                        Get Free Consultation
                    </a>
                </motion.div>
            </div>

            {/* ================= MODAL POPUP ================= */}
            <AnimatePresence>
                {isModalOpen && selectedService && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700 shadow-2xl relative"
                        >
                            {/* Close Button (X) */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-gray-600 hover:border-gray-500"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header */}
                            <div className={`p-6 pb-4 bg-gradient-to-r ${selectedService.color} bg-opacity-10 border-b border-gray-700`}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                                        {selectedService.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">{selectedService.title}</h3>
                                        <p className="text-gray-300">{selectedService.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Long Description */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <Rocket size={18} className="text-brand-accent" />
                                        Overview
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed">{selectedService.longDesc}</p>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-brand-accent" />
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedService.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <CheckCircle2 size={14} className={`text-transparent bg-gradient-to-r ${selectedService.color} bg-clip-text flex-shrink-0`} />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deliverables & Timeline */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="glass-card p-4 rounded-xl border border-gray-700">
                                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Settings size={16} className="text-brand-accent" />
                                            Deliverables
                                        </h4>
                                        <ul className="space-y-1">
                                            {selectedService.deliverables.map((item, index) => (
                                                <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedService.color}`}></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border border-gray-700">
                                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Calendar size={16} className="text-brand-accent" />
                                            Timeline
                                        </h4>
                                        <p className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                                            {selectedService.timeline}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">Estimated project duration</p>
                                    </div>
                                </div>

                                {/* Action Buttons - Arrow Removed */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
                                    <a
                                        href="#contact"
                                        onClick={closeModal}
                                        className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedService.color} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                                    >
                                        Get Started
                                    </a>
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold border border-gray-600 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;