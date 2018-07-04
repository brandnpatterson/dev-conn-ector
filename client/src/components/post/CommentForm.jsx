import React from 'react';
import { func, object, string } from 'prop-types';
import TextAreaFieldGroup from '../templates/TextAreaFieldGroup';

// Redux
import { connect } from 'react-redux';
import { addComment } from '../../actions/postActions';

const propTypes = {
  addComment: func.isRequired,
  auth: object.isRequired,
  postId: string.isRequired,
  errors: object.isRequired
};

class CommentForm extends React.Component {
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
    const { postId } = this.props;

    const newComment = {
      avatar: user.avatar,
      name: user.name,
      text: this.state.text
    };

    this.props.addComment(postId, newComment);

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
          <div className="card-header bg-info text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  error={errors.text}
                  name="text"
                  onChange={this.onChange}
                  placeholder="Reply to post"
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

CommentForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
