import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

let App = () => {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route exact path="/login" component={Login} />
        </div>
        <div className="container">
          <Route exact path="/register" component={Register} />
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
    color: #bbb !important;
  }
`;

export default App;
