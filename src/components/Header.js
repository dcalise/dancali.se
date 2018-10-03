import React from "react";
import "./header.scss";

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="header-logo">
          <a href="#">Dan Calise</a>
          <p className="subtitle">// Front End Developer</p>
        </div>
        <nav className="header-navbar">
          <ul className="header-navbar-list">
            {/* <li>
              <a href="#">One</a>
            </li>
            <li>
              <a href="#">Two</a>
            </li> */}
            <li>
              <a href="https://github.com/dcalise">Github</a>
            </li>

            <li>
              <a className="header-mail-link" href="mailto:me@dancali.se">me@dancali.se</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
