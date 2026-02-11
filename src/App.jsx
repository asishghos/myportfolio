import React from "react";
import { useEffect, useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { IoIosAnalytics } from "react-icons/io";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaAws,
  FaNodeJs,
  FaGitAlt,
  FaArrowRight,
  FaExternalLinkAlt
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

// Profile URL helpers
const getProfileUrl = (label) => {
  const link = profile.links?.find(l => l.label === label);
  return link?.href || '#';
};

/* ---- theme config ---- */
const githubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#1a1a1a", "#2d2d2d", "#404040", "#666666"]
};

/* ---------------- FLOATING PARTICLES BACKGROUND ---------------- */
function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 180, 200, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(160, 160, 180, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-black/90 backdrop-blur-xl border-b border-zinc-700/50 shadow-2xl shadow-black/50"
        : "bg-transparent"
        }`}
      style={{
        backgroundImage: scrolled ? 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 rounded-full">
          <div className="w-10 h-10  bg-gradient-to-br from-zinc-600 via-zinc-500 to-zinc-400 flex items-center justify-center font-bold text-white shadow-lg shadow-zinc-500/50">
            <img src="src/data/images/img.png" alt="A" />
          </div>
          <div>
            <p className="text-white font-bold tracking-tight">{profile.name}</p>
            <p className="text-xs text-zinc-400">{profile.title}</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-zinc-400 hover:text-white transition-all duration-300 relative group"
            >
              {s.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------------- HERO WITH ANIMATED GIF ---------------- */

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen pt-40 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%), url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div
          className="space-y-8"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          <div className="inline-block px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full backdrop-blur-sm">
            <span className="text-zinc-300 text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-300 bg-clip-text text-transparent">
              Software developer,
            </span>
            <br />
            <span className="text-white">technical writer &</span>
            <br />
            <span className="bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              open-source builder
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            I'm {profile.name}, passionate about building scalable systems,
            elegant UIs, and production-ready applications across web & mobile.
          </p>

          <div className="flex gap-4 text-2xl">
            <a
              href={getProfileUrl('GitHub')}
              className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <FaGithub />
            </a>
            <a
              href={getProfileUrl('LinkedIn')}
              className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <FaLinkedin />
            </a>
            <a
              href={getProfileUrl('Twitter')}
              className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <FaTwitter />
            </a>
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded-xl font-semibold text-white overflow-hidden shadow-2xl shadow-zinc-900/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in touch
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Animated coding GIF display */}
        <div
          className="hidden md:block relative"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: "transform 0.3s ease-out"
          }}
        >
          <div className="relative group">
            {/* Glassmorphic frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />

            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-4 shadow-2xl">
              {/* Browser-like header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-xs text-zinc-500 font-mono">
                  developer_workspace.jsx
                </div>
              </div>

              {/* GIF placeholder - replace with actual coding GIF */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                <img
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  alt="Coding animation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-2xl flex items-center justify-center text-3xl animate-bounce shadow-xl shadow-zinc-900/50">
              <FaReact />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl flex items-center justify-center text-3xl animate-bounce delay-500 shadow-xl shadow-zinc-900/50">
              <FaNodeJs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE WITH GLASSMORPHISM ---------------- */

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 relative"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #000000, #0a0a0a), url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="group relative"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/10 to-zinc-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-500/50 transition-all duration-500 group-hover:translate-y-[-8px] shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-zinc-400 font-medium mt-1">{exp.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-xs text-zinc-400 font-mono">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 text-zinc-400">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-1">▹</span>
                      <span className="flex-1">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS WITH HOVER EFFECTS ---------------- */

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #0a0a0a, #000000), url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 via-transparent to-zinc-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 group-hover:border-zinc-500/50 transition-all duration-500">
                {/* Project number */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700/20 to-zinc-600/20 flex items-center justify-center font-bold text-zinc-400 border border-zinc-700/50">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                  {p.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.split(",").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-xs text-zinc-400 font-mono"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {p.description}
                </p>

                <button className="flex items-center gap-2 text-zinc-300 font-semibold group-hover:gap-3 transition-all hover:text-white">
                  View Project <FaExternalLinkAlt className="text-sm" />
                </button>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS WITH 3D HOVER & GIF ---------------- */

const techStack = [
  { name: "React", icon: <FaReact size={40} color="white" />, color: "from-zinc-400 to-zinc-600" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="white" />, color: "from-zinc-500 to-zinc-700" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="white" />, color: "from-zinc-400 to-zinc-600" },
  { name: "Redis", icon: <SiRedis size={40} color="white" />, color: "from-zinc-500 to-zinc-700" },
  { name: "Kafka", icon: <SiApachekafka size={40} color="white" />, color: "from-zinc-600 to-zinc-800" },
  { name: "Flutter", icon: <SiFlutter size={40} color="white" />, color: "from-zinc-400 to-zinc-600" },
  { name: "Firebase", icon: <SiFirebase size={40} color="white" />, color: "from-zinc-500 to-zinc-700" },
  { name: "AWS", icon: <FaAws size={40} color="white" />, color: "from-zinc-400 to-zinc-600" },
  { name: "Git", icon: <FaGitAlt size={40} color="white" />, color: "from-zinc-500 to-zinc-700" },
  { name: "Postman", icon: <SiPostman size={40} color="white" />, color: "from-zinc-400 to-zinc-600" }
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 px-6 relative"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #000000, #0a0a0a), url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Skills grid */}
          <div>
            <h2 className="text-5xl font-black text-white mb-12">
              Tech Stack
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((s) => (
                <div
                  key={s.name}
                  className="group relative"
                >
                  <div
                    className="
      relative
      bg-zinc-900/70
      backdrop-blur-md
      border border-zinc-800
      rounded-2xl
      p-6
      flex flex-col items-center
      gap-3
      transition-all duration-300
      hover:-translate-y-2
      hover:border-zinc-600
      hover:shadow-2xl hover:shadow-zinc-900
    "
                  >
                    {/* ICON */}
                    <div className="text-zinc-300 group-hover:text-white transition">
                      {s.icon}
                    </div>

                    {/* NAME */}
                    <span className="text-sm font-medium text-zinc-400 group-hover:text-white">
                      {s.name}
                    </span>
                  </div>

                  {/* Soft Glow */}
                  <div
                    className={`
      absolute inset-0
      bg-gradient-to-br ${s.color}
      opacity-0 group-hover:opacity-10
      blur-2xl rounded-2xl
      transition duration-300
    `}
                  />
                </div>

              ))}
            </div>
          </div>

          {/* Right: GIF showcase */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/30 to-zinc-600/30 rounded-3xl blur-2xl animate-pulse" />

              <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-700/50">
                  <span className="text-sm font-semibold text-zinc-300">
                    Daily Workflow
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-400 animate-pulse" />
                    <span className="text-xs text-zinc-500">Live</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <img
                    src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif"
                    alt="Developer workflow"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full" />
                  Building amazing things, one commit at a time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- CUSTOM GITHUB CALENDAR (Alternative) ---------------- */
function GitHubCalendarSection() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!username) return;

    const fetchContributions = async () => {
      setLoading(true);
      setError(null);

      try {
        // Using GitHub's GraphQL API
        const query = `
          query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

        const variables = {
          username: username,
          from: `${year}-01-01T00:00:00Z`,
          to: `${year}-12-31T23:59:59Z`
        };

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${import.meta.env.VITE_GITHUB_TOKEN}` // You'll need to add this
          },
          body: JSON.stringify({ query, variables })
        });

        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        setContributions(calendar);
      } catch (err) {
        console.error('Error fetching contributions:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, year]);

  if (!username || !joinYear) {
    return (
      <div className="flex items-center justify-center p-8 bg-red-500/10 border border-red-500/20 rounded-xl">
        <p className="text-red-400">
          GitHub credentials not found in .env
        </p>
      </div>
    );
  }

  const years = Array.from(
    { length: currentYear - joinYear + 1 },
    (_, i) => currentYear - i
  ).slice(0, 5);

  const getColor = (count) => {
    if (count === 0) return "bg-zinc-800";
    if (count < 3) return "bg-green-900";
    if (count < 6) return "bg-green-700";
    if (count < 9) return "bg-green-500";
    return "bg-green-400";
  };

  return (
    <div className="space-y-6 w-3/4 mx-auto pt-10">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400">
        Contribution Graph
      </h2>

      {/* Year selector buttons */}
      <div className="flex flex-wrap gap-3">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${y === year
                ? "bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 text-white border-transparent shadow-xl shadow-zinc-900/50"
                : "border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-500/50 hover:bg-zinc-800/50"
              }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zinc-400"></div>
          </div>
        ) : error ? (
          <div className="text-red-400 text-center py-8">
            <p>Error loading contributions: {error}</p>
            <p className="text-sm text-zinc-500 mt-2">
              Make sure VITE_GITHUB_TOKEN is set in your .env file
            </p>
          </div>
        ) : contributions.weeks ? (
          <div className="space-y-4">
            <div className="text-zinc-400 text-sm">
              {contributions.totalContributions} contributions in {year}
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-1">
                {contributions.weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {week.contributionDays.map((day, dayIdx) => (
                      <div
                        key={dayIdx}
                        className={`w-3 h-3 rounded-sm ${getColor(day.contributionCount)} transition-all hover:ring-2 hover:ring-zinc-400`}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-zinc-800"></div>
                <div className="w-3 h-3 rounded-sm bg-green-900"></div>
                <div className="w-3 h-3 rounded-sm bg-green-700"></div>
                <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                <div className="w-3 h-3 rounded-sm bg-green-400"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        ) : (
          <div className="text-zinc-500 text-center py-8">
            No contribution data available
          </div>
        )}
      </div>
    </div>
  );
}


/* ---------------- CONTACT WITH ANIMATED BACKGROUND ---------------- */

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #000000, #0a0a0a), url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's work together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Open to internships, full-time roles & collaborations. Let's build something amazing together.
          </p>
        </div>

        {/* GIF with contact info */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-600/20 rounded-3xl blur-2xl" />

          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
              <img
                src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
                alt="Contact animation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="group relative px-6 py-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl hover:border-zinc-500/50 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="text-sm text-zinc-500 mb-1">Email</div>
                <div className="text-zinc-300 font-semibold group-hover:text-white">
                  {profile.email}
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group relative px-6 py-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl hover:border-zinc-500/50 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="text-sm text-zinc-500 mb-1">Phone</div>
                <div className="text-zinc-300 font-semibold group-hover:text-white">
                  {profile.phone}
                </div>
              </a>
            </div>
          </div>
        </div>

        <button className="group relative px-10 py-5 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded-2xl font-bold text-lg text-white overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/80 transition-all duration-300">
          <span className="relative z-10 flex items-center gap-3">
            Download Resume
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="relative py-12 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">{profile.name}</p>
            <p className="text-sm text-zinc-500 mt-1">
              Built with React, Tailwind & lots of ☕
            </p>
          </div>

          <div className="flex gap-4 text-xl">
            <a
              href={getProfileUrl('GitHub')}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href={getProfileUrl('LinkedIn')}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href={getProfileUrl('Twitter')}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubCalendarSection />
      <ContactSection />
      <Footer />
    </div>
  );
}