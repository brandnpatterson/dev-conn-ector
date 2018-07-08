import React from 'react';
import { func, object } from 'prop-types';
import TextAreaFieldGroup from '../templates/TextAreaFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

const propTypes = {
  addPost: func.isRequired,
  auth: object.isRequired,
  errors: object.isRequired
};

class PostForm extends React.Component {
  state = {
    errors: {},
    text: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      avatar: user.avatar,
      name: user.name,
      text: this.state.text
    };

    this.props.addPost(newPost);

    this.setState({ text: '' });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  error={errors.text}
                  name="text"
                  onChange={this.onChange}
                  placeholder="Create a post"
                  value={this.state.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

PostForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
