import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileActions = () => {
  return (
    <StyledProfileActions className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" />
        Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
    </StyledProfileActions>
  );
};

const StyledProfileActions = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default ProfileActions;
