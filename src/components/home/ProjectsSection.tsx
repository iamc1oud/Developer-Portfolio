"use client";

import SectionTitle from '@/components/shared/SectionTitle';
import ProjectCard, { type Project } from '@/components/shared/ProjectCard';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include dark mode, animations, and a contact form with validation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website screenshot',
    liveDemoUrl: 'https://ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce businesses with analytics, inventory management, and order processing capabilities.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard interface',
    liveDemoUrl: 'https://dashboard-demo.ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/ecommerce-dashboard',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A full-stack task management application with features like drag-and-drop task organization, priority levels, due dates, and team collaboration.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task management app',
    liveDemoUrl: 'https://tasks.ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/task-manager',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
  },
  {
    id: '4',
    title: 'Weather Forecast App',
    description: 'A weather application that provides current conditions and 5-day forecasts for any location. Features include geolocation, interactive maps, and severe weather alerts.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather app interface',
    liveDemoUrl: 'https://weather.ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/weather-app',
    tags: ['React', 'OpenWeatherMap API', 'Leaflet', 'CSS Modules', 'PWA'],
  },
  {
    id: '5',
    title: 'Recipe Finder',
    description: 'A recipe search application that allows users to find recipes based on ingredients they have. Features include filtering by dietary restrictions, cuisine types, and meal categories.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'recipe app screenshot',
    liveDemoUrl: 'https://recipes.ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/recipe-finder',
    tags: ['Vue.js', 'Vuex', 'Firebase', 'Spoonacular API', 'Tailwind CSS'],
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A full-featured blogging platform with markdown support, comments, user authentication, and a rich text editor for content creation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blog platform screenshot',
    liveDemoUrl: 'https://blog.ajaykumarsingh.dev',
    repoUrl: 'https://github.com/iamc1oud/blog-platform',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'TipTap Editor'],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-background dark:bg-background overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container mx-auto px-4"
      >
        <SectionTitle>Featured Projects</SectionTitle>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}