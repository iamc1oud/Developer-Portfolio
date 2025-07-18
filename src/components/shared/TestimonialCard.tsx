"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
  avatarHint?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
      <CardContent className="p-6 flex-grow flex flex-col">
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="w-8 h-8 text-accent mb-4 transform -scale-x-100" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground italic mb-6 flex-grow"
        >
          &quot;{testimonial.quote}&quot;
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center mt-auto"
        >
          {testimonial.avatarUrl && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="h-12 w-12 mr-4 border-2 border-accent/20">
                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarHint || "person face"} />
                <AvatarFallback>{testimonial.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </motion.div>
          )}
          <div>
            <motion.p 
              whileHover={{ x: 3 }}
              className="font-semibold text-primary"
            >
              {testimonial.author}
            </motion.p>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          </div>
        </motion.div>
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
      </CardContent>
    </Card>
  );
}