import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaAws,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiPostman,
  SiRedis,
  SiApachekafka
} from "react-icons/si";

import {
  profile,
  experiences,
  projects,
  achievements,
  skills,
  education,
  githubActivity
} from "./data/content.js";


import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { IoIosAnalytics } from "react-icons/io";

/* ---- theme config ---- */
const githubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
};

/* ---------------- GITHUB CALENDAR WITH YEAR SELECTOR ---------------- */
function GitHubCalendarSection() {
  const [year, setYear] = useState(undefined);
  const [colorScheme, setColorScheme] = useState("dark");

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // simple theme detection
    const isDark = document.documentElement.classList.contains("dark");
    setColorScheme(isDark ? "dark" : "light");
  }, []);

  if (!username || !joinYear) {
    return (
      <div className="flex flex-col items-center justify-center text-zinc-400 gap-3">
        <IoIosAnalytics className="text-4xl" />
        <p>GitHub credentials not found in .env</p>
      </div>
    );
  }

  const years = Array.from(
    { length: currentYear - joinYear + 1 },
    (_, i) => currentYear - i
  ).slice(0, 5);

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Contribution Graph
        </h2>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Calendar */}
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
            <GitHubCalendar
              username={username}
              theme={githubTheme}
              colorScheme={colorScheme}
              blockSize={13}
              year={year}
            />
          </div>

          {/* Year Selector */}
          <div className="flex xl:flex-col gap-2">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y === year ? undefined : y)}
                className={`px-4 py-2 rounded-md border text-sm
                  ${y === year
                    ? "bg-emerald-500 text-black"
                    : "border-zinc-700 text-zinc-400 hover:text-white"
                  }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- NAVBAR ---------------- */

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 z-50 w-full bg-black/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-white font-semibold">{profile.name}</p>
          <p className="text-xs text-zinc-400">{profile.title}</p>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="hover:text-white transition"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen pt-32 px-6 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Software developer,<br />
            technical writer &<br />
            open-source builder
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl">
            I’m {profile.name}, passionate about building scalable systems,
            elegant UIs, and production-ready applications across web & mobile.
          </p>

          <div className="flex gap-5 mt-6 text-xl text-zinc-400">
            <a href={profile.githubUrl}><FaGithub /></a>
            <a href={profile.linkedinUrl}><FaLinkedin /></a>
            <a href={profile.twitterUrl}><FaTwitter /></a>
          </div>
        </div>

        {/* Decorative cube grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4 opacity-30">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-24 w-24 border border-emerald-500/30 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-zinc-900/70 border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-lg text-white">{exp.company}</h3>
              <p className="text-sm text-zinc-400">{exp.role}</p>
              <p className="text-xs text-zinc-500 mt-1">{exp.period}</p>

              <ul className="mt-4 list-disc list-inside text-zinc-400 text-sm space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-zinc-900 border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-white">{p.name}</h3>
              <p className="text-zinc-400 text-sm mt-1">{p.stack}</p>

              <p className="text-zinc-400 mt-4 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS WITH ICONS ---------------- */

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> }
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {techStack.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center justify-center gap-3 bg-zinc-900 border border-white/5 rounded-xl py-6 text-emerald-400"
            >
              <span className="text-3xl">{s.icon}</span>
              <span className="text-sm text-zinc-300">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Let’s work together
        </h2>

        <p className="text-zinc-400 mb-8">
          Open to internships, full-time roles & collaborations.
        </p>

        <div className="flex justify-center gap-6 text-emerald-400">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="py-6 border-t border-white/5 text-center text-zinc-500 text-sm">
      © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind
    </footer>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubCalendarSection />
      {/* <GithubSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
