import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Lightbulb, Code2, TestTube, Rocket,
    CheckCircle, Clock, Users, Target, MessageSquare,
    FileCheck, X, Calendar, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';

const Process = () => {
    const [selectedStep, setSelectedStep] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const steps = [
        {
            id: 1, num: "01", icon: <Search size={28} />,
            title: "Discovery & Audit",
            desc: "Understanding goals and uncovering gaps.",
            longDesc: "We start by diving deep into your business. Through stakeholder interviews, user research, and technical audits, we identify pain points, opportunities, and success metrics.",
            details: ["Business requirement analysis", "User research & persona mapping", "Technical audit", "Competitor analysis", "Stakeholder workshops", "Success metrics"],
            deliverables: ["Research report", "User personas", "Audit doc", "Project brief"],
            duration: "1-2 Weeks",
            team: ["PM", "UX Researcher", "Tech Lead"],
            color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30"
        },
        {
            id: 2, num: "02", icon: <Lightbulb size={28} />,
            title: "Strategy & Architecture",
            desc: "Designing a tailored roadmap.",
            longDesc: "With insights in hand, we craft a strategic roadmap. This includes system architecture, technology selection, user flows, and wireframes aligned with your business goals.",
            details: ["Solution architecture", "Tech stack selection", "Project timeline", "Success metrics", "User flow diagrams", "Wireframes"],
            deliverables: ["Architecture doc", "Tech stack doc", "Roadmap", "Wireframes"],
            duration: "1-2 Weeks",
            team: ["Architect", "Tech Lead", "UX Designer"],
            color: "from-purple-500 to-violet-500", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30"
        },
        {
            id: 3, num: "03", icon: <Code2 size={28} />,
            title: "Development & Integration",
            desc: "Building scalable solutions.",
            longDesc: "Our agile development sprints bring your solution to life. We build in iterative cycles with regular demos, ensuring transparency and flexibility throughout.",
            details: ["Agile sprints", "Progress updates", "Third-party integrations", "Code reviews", "API development", "Database design"],
            deliverables: ["Working app", "Source code", "API docs", "Test reports"],
            duration: "4-12 Weeks",
            team: ["Developers", "QA Engineers", "DevOps"],
            color: "from-green-500 to-emerald-500", bgColor: "bg-green-500/10", borderColor: "border-green-500/30"
        },
        {
            id: 4, num: "04", icon: <TestTube size={28} />,
            title: "Testing & Optimization",
            desc: "Rigorous testing for smooth UX.",
            longDesc: "Quality is non-negotiable. We conduct comprehensive testing including unit tests, integration tests, UAT, and performance benchmarks for a robust solution.",
            details: ["Unit testing", "Integration testing", "UAT", "Performance optimization", "Security checks", "Accessibility compliance"],
            deliverables: ["Test reports", "Bug fixes", "Performance audit", "Security cert"],
            duration: "2-3 Weeks",
            team: ["QA Engineers", "Security Specialist", "UX Tester"],
            color: "from-orange-500 to-amber-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30"
        },
        {
            id: 5, num: "05", icon: <Rocket size={28} />,
            title: "Deployment & Scaling",
            desc: "Launching with precision.",
            longDesc: "Launch day is just the beginning. We handle production deployment with zero-downtime strategies, monitor performance, and provide training for your team.",
            details: ["Production deployment", "Performance monitoring", "User training", "Ongoing support", "Analytics setup", "Scaling strategy"],
            deliverables: ["Live app", "User manuals", "Monitoring dashboard", "Support plan"],
            duration: "1-2 Weeks",
            team: ["DevOps", "Support Team", "Project Manager"],
            color: "from-red-500 to-pink-500", bgColor: "bg-red-500/10", borderColor: "border-red-500/30"
        },
    ];

    const openModal = (step, index) => {
        setSelectedStep(step);
        setCurrentStepIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedStep(null), 200);
        document.body.style.overflow = 'unset';
    };

    const nextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            const newIndex = currentStepIndex + 1;
            setCurrentStepIndex(newIndex);
            setSelectedStep(steps[newIndex]);
        }
    };

    const prevStep = () => {
        if (currentStepIndex > 0) {
            const newIndex = currentStepIndex - 1;
            setCurrentStepIndex(newIndex);
            setSelectedStep(steps[newIndex]);
        }
    };

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
    };

    // Mobile: Slide up from bottom | Desktop: Scale fade
    const modalVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 400 } },
        exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.15 } }
    };

    return (
        <section id="process" className="py-12 md:py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-3 border border-brand-primary/20">
                        Our Workflow
                    </span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                        How We <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Work</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto px-1">
                        Strategic thinking + technical excellence = purposeful, scalable solutions.
                    </p>
                </motion.div>

                {/* Process Grid - Responsive */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
                    {steps.map((step, index) => (
                        <motion.div key={step.id} variants={stepVariants} whileTap={{ scale: 0.98 }} onClick={() => openModal(step, index)} className="cursor-pointer">
                            <div className={`glass-card p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-all ${step.bgColor} ${step.borderColor} border relative overflow-hidden`}>
                                {/* Step Number Background */}
                                <span className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10 absolute top-2 right-3`}>{step.num}</span>

                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-sm md:text-base font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{step.desc}</p>

                                {/* Duration */}
                                <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-gray-800">
                                    <Clock size={11} className="text-brand-accent" />
                                    <span className="text-xs text-gray-500">{step.duration}</span>
                                </div>

                                {/* CTA */}
                                <span className={`text-xs font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>View Details</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10 md:mt-14">
                    <p className="text-gray-400 text-xs md:text-sm mb-3">Ready to start your project?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-xs md:text-sm font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
                        Start Your Project
                    </a>
                </motion.div>
            </div>

            {/* ================= MOBILE-FIRST RESPONSIVE MODAL ================= */}
            <AnimatePresence>
                {isModalOpen && selectedStep && (
                    <>
                        {/* Backdrop */}
                        <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={closeModal} className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:backdrop-blur-md" />

                        {/* Modal Container - Mobile: Full width bottom sheet | Desktop: Centered modal */}
                        <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()} className="fixed z-50 inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[95vw] md:max-w-2xl md:max-h-[85vh]">

                            {/* Mobile Modal - Bottom Sheet Style */}
                            <div className="md:hidden glass-card rounded-t-2xl border border-gray-700 shadow-2xl flex flex-col max-h-[85vh]">
                                {/* Drag Handle */}
                                <div className="flex justify-center py-3 border-b border-gray-700">
                                    <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
                                </div>

                                {/* Header */}
                                <div className={`sticky top-0 z-10 px-4 py-3 border-b border-gray-700 ${selectedStep.bgColor} flex items-center justify-between`}>
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${selectedStep.color} flex items-center justify-center text-white flex-shrink-0`}>
                                            {selectedStep.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <span className="text-[10px] text-brand-accent font-semibold uppercase">Step {selectedStep.num}</span>
                                            <h3 className="text-sm font-bold text-white truncate">{selectedStep.title}</h3>
                                        </div>
                                    </div>
                                    <button onClick={closeModal} className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 flex-shrink-0">
                                        <X size={14} />
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
                                    {/* Overview */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Overview</h4>
                                        <p className="text-gray-300 text-xs leading-relaxed">{selectedStep.longDesc}</p>
                                    </div>

                                    {/* Activities */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Key Activities</h4>
                                        <div className="space-y-1.5">
                                            {selectedStep.details.map((detail, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <CheckCircle size={10} className={`text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text mt-0.5 flex-shrink-0`} />
                                                    <span className="text-xs text-gray-300">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Info Cards */}
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="glass-card p-2.5 rounded-lg border border-gray-700 text-center">
                                            <Calendar size={12} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                            <p className="text-xs font-bold text-white">{selectedStep.duration}</p>
                                            <p className="text-[10px] text-gray-500">Duration</p>
                                        </div>
                                        <div className="glass-card p-2.5 rounded-lg border border-gray-700 text-center">
                                            <Settings size={12} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                            <p className="text-xs font-bold text-white">{selectedStep.deliverables.length}</p>
                                            <p className="text-[10px] text-gray-500">Deliverables</p>
                                        </div>
                                        <div className="glass-card p-2.5 rounded-lg border border-gray-700 text-center">
                                            <Users size={12} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                            <p className="text-xs font-bold text-white">{selectedStep.team.length}</p>
                                            <p className="text-[10px] text-gray-500">Team</p>
                                        </div>
                                    </div>

                                    {/* Team Tags - Horizontal Scroll */}
                                    <div>
                                        <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Team</h4>
                                        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                                            {selectedStep.team.map((member, i) => (
                                                <span key={i} className="px-2.5 py-1 bg-gray-800/60 rounded-full text-[10px] text-gray-300 border border-gray-700 whitespace-nowrap">
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Fixed Bottom Navigation */}
                                <div className="sticky bottom-0 z-10 bg-gray-900/95 backdrop-blur border-t border-gray-700 px-4 py-2.5">
                                    {/* Step Dots */}
                                    <div className="flex justify-center gap-1.5 mb-2">
                                        {steps.map((_, i) => (
                                            <button key={i} onClick={() => { setCurrentStepIndex(i); setSelectedStep(steps[i]); }} className={`h-1.5 rounded-full transition-all flex-shrink-0 ${i === currentStepIndex ? `bg-gradient-to-r ${selectedStep.color} w-5` : i < currentStepIndex ? 'bg-brand-accent w-1.5' : 'bg-gray-600 w-1.5'}`} />
                                        ))}
                                    </div>
                                    {/* Nav Buttons */}
                                    <div className="flex items-center justify-between">
                                        <button onClick={prevStep} disabled={currentStepIndex === 0} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-medium ${currentStepIndex === 0 ? 'text-gray-600' : 'text-gray-300 bg-gray-800'}`}>
                                            <ChevronLeft size={12} /> Prev
                                        </button>
                                        <span className="text-[10px] text-gray-500">{currentStepIndex + 1}/{steps.length}</span>
                                        <button onClick={nextStep} disabled={currentStepIndex === steps.length - 1} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-medium ${currentStepIndex === steps.length - 1 ? 'text-gray-600' : `text-white bg-gradient-to-r ${selectedStep.color}`}`}>
                                            Next <ChevronRight size={12} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Modal - Sidebar + Content */}
                            <div className="hidden md:flex glass-card rounded-2xl border border-gray-700 shadow-2xl overflow-hidden max-h-[85vh]">
                                {/* Sidebar */}
                                <div className="w-48 bg-gray-900/40 border-r border-gray-700 p-3 flex flex-col">
                                    <h4 className="text-xs font-bold text-white mb-3 px-1">Steps</h4>
                                    <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                                        {steps.map((step, i) => (
                                            <button key={step.id} onClick={() => { setSelectedStep(step); setCurrentStepIndex(i); }} className={`w-full text-left p-2 rounded-lg transition-all flex items-center gap-2 ${i === currentStepIndex ? `${step.bgColor} ${step.borderColor} border` : 'hover:bg-gray-800/40'}`}>
                                                <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${i === currentStepIndex ? `bg-gradient-to-br ${step.color} text-white` : i < currentStepIndex ? 'bg-brand-accent/20 text-brand-accent' : 'bg-gray-700 text-gray-400'}`}>
                                                    {i < currentStepIndex ? <CheckCircle size={10} /> : step.num}
                                                </div>
                                                <span className={`text-[10px] font-medium truncate ${i === currentStepIndex ? 'text-white' : 'text-gray-400'}`}>{step.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {/* Progress */}
                                    <div className="mt-2 px-1">
                                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div className={`h-full bg-gradient-to-r ${selectedStep.color} transition-all duration-300`} style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    {/* Header */}
                                    <div className={`p-4 border-b border-gray-700 ${selectedStep.bgColor} flex items-center justify-between`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${selectedStep.color} flex items-center justify-center text-white`}>
                                                {selectedStep.icon}
                                            </div>
                                            <div>
                                                <span className="text-[10px] text-brand-accent font-semibold uppercase">Step {selectedStep.num}</span>
                                                <h3 className="text-base font-bold text-white">{selectedStep.title}</h3>
                                            </div>
                                        </div>
                                        <button onClick={closeModal} className="w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white">
                                            <X size={16} />
                                        </button>
                                    </div>

                                    {/* Scrollable Content */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                        <div>
                                            <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Overview</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{selectedStep.longDesc}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Key Activities</h4>
                                            <div className="grid grid-cols-2 gap-1.5">
                                                {selectedStep.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-300">
                                                        <CheckCircle size={10} className={`text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text flex-shrink-0`} />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="glass-card p-3 rounded-lg border border-gray-700 text-center">
                                                <Calendar size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                                <p className="text-sm font-bold text-white">{selectedStep.duration}</p>
                                                <p className="text-[10px] text-gray-500">Duration</p>
                                            </div>
                                            <div className="glass-card p-3 rounded-lg border border-gray-700 text-center">
                                                <Settings size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                                <p className="text-sm font-bold text-white">{selectedStep.deliverables.length}</p>
                                                <p className="text-[10px] text-gray-500">Deliverables</p>
                                            </div>
                                            <div className="glass-card p-3 rounded-lg border border-gray-700 text-center">
                                                <Users size={14} className={`mx-auto mb-1 text-transparent bg-gradient-to-r ${selectedStep.color} bg-clip-text`} />
                                                <p className="text-sm font-bold text-white">{selectedStep.team.length}</p>
                                                <p className="text-[10px] text-gray-500">Team</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-semibold text-brand-accent uppercase tracking-wider mb-1.5">Team</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {selectedStep.team.map((member, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-gray-800/60 rounded-full text-[10px] text-gray-300 border border-gray-700">{member}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Nav */}
                                    <div className="p-3 border-t border-gray-700 bg-gray-900/30">
                                        <div className="flex items-center justify-between">
                                            <button onClick={prevStep} disabled={currentStepIndex === 0} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${currentStepIndex === 0 ? 'text-gray-600' : 'text-gray-300 hover:bg-gray-800'}`}>
                                                <ChevronLeft size={14} /> Previous
                                            </button>
                                            <div className="flex gap-1">
                                                {steps.map((_, i) => (
                                                    <button key={i} onClick={() => { setCurrentStepIndex(i); setSelectedStep(steps[i]); }} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentStepIndex ? `bg-gradient-to-r ${selectedStep.color} w-4` : i < currentStepIndex ? 'bg-brand-accent' : 'bg-gray-600'}`} />
                                                ))}
                                            </div>
                                            <button onClick={nextStep} disabled={currentStepIndex === steps.length - 1} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${currentStepIndex === steps.length - 1 ? 'text-gray-600' : `text-white bg-gradient-to-r ${selectedStep.color} hover:opacity-90`}`}>
                                                Next <ChevronRight size={14} />
                                            </button>
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

export default Process;