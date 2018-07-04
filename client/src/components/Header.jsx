import React from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';
import styled from 'styled-components';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';

const propTypes = {
  auth: object.isRequired,
  logoutUser: func.isRequired
};

class Header extends React.Component {
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

  onLogout = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    let { collapse } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link onClick={this.toggleCollapse} className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={this.toggleCollapse}
            className="nav-link"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a className="null-link nav-link" onClick={this.onLogout} href={null}>
            <img
              className="rounded-circle user-icon"
              src={user.avatar}
              alt={user.nam}
              title="You must have a Gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
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
          <Link onClick={this.toggleCollapse} className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <StyledHeader>
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
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </StyledHeader>
    );
  }
}

Header.propTypes = propTypes;

const StyledHeader = styled.div`
  .null-link {
    cursor: pointer;
  }

  .user-icon {
    margin-right: 5px;
    width: 25px;
  }
`;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { clearCurrentProfile, logoutUser }
)(Header);
