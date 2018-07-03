import React from 'react';
import { object } from 'prop-types';
import isEmpty from '../../validation/isEmpty';

const propTypes = {
  profile: object.isRequired
};

class ProfileAbout extends React.Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(' ')[0];

    const skills = profile.skills.map((skill, index) => (
      <div className="p-3" key={index}>
        <i className="fa fa-check" />
        {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            {isEmpty(profile.bio) ? null : (
              <div>
                <h3 className="text-center text-info">{firstName}'s Bio</h3>
                <p className="lead">
                  <span>{profile.bio}</span>
                </p>
                <hr />
              </div>
            )}
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = propTypes;

export default ProfileAbout;
