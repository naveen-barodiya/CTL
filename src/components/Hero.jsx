import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Play,
    CheckCircle2,
    Star,
    Users,
    Rocket,
    Shield,
    Zap,
    Download,
    MessageCircle,
    TrendingUp,
    Award
} from 'lucide-react';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    const stats = [
        { number: "50+", label: "Projects Delivered", icon: <Rocket size={18} /> },
        { number: "95%", label: "Client Satisfaction", icon: <Star size={18} /> },
        { number: "8+", label: "Industries Served", icon: <TrendingUp size={18} /> },
        { number: "24/7", label: "Support Available", icon: <Shield size={18} /> },
    ];

    const features = [
        "Custom-Built Solutions",
        "No Templates or Shortcuts",
        "Strategy + Engineering",
        "User-Friendly by Design"
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwNDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold mb-6 hover:bg-brand-primary/20 transition-colors cursor-pointer"
                    >
                        <Zap size={14} className="fill-brand-primary" />
                        <span>Trusted by 50+ Businesses Worldwide</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        We Turn Ideas Into{" "}
                        <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-gradient">
                            Simple, Powerful
                        </span>
                        <br />
                        Digital Products
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        At Custom Tech Labs USA, we help businesses turn ideas into real, usable digital products
                        that people actually enjoy using. From the first idea to launch and beyond, we work
                        closely with you to make sure the product fits your business, your users, and your future plans.
                    </motion.p>

                    {/* Key Features */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-10"
                    >
                        {features.map((feature, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm"
                            >
                                <CheckCircle2 size={14} className="text-brand-accent" />
                                {feature}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-full font-semibold hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                        >
                            <Play size={18} className="fill-white" />
                            View Our Work
                        </a>

                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-full font-semibold hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                        >
                            <Download size={18} />
                            Download Portfolio
                        </a>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-card p-4 rounded-xl border border-gray-800 group"
                            >
                                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    {stat.icon}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                                    {stat.number}
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Badges / Partners */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16"
                    >
                        <p className="text-gray-500 text-sm mb-6">Trusted by innovative companies</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            {["Aluminate Life", "ANI News", "SteerPOS", "My Eye Origin", "RedPay"].map((brand, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 + index * 0.1 }}
                                    whileHover={{ opacity: 1, scale: 1.05 }}
                                    className="text-gray-400 font-semibold text-lg hover:text-brand-primary transition-colors cursor-pointer"
                                >
                                    {brand}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card p-6 rounded-2xl border border-gray-800 max-w-2xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent flex items-center justify-center text-white">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-white">Ready to Discuss Your Project?</h4>
                                    <p className="text-gray-400 text-sm">Get a free consultation with our experts</p>
                                </div>
                            </div>
                            <a
                                href="#contact"
                                className="whitespace-nowrap px-6 py-3 bg-brand-primary hover:bg-blue-600 text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                            >
                                Book a Call
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-brand-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;