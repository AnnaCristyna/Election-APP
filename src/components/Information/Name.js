import React from 'react';

export default function Name({ children }) {
  const style = { fontWeight: 'bold' };
  return <div style={style}>{children}</div>;
}
