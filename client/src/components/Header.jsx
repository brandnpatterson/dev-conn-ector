import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    collapse: true,
    smallWindow: 575
  };

  componentDidMount() {
    let { smallWindow } = this.state;

    if (window.innerWidth > smallWindow) {
      this.setState({ collapse: true });
    }
  }

  toggleCollapse = () => {
    let { collapse, smallWindow } = this.state;

    if (window.innerWidth <= smallWindow) {
      this.setState({ collapse: !collapse });
    }
  };

  render() {
    let { collapse } = this.state;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
          <button
            onClick={this.toggleCollapse}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-controls="mobile-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              'navbar-collapse' + (collapse === true ? ' collapse' : '')
            }
            id="mobile-nav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  onClick={this.toggleCollapse}
                  className="nav-link"
                  to="/profiles"
                >
                  Developers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  onClick={this.toggleCollapse}
                  className="nav-link"
                  to="/register"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={this.toggleCollapse}
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
