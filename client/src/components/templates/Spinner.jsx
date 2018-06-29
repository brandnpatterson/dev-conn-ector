import React from 'react';
import styled from 'styled-components';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={spinner} alt="Loading..." />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  display: block;
  margin: auto;
  width: 200px;
`;

export default Spinner;
