import React from 'react';
import { achievements } from '../data/content.js';
import { Section } from './Section.jsx';

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="bullet-list">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </Section>
  );
}


