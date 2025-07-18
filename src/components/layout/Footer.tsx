"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon, Code, Heart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="bg-card dark:bg-card border-t border-border mt-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="text-xl font-headline font-bold text-primary hover:text-accent transition-colors">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="h-6 w-6 text-accent" />
                </motion.div>
                <span className="text-accent">Ajay</span>Kumar Singh
              </div>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="flex space-x-6"
          >
            {[
              { href: "/#projects", label: "Projects" },
              { href: "/#skills", label: "Skills" },
              { href: "/#about", label: "About" },
              { href: "/#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                variants={fadeIn('up', 0.1 * index)}
                whileHover={{ y: -3 }}
              >
                <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            {[
              { icon: <GithubIcon size={20} />, href: "https://github.com/iamc1oud", label: "GitHub" },
              { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com/in/ajaykumarsingh", label: "LinkedIn" },
              { icon: <TwitterIcon size={20} />, href: "https://twitter.com/ajaykumarsingh", label: "Twitter" }
            ].map((social, index) => (
              <motion.div
                key={social.href}
                variants={fadeIn('up', 0.1 * index)}
                whileHover={{ y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-accent transition-colors">
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ajay Kumar Singh. All rights reserved.
          </p>
          <motion.p 
            className="text-sm text-muted-foreground flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Built with 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-1"
            >
              <Heart className="h-4 w-4 text-accent" />
            </motion.div> 
            using Next.js & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
      
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px]"
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
    </motion.footer>
  );
}