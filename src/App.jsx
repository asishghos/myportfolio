import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { ExperienceSection } from './components/Experience.jsx';
import { ProjectsSection } from './components/Projects.jsx';
import { AchievementsSection } from './components/Achievements.jsx';
import { SkillsSection } from './components/Skills.jsx';
import { EducationSection } from './components/Education.jsx';
import { ContactSection } from './components/Contact.jsx';
import { GithubSection } from './components/GithubSection.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <EducationSection />
        <GithubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


