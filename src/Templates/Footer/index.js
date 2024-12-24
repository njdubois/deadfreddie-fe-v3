import React from 'react';
import SocialNetworkIcons from "../SocialNetworkIcons";
import StyledRow from "../StyledRow";
import StyledCol from "../StyledCol";
import styled from "styled-components/macro";

const NavBrand = styled.p`
  margin: 0;
  
  text-align: left;
  color: ${({ theme }) => theme.colors.ElectricRed};;
  font-size: 1rem;
  
`;

function Footer() {
  return (
    <StyledRow>
      <StyledCol sm={4}>
        <NavBrand>
          Dead Freddie
        </NavBrand>
      </StyledCol>
      <StyledCol sm={4} />
      <StyledCol sm={4}>
        <SocialNetworkIcons />
      </StyledCol>
    </StyledRow>
  );
}

export default Footer;