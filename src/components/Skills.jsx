import React from 'react';
import { skills } from '../data/content.js';
import { Section } from './Section.jsx';

const skillTiles = [
  'ReactJS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redis',
  'Kafka',
  'Flutter',
  'Dart',
  'C/C++',
  'Advanced SQL',
  'Firebase',
  'AWS EC2',
  'REST APIs',
  'Git',
  'Postman',
  'VS Code'
];

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Abilities">
      <div className="skills-section">
        <div className="skills-tiles">
          {skillTiles.map((name) => (
            <div key={name} className="skill-tile">
              <span className="skill-dot" />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <dl className="skills-grid">
          <div>
            <dt>Languages</dt>
            <dd>{skills.languages}</dd>
          </div>
          <div>
            <dt>Core Fundamentals</dt>
            <dd>{skills.core}</dd>
          </div>
          <div>
            <dt>Frameworks & Platforms</dt>
            <dd>{skills.frameworks}</dd>
          </div>
          <div>
            <dt>Developer Tools</dt>
            <dd>{skills.tools}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}



