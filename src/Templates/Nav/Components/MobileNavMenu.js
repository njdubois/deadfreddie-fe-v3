import React from 'react';
import styled from 'styled-components/macro';

const MobileNavUl = styled.ul`
  margin-left:0;
  text-transform: capitalize;
  padding: 1rem;
  justify-content: space-evenly;
  list-style-type: none;
  border: 1px solid ${({ theme }) => theme.colors.mainTextColor};
  
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