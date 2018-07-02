import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

// Redux
import { connect } from 'react-redux';

const propTypes = {
  deleteEducation: func.isRequired,
  education: array.isRequired
};

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(exp => {
      return (
        <tr key={exp._id}>
          <td>{exp.school}</td>
          <td>{exp.degree}</td>
          <td>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
            {exp.to === null ? (
              'Current'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </td>
          <td>
            <button
              onClick={this.onDeleteClick.bind(this, exp._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = propTypes;

export default connect(
  null,
  { deleteEducation }
)(Education);
