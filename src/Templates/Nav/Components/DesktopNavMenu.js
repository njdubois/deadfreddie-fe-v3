import React from 'react';
import styled from 'styled-components/macro';
import SocialNetworkIcons from "../../SocialNetworkIcons";

const DesktopMenuUl = styled.ul`
  text-transform: capitalize;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin-bottom: 0; // this is important!
  
  @media (max-width: 1000px) {
    display: none; // This hides the desktop menu.
  }
`;

const NavLi = styled.li`
  display: flex;
  align-items: center;
`;

function DesktopNavMenu({buildNav}) {
  return (
    <>
      <DesktopMenuUl>
        {buildNav()}
        <NavLi>
          <SocialNetworkIcons />
        </NavLi>
      </DesktopMenuUl>
    </>
  );
}

export default DesktopNavMenu;