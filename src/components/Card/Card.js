import React from 'react';

export default function Card({ children }) {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">{children}</div>
    </div>
  );
}
// className = 'center';
