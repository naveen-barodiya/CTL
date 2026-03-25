import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    // Handle scroll + active link detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);

            // Detect active section
            const sections = ['about', 'services', 'portfolio', 'process', 'contact'];
            const scrollPos = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
        { name: 'Process', href: '#process', id: 'process' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Account for navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 py-3'
                    : 'bg-gray-900/40 backdrop-blur-md border-b border-white/5 py-4'
                }`}
        >
            {/* Subtle Top Glow */}
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-brand-primary via-brand-accent to-brand-primary p-0.5 shadow-lg shadow-brand-primary/25">
                            <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                                <Sparkles size={16} className="text-brand-accent" />
                            </div>
                        </div>
                        <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:via-brand-accent transition-all duration-300">
                            Custom Tech Labs
                        </span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeLink === link.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {link.name}

                                {/* Active Indicator */}
                                {activeLink === link.id && (
                                    <motion.span
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Hover Glow */}
                                <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 opacity-0 transition-opacity duration-300 ${activeLink !== link.id ? 'group-hover:opacity-100' : ''}`} />
                            </motion.a>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-sm font-semibold rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown - Glass Effect */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-white/10 border-b border-white/5">
                            <div className="container mx-auto px-4 py-4 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${activeLink === link.id
                                                ? 'bg-brand-primary/10 border border-brand-primary/30 text-white'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="font-medium">{link.name}</span>
                                        {activeLink === link.id && (
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
                                        )}
                                    </motion.a>
                                ))}

                                {/* Mobile CTA */}
                                <motion.a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="flex items-center justify-center px-4 py-3 mt-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl shadow-lg shadow-brand-primary/25"
                                >
                                    Get Started
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;