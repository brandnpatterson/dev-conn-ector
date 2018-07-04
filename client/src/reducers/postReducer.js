import {
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  POST_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  post: {},
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p._id !== action.payload)
      };
    default:
      return state;
  }
};
