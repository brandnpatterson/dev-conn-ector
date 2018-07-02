import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { func, object } from 'prop-types';
import TextFieldGroup from '../templates/TextFieldGroup';
import TextAreaFieldGroup from '../templates/TextAreaFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profileActions';

const propTypes = {
  addEducation: func.isRequired,
  errors: object.isRequired,
  profile: object.isRequired
};

class AddEducation extends React.Component {
  state = {
    current: false,
    degree: '',
    description: '',
    disabled: false,
    errors: {},
    fieldofstudy: '',
    from: '',
    school: '',
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

    const eduData = {
      current: this.state.current,
      degree: this.state.degree,
      description: this.state.description,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      school: this.state.school,
      to: this.state.to
    };

    this.props.addEducation(eduData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-8-md m-auto">
              <Link className="btn btn-light" to="/dashboard">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Any school, bootcamp, etc that you have attended
              </p>
              <small className="d-block pb-3">* required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  error={errors.school}
                  name="school"
                  onChange={this.onChange}
                  placeholder="* School"
                  value={this.state.school}
                />
                <TextFieldGroup
                  error={errors.degree}
                  name="degree"
                  onChange={this.onChange}
                  placeholder="* Degree or Certification"
                  value={this.state.degree}
                />
                <TextFieldGroup
                  error={errors.fieldofstudy}
                  name="fieldofstudy"
                  onChange={this.onChange}
                  placeholder="* Field of Study"
                  value={this.state.fieldofstudy}
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
                  info="Tell us about the program that you were in"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Program Description"
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

AddEducation.propTypes = propTypes;

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
