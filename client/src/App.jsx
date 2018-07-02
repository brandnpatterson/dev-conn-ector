import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Components
import AddEducation from './components/add-credentials/AddEducation';
import AddExperience from './components/add-credentials/AddExperience';
import CreateProfile from './components/CreateProfile';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/templates/PrivateRoute';
import Register from './components/Register';

let App = () => {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </StyledApp>
    </Router>
  );
};

let StyledApp = styled.div`
  img {
    width: 100%;
  }

  .card-form {
    opacity: 0.9;
  }

  .latest-profiles-img {
    width: 40px;
    height: 40px;
  }

  .form-control::placeholder {
    color: #bbb;
  }
`;

export default App;
