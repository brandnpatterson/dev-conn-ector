import React from 'react';
import { func, object } from 'prop-types';
import TextFieldGroup from './templates/TextFieldGroup';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

const propTypes = {
  auth: object.isRequired,
  errors: object.isRequired,
  loginUser: func.isRequired
};

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  error={errors.email}
                  name="email"
                  onChange={this.onChange}
                  placeholder="Email Address"
                  type="email"
                  value={this.state.email}
                />
                <TextFieldGroup
                  error={errors.password}
                  name="password"
                  onChange={this.onChange}
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = propTypes;

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
