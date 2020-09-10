import React from 'react';
import css from './picture.module.css';

export default function Picture({ image, description }) {
  return (
    <div>
      <img className={css.imgstyle} src={image} alt={description} />
    </div>
  );
}
