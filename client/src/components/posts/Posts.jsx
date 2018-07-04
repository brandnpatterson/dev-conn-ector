import React from 'react';
import { func, object } from 'prop-types';
import PostFeed from './PostFeed';
import PostForm from './PostForm';
import Spinner from '../templates/Spinner';

// Redux
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';

const propTypes = {
  getPosts: func.isRequired,
  post: object.isRequired
};

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = propTypes;

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
