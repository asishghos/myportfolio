import React from 'react';
import { profile } from '../data/content.js';

export function Hero() {
  return (
    <section id="about" className="hero-root">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">Portfolio</p>
          <h1 className="hero-heading">{profile.name}</h1>
          <p className="hero-subheading">{profile.title}</p>
          <p className="hero-body">
            I’m an aspiring software developer with experience in building
            production-ready systems — from AI-powered mobile apps to scalable
            backend services with real-time analytics. I enjoy turning complex
            ideas into elegant, reliable products.
          </p>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <span>·</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>·</span>
            <a href={`tel:${profile.phone.replace(/\\s/g, '')}`}>{profile.phone}</a>
          </div>
          <div className="hero-links">
            {profile.links.map((link) => (
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
        </div>
      </div>
    </section>
  );
}


