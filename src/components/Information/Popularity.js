import React from 'react';

const STARS = {
  empty: '☆',
  full: '★',
};
const MAX_STARS = 5;
export default function Popularity({ value }) {
  const valueFormated = Math.ceil(value / 2);
  const fullStars = STARS.full.repeat(valueFormated);
  const emptyStars = STARS.empty.repeat(MAX_STARS - valueFormated);
  return (
    <div>
      {fullStars}
      {emptyStars}
    </div>
  );
}
