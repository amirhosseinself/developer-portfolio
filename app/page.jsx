"use client";

import dynamic from "next/dynamic";

import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";
import Skills from "./components/homepage/skills";
const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});

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
