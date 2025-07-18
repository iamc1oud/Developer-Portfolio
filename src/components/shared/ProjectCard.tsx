"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GithubIcon, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group border-border hover:border-accent/30">
      <CardHeader className="p-0 overflow-hidden">
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={project.imageHint || "project screenshot"}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex gap-2"
            >
              {project.tags.slice(0, 3).map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Badge variant="secondary" className="text-xs bg-accent/90 text-white">{tag}</Badge>
                </motion.div>
              ))}
              {project.tags.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge variant="secondary" className="text-xs bg-primary/80 text-white">+{project.tags.length - 3}</Badge>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle className="text-xl font-headline mb-2 text-primary group-hover:text-accent transition-colors">{project.title}</CardTitle>
        </motion.div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">{tag}</Badge>
          ))}
          {project.tags.length > 5 && (
            <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">+{project.tags.length - 5}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-border">
        <div className="flex space-x-3 w-full">
          {project.liveDemoUrl && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button asChild variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all">
                <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo 
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          )}
          {project.repoUrl && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 transition-all">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  GitHub 
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="ml-2"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}