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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
        { name: 'Process', href: '#process', id: 'process' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    // FIXED: Proper smooth scroll for mobile
    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        // Small delay to let menu close animation start
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                // Calculate position relative to document
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 150);
    };

    // Toggle menu with proper state
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-gray-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30 py-3'
                    : 'bg-gray-900/50 backdrop-blur-md border-b border-white/5 py-4'
                }`}
        >
            {/* Subtle Top Glow */}
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
                }`} />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
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
                                <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 opacity-0 transition-opacity duration-300 ${activeLink !== link.id ? 'group-hover:opacity-100' : ''
                                    }`} />
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

                    {/* Mobile Menu Button - FIXED */}
                    <motion.button
                        onClick={toggleMenu}
                        className="md:hidden relative w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/25 transition-all touch-manipulation z-50"
                        whileTap={{ scale: 0.95 }}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <X size={22} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <Menu size={22} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown - FIXED */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for mobile menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Menu Panel - FIXED positioning & animation */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="md:hidden fixed top-full left-0 right-0 z-45 bg-gray-900/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                        >
                            <div className="container mx-auto px-4 py-5">
                                <nav className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.04 }}
                                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all touch-manipulation min-h-[48px] ${activeLink === link.id
                                                    ? 'bg-brand-primary/15 border border-brand-primary/30 text-white'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                                                }`}
                                        >
                                            <span className="font-medium text-base">{link.name}</span>
                                            {activeLink === link.id && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
                                                />
                                            )}
                                        </motion.a>
                                    ))}

                                    {/* Mobile CTA Button */}
                                    <motion.a
                                        href="#contact"
                                        onClick={(e) => handleNavClick(e, '#contact')}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navLinks.length * 0.04 }}
                                        className="flex items-center justify-center px-4 py-3.5 mt-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all touch-manipulation min-h-[48px]"
                                    >
                                        Get Started
                                    </motion.a>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;