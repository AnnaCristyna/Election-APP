import React from 'react';
import Position from '../Position/Position';
import Picture from '../Picture/Picture';
import Name from '../Information/Name';
import Percentage from '../Information/Percentage';
import Votes from '../Information/Votes';
import css from './candidate.module.css';
import Popularity from '../Information/Popularity';

export default function Candidate({
  candidate,
  position,
  previousVote,
  previousPercent,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  const image = `${id}.jpg`;
  return (
    <div className={css.flexrow}>
      <Position>{position}</Position>
      <Picture image={image} description={name} />
      <div>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previous={previousPercent}>
          {' '}
        </Percentage>
        <Popularity value={popularity} />
      </div>
    </div>
  );
}
