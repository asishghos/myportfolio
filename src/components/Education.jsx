import React from 'react';
import { education } from '../data/content.js';
import { Section } from './Section.jsx';

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="timeline">
        {education.map((ed) => (
          <article key={ed.school} className="timeline-item">
            <header className="timeline-header">
              <div>
                <h3>{ed.school}</h3>
                <p className="muted">{ed.degree}</p>
                <p className="muted">{ed.location}</p>
              </div>
              <span className="timeline-period">{ed.period}</span>
            </header>
          </article>
        ))}
      </div>
    </Section>
  );
}


