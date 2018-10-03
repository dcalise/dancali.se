import React from 'react';
import './hero.scss';

class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="content">
          <h1>I'm a front end developer from New York City.</h1>
          <p>Reach me at <a href="mailto:me@dancali.se">me@dancali.se</a></p>
        </div>
      </div>
    );
  }
}

export default Hero;