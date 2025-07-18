"use client";

import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { shimmerAnimation } from '@/lib/animations';

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export default function SkillBadge({ icon: Icon, name, proficiency }: SkillBadgeProps) {
  // Define colors based on proficiency
  const getProficiencyColor = () => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-accent/10 border-accent/30 hover:border-accent';
      case 'Advanced':
        return 'bg-primary/5 border-primary/20 hover:border-primary/50';
      case 'Intermediate':
        return 'bg-secondary/10 border-secondary/20 hover:border-secondary/50';
      case 'Beginner':
        return 'bg-muted/10 border-muted/20 hover:border-muted/50';
      default:
        return 'bg-card border-border hover:border-accent/30';
    }
  };

  return (
    <Card className={`p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full border ${getProficiencyColor()} group overflow-hidden relative`}>
      <CardContent className="p-2 flex flex-col items-center justify-center flex-grow">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
        
        <motion.p 
          whileHover={{ scale: 1.05 }}
          className="font-semibold text-primary text-sm group-hover:text-accent transition-colors"
        >
          {name}
        </motion.p>
        
        {proficiency && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-background text-muted-foreground"
          >
            {proficiency}
          </motion.div>
        )}
      </CardContent>
      
      {/* Shimmer effect overlay */}
      <motion.div
        variants={shimmerAnimation}
        initial="hidden"
        animate="show"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ backgroundSize: '200% 100%' }}
      />
    </Card>
  );
}