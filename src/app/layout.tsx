import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Ajay Kumar Singh - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Ajay Kumar Singh, a full stack developer and UI/UX designer specializing in creating beautiful, functional, and user-centered digital experiences.',
  keywords: ['web developer', 'frontend developer', 'UI/UX designer', 'React developer', 'Next.js developer', 'portfolio'],
  authors: [{ name: 'Ajay Kumar Singh' }],
  creator: 'Ajay Kumar Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajaykumarsingh.dev',
    title: 'Ajay Kumar Singh - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio of Ajay Kumar Singh, a full stack developer and UI/UX designer specializing in creating beautiful, functional, and user-centered digital experiences.',
    siteName: 'Ajay Kumar Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Kumar Singh - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio of Ajay Kumar Singh, a full stack developer and UI/UX designer specializing in creating beautiful, functional, and user-centered digital experiences.',
    creator: '@ajaykumarsingh',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen dark:bg-background">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}