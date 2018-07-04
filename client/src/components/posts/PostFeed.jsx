import React from 'react';
import { array } from 'prop-types';
import PostItem from './PostItem';

const propTypes = {
  posts: array.isRequired
};

class PostFeed extends React.Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => {
      return <PostItem key={post._id} post={post} />;
    });
  }
}

PostFeed.propTypes = propTypes;

export default PostFeed;
