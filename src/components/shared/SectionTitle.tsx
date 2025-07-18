"use client";

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { textVariant } from '@/lib/animations';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <motion.h2
      variants={textVariant()}
      initial="hidden"
      animate="show"
      className={cn(
        "text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center relative",
        className
      )}
      {...props}
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute left-1/2 -bottom-3 h-1 bg-accent transform -translate-x-1/2"
      />
    </motion.h2>
  );
}