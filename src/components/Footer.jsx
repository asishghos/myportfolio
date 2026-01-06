import React from 'react';
import { profile } from '../data/content.js';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <span className="muted">Built with React & Vite</span>
      </div>
    </footer>
  );
}


