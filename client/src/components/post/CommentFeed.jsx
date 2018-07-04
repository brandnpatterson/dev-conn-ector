import React from 'react';
import { array } from 'prop-types';
import CommentItem from './CommentItem';

const propTypes = {
  comments: array.isRequired
};

class CommentFeed extends React.Component {
  render() {
    const { comments, postId } = this.props;

    return comments.map(comment => {
      return (
        <CommentItem key={comment._id} comment={comment} postId={postId} />
      );
    });
  }
}

CommentFeed.propTypes = propTypes;

export default CommentFeed;
