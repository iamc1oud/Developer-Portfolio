"use client";

import HeroSection from '@/components/home/HeroSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';

export default function HomePage() {
  return (
    <motion.div 
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col"
    >
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </motion.div>
  );
}