import React from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';
import Spinner from './Spinner';

// Redux
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';

const propTypes = {
  auth: object.isRequired,
  getCurrentProfile: func.isRequired,
  profile: object.isRequired
};

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { loading, profile } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading === true) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = <h2>Display Profile</h2>;
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p>You have not yet set up a profile. Please add some info.</p>
          <Link to="/create-profile" className="btn btn-lg btn-info">
            Create Profile
          </Link>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
