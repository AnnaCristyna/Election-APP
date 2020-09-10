import React from 'react';

export default function Header({ children }) {
  const style = {
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div>
      <h3 style={style}>{children}</h3>;
    </div>
  );
}
