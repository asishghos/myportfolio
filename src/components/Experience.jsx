import React from 'react';
import { experiences } from '../data/content.js';
import { Section } from './Section.jsx';

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.company} className="timeline-item">
            <header className="timeline-header">
              <div>
                <h3>{exp.role}</h3>
                <p className="muted">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="timeline-period">{exp.period}</span>
            </header>
            <ul className="bullet-list">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}


