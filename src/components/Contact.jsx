import React from 'react';
import { profile } from '../data/content.js';
import { Section } from './Section.jsx';

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-root">
        <p className="contact-text">
          I’m open to internship and software development opportunities. Feel
          free to reach out if you’d like to discuss a project, role, or
          collaboration.
        </p>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\\s/g, '')}`}>{profile.phone}</a>
        </div>
        <p className="contact-note">
          This site is static for now. A Firebase-backed contact form can be
          added later for message storage if needed.
        </p>
      </div>
    </Section>
  );
}


