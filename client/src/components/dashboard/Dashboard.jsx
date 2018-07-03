import React from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';
import Spinner from '../templates/Spinner';
import ProfileActions from './ProfileActions';
import Education from './Education';
import Experience from './Experience';

// Redux
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profileActions';

const propTypes = {
  auth: object.isRequired,
  deleteAccount: func.isRequired,
  getCurrentProfile: func.isRequired,
  profile: object.isRequired
};

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { loading, profile } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead muted-text">
            Welcome <Link to={`profile/${profile.handle}`}>{user.name}</Link>
          </p>
          <ProfileActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div style={{ marginBottom: '60px' }} />
          <button onClick={this.onDeleteClick} className="btn btn-danger">
            Delete My Account
          </button>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p>You have not yet set up a profile. Please add some info</p>
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
  { deleteAccount, getCurrentProfile }
)(Dashboard);
