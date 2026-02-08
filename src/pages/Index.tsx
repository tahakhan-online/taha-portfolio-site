
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MouseFollowAnimation from '@/components/MouseFollowAnimation';
import BackgroundAnimations from '@/components/BackgroundAnimations';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <BackgroundAnimations />
      <MouseFollowAnimation />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
