import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ AnimatePresence imported here
import { Globe, Camera, Mail, ArrowUp, CheckCircle2, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Show back-to-top button after scrolling
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const navLinks = {
        Services: [
            { name: "Web Development", href: "#services" },
            { name: "Mobile Apps", href: "#services" },
            { name: "AI Solutions", href: "#services" },
            { name: "System Integration", href: "#services" },
            { name: "UI/UX Design", href: "#services" },
        ],
        Company: [
            { name: "About Us", href: "#about" },
            { name: "Our Process", href: "#process" },
            { name: "Case Studies", href: "#portfolio" },
            { name: "Careers", href: "#contact" },
            { name: "Contact", href: "#contact" },
        ],
        Resources: [
            { name: "Blog", href: "#" },
            { name: "Tech Stack", href: "#techstack" },
            { name: "Documentation", href: "#" },
            { name: "Support", href: "#contact" },
            { name: "API Reference", href: "#" },
        ],
        Legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR Compliance", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "Instagram", icon: <Camera size={18} />, href: "#" },
        { name: "LinkedIn", icon: <Globe size={18} />, href: "#" },
        { name: "Email", icon: <Mail size={18} />, href: "mailto:hello@customtechlabs.com" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <footer id="contact" className="bg-brand-dark relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16">
                    {/* Top Section: Brand + Newsletter */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-14"
                    >
                        {/* Brand Section */}
                        <motion.div variants={itemVariants}>
                            <a href="#" className="inline-block mb-4">
                                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                                    Custom Tech Labs
                                </span>
                            </a>
                            <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 max-w-md">
                                Delivering smart digital solutions for modern businesses. We turn ideas into simple, powerful digital products.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a href="mailto:hello@customtechlabs.com" className="flex items-center gap-3 text-gray-400 hover:text-brand-primary transition-colors group">
                                    <Mail size={16} className="group-hover:text-brand-primary transition-colors" />
                                    <span className="text-sm">hello@customtechlabs.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin size={16} />
                                    <span className="text-sm">USA • India • Global</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary hover:bg-brand-primary/10 transition-all"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Newsletter Section */}
                        <motion.div variants={itemVariants} className="lg:text-right">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Stay Updated</h3>
                            <p className="text-gray-400 text-sm mb-4 md:mb-6 max-w-md lg:ml-auto">
                                Subscribe to our newsletter for tech insights, updates, and exclusive offers.
                            </p>

                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                                        required
                                    />
                                    {isSubscribed && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-accent"
                                        >
                                            <CheckCircle2 size={18} />
                                        </motion.div>
                                    )}
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-5 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-xl font-medium text-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow whitespace-nowrap"
                                >
                                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                                </motion.button>
                            </form>

                            <p className="text-gray-500 text-[10px] md:text-xs mt-3 lg:text-right">
                                We respect your privacy. Unsubscribe anytime.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Links Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-14"
                    >
                        {Object.entries(navLinks).map(([category, links]) => (
                            <motion.div key={category} variants={itemVariants}>
                                <h4 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4">{category}</h4>
                                <ul className="space-y-2 md:space-y-2.5">
                                    {links.map((link, index) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-brand-primary text-xs md:text-sm transition-colors relative group inline-block"
                                            >
                                                {link.name}
                                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent transition-all group-hover:w-full" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-6 md:pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} Custom Tech Labs. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {navLinks.Legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-500 hover:text-brand-primary text-xs md:text-sm transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Venture Info */}
                        <p className="text-gray-500 text-xs md:text-sm text-center md:text-right">
                            A Joint Venture: Laxmaya Technologies & Small Biz Marketing
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white flex items-center justify-center shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-shadow z-50"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;