"use client";

import SectionTitle from '@/components/shared/SectionTitle';
import SkillBadge from '@/components/shared/SkillBadge';
import { Code, Database, Cloud, GitBranch, Terminal, Server, Layout, Layers, Globe, Palette, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { icon: Code, name: 'JavaScript', proficiency: 'Expert' as const },
  { icon: Code, name: 'TypeScript', proficiency: 'Expert' as const },
  { icon: Code, name: 'HTML5/CSS3', proficiency: 'Expert' as const },
  { icon: Layout, name: 'React', proficiency: 'Expert' as const },
  { icon: Layout, name: 'Next.js', proficiency: 'Expert' as const },
  { icon: Layout, name: 'Vue.js', proficiency: 'Advanced' as const },
  { icon: Palette, name: 'Tailwind CSS', proficiency: 'Expert' as const },
  { icon: Palette, name: 'Styled Components', proficiency: 'Advanced' as const },
  { icon: Palette, name: 'Framer Motion', proficiency: 'Advanced' as const },
  { icon: Server, name: 'Node.js', proficiency: 'Expert' as const },
  { icon: Server, name: 'Express', proficiency: 'Expert' as const },
  { icon: Database, name: 'MongoDB', proficiency: 'Advanced' as const },
  { icon: Database, name: 'PostgreSQL', proficiency: 'Advanced' as const },
  { icon: Database, name: 'Prisma', proficiency: 'Advanced' as const },
  { icon: Cloud, name: 'AWS', proficiency: 'Intermediate' as const },
  { icon: Cloud, name: 'Vercel', proficiency: 'Advanced' as const },
  { icon: Cloud, name: 'Netlify', proficiency: 'Advanced' as const },
  { icon: GitBranch, name: 'Git', proficiency: 'Expert' as const },
  { icon: Terminal, name: 'CI/CD', proficiency: 'Intermediate' as const },
  { icon: Layers, name: 'REST APIs', proficiency: 'Expert' as const },
  { icon: Layers, name: 'GraphQL', proficiency: 'Advanced' as const },
  { icon: Globe, name: 'Responsive Design', proficiency: 'Expert' as const },
  { icon: Cpu, name: 'Testing (Jest/RTL)', proficiency: 'Advanced' as const },
  { icon: Zap, name: 'Performance Optimization', proficiency: 'Advanced' as const },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-card dark:bg-card overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container mx-auto px-4"
      >
        <SectionTitle>My Skills</SectionTitle>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn('up', 0.05 * index)}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <SkillBadge icon={skill.icon} name={skill.name} proficiency={skill.proficiency} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </motion.div>
    </section>
  );
}