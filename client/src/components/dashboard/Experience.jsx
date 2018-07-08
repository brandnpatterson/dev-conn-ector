import React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

// Redux
import { connect } from 'react-redux';

const propTypes = {
  deleteExperience: func.isRequired,
  experience: array.isRequired
};

class Experience extends React.Component {
  onDeleteClick(id) {
    if (window.confirm('Are you sure? This cannot be undone')) {
      this.props.deleteEducation(id);
    }
  }

  render() {
    const experience = this.props.experience.map(exp => {
      return (
        <tr id={exp._id} key={exp._id}>
          <td>{exp.company}</td>
          <td>{exp.title}</td>
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
      <StyledExperience>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experience}</tbody>
        </table>
      </StyledExperience>
    );
  }
}

const StyledExperience = styled.div`
  td {
    width: 25%;
  }

  .button-container {
    position: relative;
    width: 100%;

    button {
      @media (min-width: 540px) {
        position: absolute;
        right: 15px;
      }
    }
  }
`;

Experience.propTypes = propTypes;

export default connect(
  null,
  { deleteExperience }
)(Experience);
