import React from 'react';

export function Section({ id, title, children }) {
  return (
    <section id={id} className="section-root">
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}


