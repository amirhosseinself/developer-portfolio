"use client";

import dynamic from "next/dynamic";

import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";
import Skills from "./components/homepage/skills";
import Experience from "./components/homepage/experience";
import Education from "./components/homepage/education";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
