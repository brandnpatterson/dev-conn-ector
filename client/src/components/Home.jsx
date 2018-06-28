import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import image from '../img/showcase.jpg';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

const propTypes = {
  auth: object.isRequired
};

class Home extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <StyledHome>
        <div className="dark-overlay home-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledHome>
    );
  }
}

Home.propTypes = propTypes;

const StyledHome = styled.div`
  background: url(${image}) no-repeat center cover;
  height: 100vh;
  margin-bottom: -50px;
  margin-top: -24px;
  position: relative;

  .home-inner {
    padding-top: 80px;
  }

  .dark-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Home);
