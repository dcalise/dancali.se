import React from "react";
import "./header.scss";

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="container">
        
          <div className="header-logo">
            <span>Dan Calise</span>
            <p className="subtitle">// Front End Developer</p>
          </div>
          <nav className="header-navbar">
            <ul className="header-navbar-list">
              <li>
                <a href="#resume">Resume</a>
              </li>

              <li>
                <a href="https://github.com/dcalise">Github</a>
              </li>

              <li>
                <a className="header-mail-link" href="mailto:me@dancali.se">me@dancali.se</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
