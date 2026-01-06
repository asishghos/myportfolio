import React from 'react';
import { profile } from '../data/content.js';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="nav-root">
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="nav-name">{profile.name}</span>
          <span className="nav-title">{profile.title}</span>
        </div>
        <nav className="nav-links">
          {sections.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => handleScroll(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}


