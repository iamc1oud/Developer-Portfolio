"use client";

import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail, Code, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn, slideIn, staggerContainer } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-card dark:bg-card overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container mx-auto px-4"
      >
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div 
            variants={fadeIn('right', 0.3)}
            className="md:col-span-1 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20"
            >
              <Image
                src="https://placehold.co/300x300.png"
                alt="Ajay Kumar Singh - About Me"
                layout="fill"
                objectFit="cover"
                data-ai-hint="developer portrait"
              />
              
              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="md:col-span-2"
          >
            <motion.h3 
              variants={fadeIn('up', 0.1)}
              className="text-2xl font-headline font-semibold text-primary mb-4"
            >
              Passionate Web Developer & Designer
            </motion.h3>
            
            <motion.p 
              variants={fadeIn('up', 0.2)}
              className="text-muted-foreground mb-4 leading-relaxed"
            >
              I'm Ajay Kumar Singh, a full stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4+ years of experience in web development, I am adept at translating business requirements into technical solutions.
            </motion.p>
            
            <motion.p 
              variants={fadeIn('up', 0.3)}
              className="text-muted-foreground mb-6 leading-relaxed"
            >
              My approach combines clean code with thoughtful design to build applications that not only work flawlessly but also delight users. I specialize in React, Next.js, Node.js, and modern frontend technologies, with a strong focus on accessibility and performance optimization.
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {[
                {
                  icon: <Code className="h-8 w-8 text-accent mb-2" />,
                  title: "Clean Code",
                  description: "I write maintainable, scalable code following best practices."
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-accent mb-2" />,
                  title: "Problem Solver",
                  description: "I enjoy tackling complex challenges with creative solutions."
                },
                {
                  icon: <Users className="h-8 w-8 text-accent mb-2" />,
                  title: "Collaborative",
                  description: "I thrive in team environments and value open communication."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn(0.1 * index)}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="p-4 bg-background dark:bg-background/20 rounded-lg shadow-md border border-border"
                >
                  {item.icon}
                  <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV 
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <Download className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                  <Link href="mailto:ajaykumar.kumar900@gmail.com">
                    Email Me 
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <Mail className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}