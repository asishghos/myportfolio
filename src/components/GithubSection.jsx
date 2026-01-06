import React from 'react';
import { Section } from './Section.jsx';
import { githubActivity, profile } from '../data/content.js';

const contributionRows = [
  ['low', 'none', 'none', 'low', 'med', 'none', 'high', 'med', 'low', 'none', 'low', 'med'],
  ['none', 'none', 'low', 'med', 'high', 'med', 'low', 'none', 'low', 'med', 'high', 'med'],
  ['low', 'low', 'med', 'high', 'high', 'med', 'med', 'low', 'none', 'low', 'med', 'high'],
  ['none', 'low', 'none', 'low', 'med', 'low', 'high', 'med', 'low', 'none', 'low', 'med'],
  ['low', 'med', 'high', 'med', 'med', 'low', 'none', 'low', 'med', 'high', 'high', 'med'],
  ['none', 'none', 'low', 'med', 'high', 'med', 'low', 'none', 'low', 'med', 'high', 'med'],
  ['low', 'low', 'med', 'high', 'high', 'med', 'med', 'low', 'none', 'low', 'med', 'high']
];

export function GithubSection() {
  return (
    <Section id="github" title="GitHub & Activity">
      <div className="github-root">
        <div className="github-header">
          <div>
            <p className="muted label">GitHub</p>
            <h3>{profile.github}</h3>
            <p className="muted">{githubActivity.summary}</p>
          </div>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
            className="github-link-chip"
          >
            View Profile
          </a>
        </div>

        <div className="github-grid-card">
          <div className="github-grid-header">
            <span>Contribution Graph</span>
            <span className="muted">Last 12 months (mock visual)</span>
          </div>
          <div className="github-grid">
            {contributionRows.map((row, rowIndex) =>
              row.map((intensity, colIndex) => (
                <span
                  key={`${rowIndex}-${colIndex}`}
                  className={`github-cell github-cell--${intensity}`}
                />
              ))
            )}
          </div>
          <div className="github-grid-legend">
            <span className="muted">Less</span>
            <span className="github-cell github-cell--none" />
            <span className="github-cell github-cell--low" />
            <span className="github-cell github-cell--med" />
            <span className="github-cell github-cell--high" />
            <span className="muted">More</span>
          </div>
        </div>

        <div className="github-highlights">
          {githubActivity.highlights.map((item) => (
            <article key={item} className="github-highlight-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}


