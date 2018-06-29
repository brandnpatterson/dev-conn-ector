import React from 'react';
import { withRouter } from 'react-router-dom';
import { func, object } from 'prop-types';
import TextFieldGroup from './templates/TextFieldGroup';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

const propTypes = {
  auth: object.isRequired,
  errors: object.isRequired,
  registerUser: func.isRequired
};

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    errors: {},
    password: '',
    password_conf: ''
  };

  // assign props to state
  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_conf: this.state.password_conf
    };

    // pass history to the registerUser action
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  error={errors.name}
                  name="name"
                  onChange={this.onChange}
                  placeholder="Name"
                  type="name"
                  value={this.state.name}
                />
                <TextFieldGroup
                  error={errors.email}
                  name="email"
                  info="This site uses Gravatar so if you want a profile image, use
                    a Gravatar email"
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
                <TextFieldGroup
                  error={errors.password_conf}
                  name="password_conf"
                  onChange={this.onChange}
                  placeholder="Confirm Password"
                  type="password"
                  value={this.state.password_conf}
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

Register.propTypes = propTypes;

// map Redux store to Component props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// use Redux actions and withRouter
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
