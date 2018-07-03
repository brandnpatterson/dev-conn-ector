import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import isEmpty from '../../validation/isEmpty';

const propTypes = {
  profile: object.isRequired
};

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              className="rounded-circle"
              src={profile.user.avatar}
              alt={`${profile.user} avatar`}
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h2>{profile.user.name}</h2>
            <p>
              {profile.status}
              {' at '}
              {isEmpty(profile.company) ? null : <span>{profile.company}</span>}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link className="btn btn-info" to={`/profile/${profile.handle}`}>
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li className="list-group-item" key={index}>
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = propTypes;

export default ProfileItem;
