import React from 'react';
import Card from '../Card/Card';
import Candidate from './Candidate';
import FlipMove from 'react-flip-move';

export default function Candidates({ candidates, previous }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          const prior = previous.find((item) => item.id === id);
          const previousVote = !!prior ? prior.votes : 0;
          const previousPercent = !!prior ? prior.percentage : 0;
          return (
            <div key={candidate.id}>
              <Card>
                <Candidate
                  className="center"
                  previousVote={previousVote}
                  previousPercent={previousPercent}
                  candidate={candidate}
                  position={index + 1}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
