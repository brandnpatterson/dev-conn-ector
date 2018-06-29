import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { object } from 'prop-types';

// Redux
import { connect } from 'react-redux';

const propTypes = {
  auth: object.isRequired
};

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="login" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = propTypes;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
