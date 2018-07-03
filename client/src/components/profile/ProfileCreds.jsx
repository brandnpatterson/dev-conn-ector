import React from 'react';
import { array } from 'prop-types';
import Moment from 'react-moment';

const propTypes = {
  education: array,
  experience: array
};

class ProfileCreds extends React.Component {
  render() {
    const { education, experience } = this.props;

    const eduItems = education.map(edu => {
      return (
        <li className="list-group-item" key={edu._id}>
          <h4>{edu.school}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment>
            {edu.to === null ? (
              ' Now'
            ) : (
              <Moment format="YYYY/MM/DD">{edu.from}</Moment>
            )}
          </p>
          <p>
            <strong>Degree: </strong>
            {edu.degree}
          </p>
          <p>
            <strong>Field of Study: </strong>
            {edu.fieldofstudy}
          </p>
          <p>
            {edu.description === '' ? null : (
              <span>
                <strong>Description:</strong>
                {edu.description}
              </span>
            )}
          </p>
        </li>
      );
    });

    const expItems = experience.map(exp => {
      return (
        <li className="list-group-item" key={exp._id}>
          <h4>{exp.company}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>
            {exp.to === null ? (
              ' Now'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.from}</Moment>
            )}
          </p>
          <p>
            <strong>Position: </strong>
            {exp.title}
          </p>
          <p>
            {exp.location === '' ? null : (
              <span>
                <strong>Location: </strong>
                {exp.location}
              </span>
            )}
          </p>
          <p>
            {exp.description === '' ? null : (
              <span>
                <strong>Description: </strong>
                {exp.description}
              </span>
            )}
          </p>
        </li>
      );
    });
    return (
      <div className="row">
        <div className="col-md-6">
          {expItems.length > 0 ? (
            <div>
              <h3 className="text-center text-info">Experience</h3>
              <ul className="list-group">{expItems}</ul>
            </div>
          ) : null}
        </div>
        <div className="col-md-6">
          {eduItems.length > 0 ? (
            <div>
              <h3 className="text-center text-info">Education</h3>
              <ul className="list-group">{eduItems}</ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = propTypes;

export default ProfileCreds;
