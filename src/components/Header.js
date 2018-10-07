import React from "react";
import "./header.scss";
import { IoMdMenu } from "react-icons/io";

class Header extends React.PureComponent {
  state = {
    isNavOpen: false
  };

  render() {
    return (
      <div>
        <header className="main-header">
          <div className="container">
            <div className="header-logo">
              <span className="logo">Dan Calise</span>
              <p className="subtitle">
                // Front End Dev
                <span className="hidden-xs">eloper</span>
              </p>
            </div>
            <nav className="header-navbar hidden-xs">
              <ul className="header-navbar-list">
                <li>
                  <a href="#resume">Resume</a>
                </li>

                <li>
                  <a href="https://github.com/dcalise">Github</a>
                </li>

                <li>
                  <a className="header-mail-link" href="mailto:me@dancali.se">
                    me@dancali.se
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className="mobile-menu-toggle visible-xs-flex"
              onClick={() => {
                this.setState({ isNavOpen: !this.state.isNavOpen });
              }}
            >
              <IoMdMenu />
            </div>
          </div>
        </header>
        <div
          className={`container visible-xs-block ${
            this.state.isNavOpen ? "open" : ""
          }`}
        >
          <nav className="mobile-nav">
            <li>
              <a
                href="#resume"
                onClick={() => {
                  this.setState({ isNavOpen: !this.state.isNavOpen });
                }}
              >
                Resume
              </a>
            </li>

            <li>
              <a href="https://github.com/dcalise">Github</a>
            </li>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
