import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

let reduxTools;
process.env.NODE_ENV === 'development'
  ? (reduxTools =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())
  : (reduxTools = null);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reduxTools
  )
);

export default store;
