import React from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';
import CommentFeed from './CommentFeed';
import CommentForm from './CommentForm';
import PostItem from '../posts/PostItem';
import Spinner from '../templates/Spinner';

// Redux
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';

const propTypes = {
  getPost: func.isRequired,
  post: object.isRequired
};

class Post extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { loading, post } = this.props.post;

    let postContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back to feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = propTypes;

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
