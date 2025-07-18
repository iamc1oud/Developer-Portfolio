"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, floatAnimation, staggerContainer, textContainer, letterVariant } from '@/lib/animations';

// Animated text component for letter-by-letter animation
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.span
      variants={textContainer}
      initial="hidden"
      animate="show"
      className="inline-block"
    >
      {Array.from(text).map((letter, index) => (
        <motion.span key={index} variants={letterVariant} className="inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 bg-background dark:bg-background overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-primary mb-4 leading-tight">
            Hi, I&apos;m <motion.span 
              className="text-accent"
              animate={{ 
                color: ['hsl(var(--accent))', 'hsl(var(--primary))', 'hsl(var(--accent))'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <AnimatedText text="Ajay Kumar Singh" />
            </motion.span>
          </h1>
          
          <motion.p 
            variants={fadeIn('right', 0.4)}
            className="text-xl text-foreground mb-2"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          
          <motion.p 
            variants={fadeIn('right', 0.5)}
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0"
          >
            I build accessible, user-friendly web applications with modern technologies. Passionate about creating elegant solutions that combine beautiful design with efficient code.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300">
                <Link href="/#projects">View My Work</Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                <Link href="/#contact">
                  Get In Touch 
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 0.7)}
            className="flex gap-4 justify-center md:justify-start"
          >
            {[
              { icon: <GithubIcon size={24} />, href: "https://github.com/iamc1oud" },
              { icon: <LinkedinIcon size={24} />, href: "https://linkedin.com/in/ajaykumarsingh" },
              { icon: <TwitterIcon size={24} />, href: "https://twitter.com/ajaykumarsingh" }
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.div
            variants={floatAnimation}
            animate="show"
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-accent"
          >
            <Image
              src="https://placehold.co/400x400.png"
              alt="Professional Headshot of Ajay Kumar Singh"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-110"
              data-ai-hint="professional headshot"
            />
            
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, transparent, rgba(var(--accent), 0.5), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}