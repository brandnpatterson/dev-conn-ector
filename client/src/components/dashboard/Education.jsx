import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

// Redux
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profileActions';

const propTypes = {
  deleteEducation: func.isRequired,
  education: array.isRequired
};

class Education extends React.Component {
  onDeleteClick(id) {
    if (window.confirm('Are you sure? This cannot be undone')) {
      this.props.deleteEducation(id);
    }
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
          <td className="button-container">
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
      <StyledEducation>
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
      </StyledEducation>
    );
  }
}

const StyledEducation = styled.div`
  td {
    width: 25%;
  }

  .button-container {
    position: relative;
    width: 100%;

    button {
      display: none;

      @media (min-width: 540px) {
        display: block;
        position: absolute;
        right: 15px;
      }
    }
  }
`;

Education.propTypes = propTypes;

export default connect(
  null,
  { deleteEducation }
)(Education);
