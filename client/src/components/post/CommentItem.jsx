import React from 'react';
import { func, object, string } from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

const propTypes = {
  auth: object.isRequired,
  comment: object.isRequired,
  deleteComment: func.isRequired,
  postId: string.isRequired
};

class CommentItem extends React.Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { auth, comment, postId } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              className="rounded-circle d-none d-md-block"
              src={comment.avatar}
              alt={`${comment.name}'s avatar`}
            />
            <br />
            <p className="text-center">{comment.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                className="btn btn-danger mr-1"
                type="button"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = propTypes;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    deleteComment
  }
)(CommentItem);
