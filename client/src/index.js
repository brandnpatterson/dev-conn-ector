import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { logoutUser, setCurrentUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

// Validation
import jwtDecode from 'jwt-decode';
import setAuthToken from './validation/setAuthToken';

// Check for jwtToken
if (localStorage.jwtToken) {
  // set Auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get User info and exp
  const decoded = jwtDecode(localStorage.jwtToken);

  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Log out current User
    store.dispatch(logoutUser());

    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to Login
    window.location.href = '/login';
  }
}

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
