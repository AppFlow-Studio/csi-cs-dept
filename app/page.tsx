'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Globe,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { ContentSection } from '@/components/info-card';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { About3 } from '@/components/ui/about-3';
import { LinkPreview } from '@/components/ui/link-preview';
import CSIProgramsPage from '@/components/csi-program-page';
import DepartmentHeadSection from '@/components/deparment-head';
import DepartmentNewsSection from '@/components/news';
import Link from 'next/link';

// --- Components ---


const HeroSection = () => {
  // Array of all hero images
  const heroImages = [
    '/home-hero/csi-home-0.jpg',
    '/home-hero/csi-home-1.jpg',
    '/home-hero/csi-home-2.png',
    '/home-hero/csi-home-3.jpg',
    '/home-hero/csi-home-4.jpg',
    '/home-hero/csi-home-5.jpg',
    '/home-hero/csi-home-6.jpg',
    '/home-hero/csi-home-7.jpg',
    '/home-hero/csi-home-8.jpg',
    '/home-hero/csi-home-9.jpg',
    '/home-hero/csi-home-11.jpg',
    '/home-hero/csi-home-12.jpg',
    '/home-hero/csi-home-13.jpg',
    '/home-hero/csi-home-14.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full max-w-[1600px] mx-auto mt-6 md:px-6 mb-12 group rounded-xl">
      {/* Main Banner Background */}
      <div className="relative w-full h-[400px] md:h-[550px] bg-linear-to-r from-[#7abde8] to-cyan-600 overflow-hidden md:shadow-lg rounded-xl">

        <div className="absolute right-0 top-0 h-full w-1/2 lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt="CSI Campus"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="w-full h-full object-cover object-center mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to left, black 50%, transparent 100%)' }}
            />
          </AnimatePresence>

          {/* Gradient overlay for smooth transition effect */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#7abde8]/20 pointer-events-none" />
        </div>
      </div>

      {/* Floating Content Card (Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-4 right-4 md:left-16 md:top-1/2 -translate-y-1/2 md:w-[440px] bg-white p-8 shadow-xl z-10 rounded-xl overflow-hidden"
      >
        <div className="relative">
          {/* Logo Background Watermark */}
          <div className="absolute -top-6 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <img
              src="/csi-blue-logo.png"
              alt="CSI Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo at Top */}
          <div className="mb-4 flex items-center gap-3 relative z-10">
            <img
              src="/csi-blue-logo.png"
              alt="CUNY College of Staten Island"
              className="h-10 w-auto object-contain"
            />
            <div className="h-px flex-1 bg-linear-to-r from-[#7abde8] to-transparent"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
            Master tomorrow's technology today
          </h2>
          <p className="text-gray-600 mb-6 text-base relative z-10">
            Join a community of innovators at CSI. From AI to Cybersecurity, build the skills needed for the modern digital landscape.
          </p>

          <div className="flex gap-4 relative z-10">
            <Link href="/courses" className="bg-[#2d2f31] text-white font-bold px-6 py-3 hover:bg-black transition-colors rounded-lg">
              View Programs
            </Link>
            <Link href="/resources" className="bg-white border border-black text-black font-bold px-6 py-3 hover:bg-gray-100 transition-colors rounded-lg">
              Learn AI
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};




// --- Main Page Layout ---
export default function CSIDepartmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2f31] max-w-8xl mx-auto">

      <main className='pt-24 '>
        <HeroSection />
        <ContentSection />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6"
        >
          <div className="flex items-start justify-start max-w-8xl mx-auto">
            <motion.a
              href="https://www.facebook.com/computerscienceatcsi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-start gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm md:text-base">Follow us on Facebook</span>
              <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </div>
        </motion.section>

      </main>

      <section className='max-w-8xl mx-auto px-6'>
        <About3
          title="About Us"
          description={
            <>
              The Computer Science Department offers programs that prepare students for careers as computer professionals and/or for continued study. The major provides a broad-based background in computer science and includes courses in computer software, computer systems, mathematics, network security, and computer hardware. We are committed to offering courses that stay current with changing technologies. Our BS in Computer Science degree is accredited by the Computing Accreditation Commission of <strong><LinkPreview url="http://www.abet.org" className="underline">the Computing Accreditation Commission of ABET</LinkPreview></strong>.
            </>
          }
          mainImage={{
            src: "/csi1n.png",
            alt: "placeholder",
          }}
          secondaryImage={{
            src: "/csi-graduation.jpg",
            alt: "placeholder",
          }}
          breakout={{
            src: "/cunycsi.png",
            alt: "CUNY College of Staten Island Logo",
            title: "ABET-Accredited Computer Science Programs",
            description:
              "Our Bachelor of Science in Computer Science is accredited by ABET, ensuring the highest standards in computer science education. Join a program that prepares you for successful careers in technology, research, and innovation.",
            buttonText: "Explore Our Programs",
            buttonUrl: "/undergraduate",
          }}
          companiesTitle="Our students go on to work at top companies"
          companies={[]}
          achievementsTitle="Where Our Students Build Their Careers"
          achievementsDescription="Our graduates are highly sought after by leading technology companies, securing positions at Fortune 500 firms, innovative startups, and cutting-edge research institutions. Through rigorous academic preparation, hands-on projects, and industry partnerships, we equip our students with the skills and experience needed to excel in today's competitive tech landscape."
          achievements={
            [
              { label: "Graduates Hired", value: "95%" },
              { label: "Top Companies", value: "200+" },
              { label: "Average Starting Salary", value: "$85K+" },
            ]
          }
        />
      </section>

      <CSIProgramsPage />

      <div className='my-12'><DepartmentHeadSection /></div>

      <DepartmentNewsSection />

    </div>
  );
}