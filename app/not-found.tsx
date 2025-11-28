'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowRight, GraduationCap, BookOpen, Users, Search, FileText } from 'lucide-react';

export default function NotFound() {
    const quickLinks = [
        { name: 'Home', href: '/', icon: Home, description: 'Return to homepage' },
        { name: 'Undergraduate', href: '/undergraduate', icon: GraduationCap, description: 'Undergraduate programs' },
        { name: 'Graduate', href: '/graduate', icon: GraduationCap, description: 'Graduate programs' },
        { name: 'Courses', href: '/courses', icon: BookOpen, description: 'Course catalog' },
        { name: 'Research', href: '/research', icon: Search, description: 'Research areas' },
        { name: 'People', href: '/people', icon: Users, description: 'Faculty & staff' },
        { name: 'Resources', href: '/resources', icon: FileText, description: 'Student resources' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
            <div className="max-w-4xl w-full relative z-10">
                {/* Main 404 Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-3xl md:text-4xl font-bold text-[#2d2f31] mb-4"
                    >
                        Page Not Found
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                    >
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </motion.p>

                    {/* Home Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2f31] hover:bg-black text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Home size={20} />
                                <span>Go to Homepage</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Quick Links Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-[#2d2f31] mb-6 text-center">
                        Popular Pages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                >
                                    <Link href={link.href}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group cursor-pointer"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                                    <Icon size={24} className="text-blue-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-[#2d2f31] mb-1 group-hover:text-blue-600 transition-colors">
                                                        {link.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">{link.description}</p>
                                                </div>
                                                <ArrowRight
                                                    size={18}
                                                    className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all mt-1"
                                                />
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
            >
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </motion.div>
        </div>
    );
}

