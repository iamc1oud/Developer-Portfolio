"use client";

import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialCard, { type Testimonial } from '@/components/shared/TestimonialCard';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Abhishek is an exceptional developer who transformed our vision into reality. His attention to detail and ability to solve complex problems made our project a success. The website he built for us is not only beautiful but also performs flawlessly.",
    author: 'Sarah Johnson',
    title: 'CEO, DesignHub',
    avatarUrl: 'https://placehold.co/100x100.png?text=SJ',
    avatarHint: "woman with glasses"
  },
  {
    id: '2',
    quote: "Working with Abhishek was a game-changer for our startup. He understood our needs perfectly and delivered a product that exceeded our expectations. His technical expertise and communication skills made the entire process smooth and enjoyable.",
    author: 'Michael Chen',
    title: 'Founder, TechStart',
    avatarUrl: 'https://placehold.co/100x100.png?text=MC',
    avatarHint: "asian man smiling"
  },
  {
    id: '3',
    quote: "Abhishek's work on our e-commerce platform significantly improved our conversion rates. His focus on user experience and performance optimization made a real difference. He's not just a developer but a true partner in our success.",
    author: 'Emily Rodriguez',
    title: 'Marketing Director, ShopEasy',
    avatarUrl: 'https://placehold.co/100x100.png?text=ER',
    avatarHint: "latina woman professional"
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-background dark:bg-background overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <SectionTitle>Client Testimonials</SectionTitle>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}