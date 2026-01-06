import React from 'react';
import { projects } from '../data/content.js';
import { Section } from './Section.jsx';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <header className="card-header">
              <div>
                <h3>{project.name}</h3>
                <p className="muted">{project.stack}</p>
              </div>
              <span className="card-period">{project.period}</span>
            </header>
            <p className="card-description">{project.description}</p>
            <ul className="bullet-list">
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {project.links?.length ? (
              <div className="card-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}


