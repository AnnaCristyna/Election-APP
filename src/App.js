import React, { Component } from 'react';
import Preload from './components/Preload/Preload';
import Header from './components/Header/Header';
import Candidates from './components/Candidates/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previous: [],
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const previous = this.state.candidates.map(
            ({ id, votes, percentage }) => {
              return { id, votes, percentage };
            }
          );

          this.setState({
            candidates: json.candidates,
            previous,
          });
        });
    }, 1000);
  }
  render() {
    const { candidates, previous } = this.state;

    if (candidates.length === 0) {
      return <Preload />;
    }
    return (
      <div className="container">
        <Header>Election</Header>
        <Candidates previous={previous} candidates={candidates} />
      </div>
    );
  }
}
