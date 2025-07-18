"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/shared/SectionTitle";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real app, you'd send this data to a server
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-card dark:bg-card overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
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
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            variants={fadeIn('right', 0.3)}
            className="space-y-8"
          >
            <motion.div
              variants={slideIn('left', 0.1)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-accent mt-1" />,
                      title: "Email",
                      content: <a href="mailto:ajaykumar.kumar900@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">ajaykumar.kumar900@gmail.com</a>
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-accent mt-1" />,
                      title: "Phone",
                      content: <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-accent mt-1" />,
                      title: "Location",
                      content: <p className="text-muted-foreground">San Francisco, CA</p>
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      className="flex items-start space-x-3"
                    >
                      <motion.div whileHover={{ rotate: 15 }}>
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-primary">{item.title}</h4>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4 border-t border-border"
                  >
                    <h4 className="font-semibold text-primary mb-3">Connect With Me</h4>
                    <div className="flex gap-4">
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
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              variants={slideIn('left', 0.3)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <NextImage
                src="https://placehold.co/600x400.png"
                alt="Map showing developer location"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="san francisco map"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.3)}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-primary">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {[
                      {
                        name: "name" as const,
                        label: "Full Name",
                        placeholder: "Your Name",
                        type: "text"
                      },
                      {
                        name: "email" as const,
                        label: "Email Address",
                        placeholder: "your.email@example.com",
                        type: "email"
                      },
                      {
                        name: "subject" as const,
                        label: "Subject",
                        placeholder: "What is this regarding?",
                        type: "text"
                      }
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                      >
                        <FormField
                          control={form.control}
                          name={field.name}
                          render={({ field: formField }) => (
                            <FormItem>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                <Input 
                                  type={field.type} 
                                  placeholder={field.placeholder} 
                                  {...formField} 
                                  className="bg-background focus:ring-accent" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                {...field} 
                                rows={5} 
                                className="bg-background focus:ring-accent" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}