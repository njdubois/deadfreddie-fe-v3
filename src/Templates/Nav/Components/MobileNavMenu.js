import React from 'react';
import styled from 'styled-components/macro';

const MobileNavUl = styled.ul`
  margin-left:0;
  text-transform: capitalize;
  padding: 1rem 1rem 5rem;
  justify-content: space-evenly;
  list-style-type: none;
  
  @media (min-width: 1000px) {
    display: none;
  }
`;

function MobileNavMenu({buildNav}) {
  return (
    <MobileNavUl>
      {buildNav()}
    </MobileNavUl>
  );
}

export default MobileNavMenu;