import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Heart, BookOpen, Briefcase, Zap, Building2,
    ShoppingCart, Stethoscope, GraduationCap, TrendingUp,
    CheckCircle2, X, ExternalLink, Calendar, Settings,
    Target, Award, Clock
} from 'lucide-react'; // 👈 Arrow icons removed

const Industries = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle modal open
    const openModal = (industry) => {
        setSelectedIndustry(industry);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedIndustry(null), 300);
        document.body.style.overflow = 'unset';
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const industries = [
        {
            id: 1,
            name: "CRM & HRMS Systems",
            icon: <Users size={24} />,
            desc: "Streamline customer & employee management",
            longDesc: "We build custom CRM and HRMS solutions that centralize your customer data, employee records, and hiring processes. Our systems are designed to improve team collaboration, automate routine tasks, and provide actionable insights for better decision-making.",
            features: [
                "Centralized customer database",
                "Employee onboarding workflows",
                "Performance tracking & analytics",
                "Automated email & notification systems",
                "Role-based access control",
                "Mobile-responsive dashboards"
            ],
            useCases: ["Sales teams", "HR departments", "Recruitment agencies", "Customer support"],
            solutions: ["Custom CRM", "HRMS Platform", "Applicant Tracking", "Performance Management"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            name: "Wellness & Fitness",
            icon: <Heart size={24} />,
            desc: "Engage users & track health progress",
            longDesc: "Create engaging wellness and fitness platforms that motivate users to achieve their health goals. We integrate workout tracking, nutrition planning, progress analytics, and community features to build apps that users love and return to daily.",
            features: [
                "Workout & exercise tracking",
                "Nutrition & meal planning",
                "Progress photos & metrics",
                "Social challenges & leaderboards",
                "Wearable device integration",
                "Personalized recommendations"
            ],
            useCases: ["Fitness apps", "Yoga platforms", "Nutrition coaches", "Corporate wellness"],
            solutions: ["Mobile Fitness App", "Web Portal", "Admin Dashboard", "API Integrations"],
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 3,
            name: "Learning & Quiz Apps",
            icon: <GraduationCap size={24} />,
            desc: "Interactive & engaging education platforms",
            longDesc: "Transform learning experiences with interactive quiz applications and educational platforms. We gamify education through quizzes, leaderboards, achievements, and adaptive learning paths that keep students engaged and motivated to learn.",
            features: [
                "Interactive quiz builder",
                "Gamification & achievements",
                "Progress tracking & reports",
                "Multi-language support",
                "Offline mode capability",
                "Teacher & student dashboards"
            ],
            useCases: ["Schools & colleges", "Corporate training", "Test preparation", "Skill development"],
            solutions: ["Quiz Platform", "LMS Integration", "Mobile Learning App", "Analytics Dashboard"],
            color: "from-purple-500 to-violet-500"
        },
        {
            id: 4,
            name: "B2B & B2C Platforms",
            icon: <Briefcase size={24} />,
            desc: "Scale transactions & business growth",
            longDesc: "Build robust B2B and B2C platforms that facilitate seamless communication, secure transactions, and long-term customer relationships. Our solutions handle complex workflows, multi-vendor ecosystems, and scalable architecture for growing businesses.",
            features: [
                "Multi-vendor marketplace support",
                "Secure payment & escrow systems",
                "Order management & fulfillment",
                "Customer portal & self-service",
                "Advanced search & filtering",
                "Real-time messaging & notifications"
            ],
            useCases: ["Marketplaces", "Wholesale platforms", "Service directories", "Subscription services"],
            solutions: ["B2B Portal", "B2C Storefront", "Vendor Dashboard", "Mobile Apps"],
            color: "from-orange-500 to-amber-500"
        },
        {
            id: 5,
            name: "Business Automation",
            icon: <Zap size={24} />,
            desc: "Replace manual work with smart workflows",
            longDesc: "Eliminate repetitive manual tasks with intelligent automation systems. We design custom workflows that handle document processing, approvals, data entry, reporting, and more—freeing your team to focus on strategic work that drives growth.",
            features: [
                "Workflow builder & automation rules",
                "Document generation & e-signatures",
                "Approval workflows & notifications",
                "Data extraction & validation",
                "Integration with existing tools",
                "Audit logs & compliance reporting"
            ],
            useCases: ["Invoice processing", "Employee onboarding", "Customer onboarding", "Report generation"],
            solutions: ["Automation Platform", "API Connectors", "Custom Scripts", "Dashboard & Reports"],
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 6,
            name: "E-Commerce Solutions",
            icon: <ShoppingCart size={24} />,
            desc: "Build scalable online stores",
            longDesc: "Launch and scale your online store with custom eCommerce solutions built for conversion. We handle everything from product catalogs and secure checkout to inventory management and marketing integrations—so you can focus on selling.",
            features: [
                "Custom product catalogs & variants",
                "Secure checkout & payment gateways",
                "Inventory & order management",
                "Customer accounts & wishlists",
                "SEO optimization & marketing tools",
                "Analytics & conversion tracking"
            ],
            useCases: ["D2C brands", "Multi-vendor marketplaces", "Subscription boxes", "Digital products"],
            solutions: ["Custom Storefront", "Mobile Shopping App", "Admin Panel", "Marketing Integrations"],
            color: "from-indigo-500 to-blue-500"
        },
        {
            id: 7,
            name: "Healthcare & Medical",
            icon: <Stethoscope size={24} />,
            desc: "Secure & compliant health platforms",
            longDesc: "Develop HIPAA-compliant healthcare platforms that prioritize patient privacy and data security. We build telemedicine apps, patient portals, appointment scheduling, and health record systems that meet regulatory requirements while delivering exceptional user experiences.",
            features: [
                "HIPAA-compliant data handling",
                "Telemedicine video consultations",
                "Patient portal & health records",
                "Appointment scheduling & reminders",
                "Prescription management",
                "Insurance & billing integration"
            ],
            useCases: ["Telemedicine", "Clinic management", "Patient engagement", "Health monitoring"],
            solutions: ["Patient App", "Provider Portal", "Admin Dashboard", "API for EHR Integration"],
            color: "from-teal-500 to-cyan-500"
        },
        {
            id: 8,
            name: "Enterprise Systems",
            icon: <Building2 size={24} />,
            desc: "Large-scale organizational solutions",
            longDesc: "Deliver enterprise-grade systems that scale with your organization's growth. From custom ERP modules to complex data pipelines, we build robust, secure, and maintainable solutions that handle your most demanding business requirements.",
            features: [
                "Scalable microservices architecture",
                "Enterprise single sign-on (SSO)",
                "Advanced role & permission management",
                "Real-time data synchronization",
                "Comprehensive audit & logging",
                "High-availability & disaster recovery"
            ],
            useCases: ["Large corporations", "Government agencies", "Financial institutions", "Healthcare networks"],
            solutions: ["Custom ERP Modules", "Data Integration Platform", "Mobile Enterprise Apps", "Cloud Infrastructure"],
            color: "from-slate-500 to-gray-500"
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
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
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />

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
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Industries We <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Serve</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We design digital solutions that help businesses save time, reduce errors, and grow confidently across multiple sectors.
                    </p>
                </motion.div>

                {/* Industries Grid - CLICKABLE CARDS */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                            onClick={() => openModal(industry)} // 👈 CLICK EVENT ADDED
                            className="group glass-card p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 relative overflow-hidden cursor-pointer"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            {/* Icon with Gradient Background */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                {industry.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-brand-primary transition-colors duration-300">
                                {industry.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {industry.desc}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${industry.color} transition-all duration-500 mt-4 rounded-full`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section - Arrow Removed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">
                        Don't see your industry listed? We love new challenges!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
                    >
                        Discuss Your Project
                    </a>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800"
                >
                    {[
                        { number: "50+", label: "Projects Delivered" },
                        { number: "8+", label: "Industries Served" },
                        { number: "100%", label: "Client Satisfaction" },
                        { number: "24/7", label: "Support Available" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ================= MODAL POPUP ================= */}
            <AnimatePresence>
                {isModalOpen && selectedIndustry && (
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
                            <div className={`p-6 pb-4 bg-gradient-to-r ${selectedIndustry.color} bg-opacity-10 border-b border-gray-700`}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedIndustry.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                                        {selectedIndustry.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">{selectedIndustry.name}</h3>
                                        <p className="text-gray-300">{selectedIndustry.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Long Description */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <Target size={18} className="text-brand-accent" />
                                        Overview
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed">{selectedIndustry.longDesc}</p>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-brand-accent" />
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedIndustry.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <CheckCircle2 size={14} className={`text-transparent bg-gradient-to-r ${selectedIndustry.color} bg-clip-text flex-shrink-0`} />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Use Cases & Solutions */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="glass-card p-4 rounded-xl border border-gray-700">
                                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Award size={16} className="text-brand-accent" />
                                            Ideal For
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedIndustry.useCases.map((useCase, index) => (
                                                <span key={index} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700">
                                                    {useCase}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border border-gray-700">
                                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                            <Settings size={16} className="text-brand-accent" />
                                            Our Solutions
                                        </h4>
                                        <ul className="space-y-1">
                                            {selectedIndustry.solutions.map((solution, index) => (
                                                <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedIndustry.color}`}></span>
                                                    {solution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Action Buttons - Arrow Removed */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-700">
                                    <a
                                        href="#contact"
                                        onClick={closeModal}
                                        className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedIndustry.color} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                                    >
                                        Get Industry Consultation
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

export default Industries;