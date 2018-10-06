import React from 'react';
import './hero.scss';

class Hero extends React.PureComponent {
  render() {
    return (
      <section className="hero">
        <div className="container content">
          <h1>I'm a front end developer from New York City.</h1>
          <p>Reach me at <a href="mailto:me@dancali.se">me@dancali.se</a></p>
        </div>
      </section>
    );
  }
}

export default Hero;