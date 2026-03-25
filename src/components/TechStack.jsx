import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Server, Smartphone, Cloud, Database, Shield,
    Zap, CheckCircle2, X, ArrowRight, Sparkles, GitBranch, Workflow
} from 'lucide-react';

const TechStack = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend');
    const [hoveredNode, setHoveredNode] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const categories = [
        { id: 'Frontend', icon: <Code2 size={18} />, color: "from-blue-500 to-cyan-500", circleColor: "#3b82f6" },
        { id: 'Backend', icon: <Server size={18} />, color: "from-green-500 to-emerald-500", circleColor: "#22c55e" },
        { id: 'Mobile', icon: <Smartphone size={18} />, color: "from-purple-500 to-pink-500", circleColor: "#a855f7" },
        { id: 'Cloud', icon: <Cloud size={18} />, color: "from-orange-500 to-amber-500", circleColor: "#f97316" },
        { id: 'Database', icon: <Database size={18} />, color: "from-red-500 to-rose-500", circleColor: "#ef4444" },
        { id: 'Security', icon: <Shield size={18} />, color: "from-indigo-500 to-violet-500", circleColor: "#6366f1" },
    ];

    const stacks = {
        Frontend: {
            description: "Building responsive & visually engaging user interfaces",
            // Mobile: tighter spacing | Desktop: wider snake
            nodes: [
                { id: 'html', name: "HTML5", level: 100, x: 10, y: 50, mx: 12, my: 45 },
                { id: 'css', name: "CSS3", level: 100, x: 24, y: 35, mx: 26, my: 55 },
                { id: 'js', name: "JS", level: 95, x: 38, y: 50, mx: 40, my: 45 },
                { id: 'ts', name: "TS", level: 90, x: 52, y: 35, mx: 54, my: 55 },
                { id: 'react', name: "React", level: 95, x: 66, y: 50, mx: 68, my: 45 },
                { id: 'next', name: "Next", level: 90, x: 80, y: 35, mx: 82, my: 55 },
                { id: 'tailwind', name: "Tailwind", level: 95, x: 94, y: 50, mx: 96, my: 45 },
            ],
            connections: [
                { from: 'html', to: 'css' }, { from: 'css', to: 'js' },
                { from: 'js', to: 'ts' }, { from: 'ts', to: 'react' },
                { from: 'react', to: 'next' }, { from: 'next', to: 'tailwind' },
            ]
        },
        Backend: {
            description: "Secure, scalable & optimized server-side solutions",
            nodes: [
                { id: 'node', name: "Node", level: 95, x: 12, y: 50, mx: 14, my: 45 },
                { id: 'python', name: "Python", level: 90, x: 32, y: 35, mx: 34, my: 55 },
                { id: 'php', name: "PHP", level: 90, x: 52, y: 50, mx: 54, my: 45 },
                { id: 'laravel', name: "Laravel", level: 90, x: 72, y: 35, mx: 74, my: 55 },
                { id: 'api', name: "API", level: 95, x: 92, y: 50, mx: 94, my: 45 },
            ],
            connections: [
                { from: 'node', to: 'python' }, { from: 'python', to: 'php' },
                { from: 'php', to: 'laravel' }, { from: 'laravel', to: 'api' },
            ]
        },
        Mobile: {
            description: "Cross-platform apps with native-like performance",
            nodes: [
                { id: 'flutter', name: "Flutter", level: 95, x: 15, y: 50, mx: 18, my: 45 },
                { id: 'rn', name: "RN", level: 90, x: 40, y: 35, mx: 43, my: 55 },
                { id: 'swift', name: "Swift", level: 85, x: 65, y: 50, mx: 68, my: 45 },
                { id: 'kotlin', name: "Kotlin", level: 85, x: 88, y: 35, mx: 91, my: 55 },
            ],
            connections: [
                { from: 'flutter', to: 'rn' }, { from: 'rn', to: 'swift' },
                { from: 'swift', to: 'kotlin' },
            ]
        },
        Cloud: {
            description: "Reliable infrastructure for scalability & uptime",
            nodes: [
                { id: 'aws', name: "AWS", level: 95, x: 14, y: 50, mx: 17, my: 45 },
                { id: 'gcp', name: "GCP", level: 85, x: 38, y: 35, mx: 41, my: 55 },
                { id: 'docker', name: "Docker", level: 90, x: 62, y: 50, mx: 65, my: 45 },
                { id: 'k8s', name: "K8s", level: 80, x: 88, y: 35, mx: 91, my: 55 },
            ],
            connections: [
                { from: 'aws', to: 'gcp' }, { from: 'gcp', to: 'docker' },
                { from: 'docker', to: 'k8s' },
            ]
        },
        Database: {
            description: "Efficient data storage & management solutions",
            nodes: [
                { id: 'mysql', name: "MySQL", level: 95, x: 12, y: 50, mx: 15, my: 45 },
                { id: 'postgres', name: "Postgres", level: 90, x: 36, y: 35, mx: 39, my: 55 },
                { id: 'mongo', name: "Mongo", level: 90, x: 60, y: 50, mx: 63, my: 45 },
                { id: 'firebase', name: "Firebase", level: 85, x: 86, y: 35, mx: 89, my: 55 },
            ],
            connections: [
                { from: 'mysql', to: 'postgres' }, { from: 'postgres', to: 'mongo' },
                { from: 'mongo', to: 'firebase' },
            ]
        },
        Security: {
            description: "Enterprise-grade security & performance optimization",
            nodes: [
                { id: 'ssl', name: "SSL", level: 100, x: 15, y: 50, mx: 18, my: 45 },
                { id: 'oauth', name: "OAuth", level: 90, x: 40, y: 35, mx: 43, my: 55 },
                { id: 'jwt', name: "JWT", level: 95, x: 65, y: 50, mx: 68, my: 45 },
                { id: 'apisec', name: "API Sec", level: 90, x: 88, y: 35, mx: 91, my: 55 },
            ],
            connections: [
                { from: 'ssl', to: 'oauth' }, { from: 'oauth', to: 'jwt' },
                { from: 'jwt', to: 'apisec' },
            ]
        },
    };

    // Animation variants
    const nodeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1, scale: 1,
            transition: { delay: i * 0.15, type: "spring", stiffness: 200, damping: 15 }
        }),
        hover: { scale: 1.15, transition: { duration: 0.2 } }
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
    };

    // Generate curved path - mobile uses tighter curve
    const generateCurve = (x1, y1, x2, y2, mobile = false) => {
        const midX = (x1 + x2) / 2;
        const curveHeight = mobile ? 8 : 15; // Tighter curve on mobile
        const midY = (y1 + y2) / 2 - curveHeight;
        return `M ${x1} ${y1} Q ${midX} ${midY}, ${x2} ${y2}`;
    };

    const currentStack = stacks[activeCategory];
    const currentColor = categories.find(c => c.id === activeCategory)?.circleColor || "#3b82f6";

    return (
        <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-primary/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-semibold mb-4 border border-brand-primary/20">
                        Our Technology
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Technology <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Stack</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
                        Modern, scalable & reliable technologies for high-performance digital solutions.
                    </p>
                </motion.div>

                {/* Category Tabs - Centered & Scrollable */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-8 md:mb-10">
                    <div className="flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${activeCategory === cat.id
                                        ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                                        : 'glass-card text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                                    }`}
                            >
                                {cat.icon}
                                <span>{cat.id}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Active Category Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-10 md:mb-14"
                    >
                        {/* Description */}
                        <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mx-auto mb-6 md:mb-8 px-2">
                            {currentStack?.description}
                        </p>

                        {/* SNAKE CONNECTED CIRCLES - CENTERED & RESPONSIVE */}
                        <div className="relative w-full flex justify-center">
                            {/* Desktop: Full SVG */}
                            <div className="hidden md:block w-full max-w-4xl h-64 relative">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet">
                                    {/* Connection Lines */}
                                    {currentStack?.connections.map((conn, index) => {
                                        const fromNode = currentStack.nodes.find(n => n.id === conn.from);
                                        const toNode = currentStack.nodes.find(n => n.id === conn.to);
                                        if (!fromNode || !toNode) return null;
                                        const path = generateCurve(fromNode.x, fromNode.y, toNode.x, toNode.y, false);
                                        return (
                                            <g key={`line-${index}`}>
                                                <motion.path d={path} fill="none" stroke={currentColor} strokeWidth="0.4" className="opacity-40" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                                                <motion.path d={path} fill="none" stroke={currentColor} strokeWidth="1" className="opacity-10 blur-[0.5px]" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} />
                                            </g>
                                        );
                                    })}
                                    {/* Animated Flow Dots */}
                                    {currentStack?.connections.map((conn, index) => {
                                        const fromNode = currentStack.nodes.find(n => n.id === conn.from);
                                        const toNode = currentStack.nodes.find(n => n.id === conn.to);
                                        if (!fromNode || !toNode) return null;
                                        const path = generateCurve(fromNode.x, fromNode.y, toNode.x, toNode.y, false);
                                        return (
                                            <motion.circle key={`flow-${index}`} r="0.8" fill={currentColor} className="opacity-60" initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }} style={{ offsetPath: `path('${path}')` }} />
                                        );
                                    })}
                                    {/* Technology Nodes */}
                                    {currentStack?.nodes.map((node, index) => (
                                        <motion.g key={node.id} custom={index} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover="hover" onHoverStart={() => setHoveredNode(node.id)} onHoverEnd={() => setHoveredNode(null)} className="cursor-pointer">
                                            <motion.circle cx={node.x} cy={node.y} r="7" fill="none" stroke={currentColor} strokeWidth="0.3" className="opacity-0" whileHover={{ opacity: 0.5, r: 8 }} transition={{ duration: 0.2 }} />
                                            <motion.circle cx={node.x} cy={node.y} r="5.5" fill="#0f172a" stroke={currentColor} strokeWidth="0.5" className="transition-all duration-200" whileHover={{ r: 6.5, stroke: "#fff", filter: "drop-shadow(0 0 8px rgba(59,130,246,0.6))" }} />
                                            <circle cx={node.x} cy={node.y} r="5" fill="none" stroke={currentColor} strokeWidth="0.4" strokeDasharray={`${node.level * 0.314} 31.4`} transform={`rotate(-90 ${node.x} ${node.y})`} className="opacity-60" />
                                            <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[3px] font-semibold pointer-events-none select-none">{node.name}</text>
                                            <AnimatePresence>
                                                {hoveredNode === node.id && (
                                                    <motion.g initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: -8 }} exit={{ opacity: 0, y: -5 }}>
                                                        <rect x={node.x - 8} y={node.y - 18} width="16" height="5" rx="1" fill="#1e293b" stroke={currentColor} strokeWidth="0.2" />
                                                        <text x={node.x} y={node.y - 15} textAnchor="middle" className="fill-white text-[2px] font-medium">{node.level}%</text>
                                                    </motion.g>
                                                )}
                                            </AnimatePresence>
                                        </motion.g>
                                    ))}
                                </svg>
                            </div>

                            {/* Mobile: Centered Compact SVG */}
                            <div className="md:hidden w-full flex justify-center">
                                <svg className="w-full max-w-sm h-40" viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet">
                                    {/* Connection Lines - Mobile */}
                                    {currentStack?.connections.map((conn, index) => {
                                        const fromNode = currentStack.nodes.find(n => n.id === conn.from);
                                        const toNode = currentStack.nodes.find(n => n.id === conn.to);
                                        if (!fromNode || !toNode) return null;
                                        const path = generateCurve(fromNode.mx, fromNode.my, toNode.mx, toNode.my, true);
                                        return (
                                            <g key={`line-m-${index}`}>
                                                <motion.path d={path} fill="none" stroke={currentColor} strokeWidth="0.5" className="opacity-50" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                                            </g>
                                        );
                                    })}
                                    {/* Technology Nodes - Mobile */}
                                    {currentStack?.nodes.map((node, index) => (
                                        <motion.g key={`node-m-${node.id}`} custom={index} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} onHoverStart={() => setHoveredNode(node.id)} onHoverEnd={() => setHoveredNode(null)} className="cursor-pointer">
                                            {/* Main Circle - Mobile */}
                                            <motion.circle cx={node.mx} cy={node.my} r="6" fill="#0f172a" stroke={currentColor} strokeWidth="0.6" className="transition-all" whileTap={{ scale: 1.2 }} />
                                            {/* Level Ring - Mobile */}
                                            <circle cx={node.mx} cy={node.my} r="5.2" fill="none" stroke={currentColor} strokeWidth="0.5" strokeDasharray={`${node.level * 0.327} 32.7`} transform={`rotate(-90 ${node.mx} ${node.my})`} className="opacity-70" />
                                            {/* Tech Name - Mobile (larger text) */}
                                            <text x={node.mx} y={node.my} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[3.5px] font-bold pointer-events-none select-none">{node.name}</text>
                                            {/* Level on Tap */}
                                            <AnimatePresence>
                                                {hoveredNode === node.id && (
                                                    <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                                                        <circle cx={node.mx} cy={node.my} r="9" fill="rgba(30,41,59,0.95)" stroke={currentColor} strokeWidth="0.3" />
                                                        <text x={node.mx} y={node.my} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[3px] font-bold">{node.level}%</text>
                                                    </motion.g>
                                                )}
                                            </AnimatePresence>
                                        </motion.g>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        {/* Mobile: Simple List Fallback (Optional - Uncomment if needed) */}
                        {/* {isMobile && (
                            <div className="mt-6 space-y-3 px-2">
                                {currentStack?.nodes.map((node, index) => (
                                    <motion.div key={node.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-3 glass-card rounded-xl border border-gray-800">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: `radial-gradient(circle at 30% 30%, ${currentColor}, #0f172a)`, border: `2px solid ${currentColor}` }}>
                                            {node.name.slice(0, 2).toUpperCase()}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white text-sm font-medium">{node.name}</p>
                                            <div className="h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                                                <div className="h-full rounded-full" style={{ width: `${node.level}%`, background: `linear-gradient(to right, ${currentColor}, #22d3ee)` }} />
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-400">{node.level}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        )} */}
                    </motion.div>
                </AnimatePresence>

                {/* Integration Cloud */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-5 md:p-7 rounded-2xl border border-gray-800 mb-10 md:mb-14">
                    <div className="text-center mb-5 md:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3">
                            <GitBranch size={14} />
                            Integrations
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">Connected Ecosystem</h3>
                        <p className="text-gray-400 text-xs md:text-sm">Seamlessly integrated with popular tools</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center md:justify-start">
                        {["Stripe", "Google", "AWS", "Slack", "GitHub", "Figma", "Vercel", "MongoDB"].map((tool, i) => (
                            <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-xs whitespace-nowrap hover:border-brand-primary hover:text-brand-primary transition-colors cursor-default">
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Why This Stack */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-14">
                    {[
                        { icon: <Zap size={18} />, title: "Blazing Fast", desc: "Optimized for performance", color: "from-yellow-500 to-orange-500" },
                        { icon: <Workflow size={18} />, title: "Developer Friendly", desc: "Clean code & docs", color: "from-green-500 to-emerald-500" },
                        { icon: <Sparkles size={18} />, title: "Future-Proof", desc: "Modern & scalable", color: "from-purple-500 to-pink-500" },
                    ].map((item, i) => (
                        <motion.div key={i} whileHover={{ y: -3 }} className="glass-card p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0`}>{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                                <p className="text-gray-400 text-xs">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <p className="text-gray-400 text-sm mb-4">Need a custom technology solution?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-full text-sm font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105">
                        Get Technical Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;