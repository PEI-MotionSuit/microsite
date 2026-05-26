import React from 'react';

export default function Text_Color ({children, color}) {
  return(
    <span
      style={{
        borderRadius: '2px',
        color: color,
        padding: '0.2rem',
        
      }}>
      {children}
    </span>
  );
}