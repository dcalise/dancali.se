import React from 'react';
import './hero.scss';
import { IoMdArrowDown } from 'react-icons/io';

class Hero extends React.PureComponent {
  render() {
    return (
      <section className="hero">
        <div className="container content text-center">
          <h1>I'm a front end developer from New York City.</h1>
          <p>Reach me at <a href="mailto:me@dancali.se">me@dancali.se</a></p>
        </div>
        <a href="#resume" className="down-arrow">
          <IoMdArrowDown />
        </a>
      </section>
    );
  }
}

export default Hero;