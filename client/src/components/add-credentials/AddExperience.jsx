import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { func, object } from 'prop-types';
import TextFieldGroup from '../templates/TextFieldGroup';
import TextAreaFieldGroup from '../templates/TextAreaFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profileActions';

const propTypes = {
  addExperience: func.isRequired,
  errors: object.isRequired,
  profile: object.isRequired
};

class AddExperience extends React.Component {
  state = {
    company: '',
    current: false,
    description: '',
    disabled: false,
    errors: {},
    from: '',
    location: '',
    title: '',
    to: ''
  };

  // assign props to state
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onCheck = () => {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      current: this.state.current,
      description: this.state.description,
      from: this.state.from,
      location: this.state.location,
      title: this.state.title,
      to: this.state.to
    };

    this.props.addExperience(expData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-8-md m-auto">
              <Link className="btn btn-light" to="/dashboard">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">
                Add any job or position that you currently have or have had in
                the past
              </p>
              <small className="d-block pb-3">* required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  error={errors.company}
                  name="company"
                  onChange={this.onChange}
                  placeholder="* Company"
                  type="company"
                  value={this.state.company}
                />
                <TextFieldGroup
                  error={errors.title}
                  name="title"
                  onChange={this.onChange}
                  placeholder="* Title"
                  type="title"
                  value={this.state.title}
                />
                <TextFieldGroup
                  error={errors.location}
                  name="location"
                  onChange={this.onChange}
                  placeholder="* Location"
                  type="location"
                  value={this.state.location}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  error={errors.from}
                  name="from"
                  onChange={this.onChange}
                  type="date"
                  value={this.state.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  disabled={this.state.disabled ? 'disabled' : ''}
                  error={errors.to}
                  name="to"
                  onChange={this.onChange}
                  type="date"
                  value={this.state.to}
                />
                <div className="form-check mb-4">
                  <input
                    checked={this.state.current}
                    className="form-check-input"
                    id="current"
                    name="current"
                    onChange={this.onCheck}
                    type="checkbox"
                    value={this.state.current}
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  error={errors.description}
                  info="Tell us about the position"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Job Description"
                  type="description"
                  value={this.state.description}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = propTypes;

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
