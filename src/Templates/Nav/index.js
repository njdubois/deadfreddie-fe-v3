import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Context/AuthContext';
import { ALL_ROUTES, AUTHED_MENU, NOT_AUTHED_MENU } from "../../Routes";
import DesktopNavMenu from "./Components/DesktopNavMenu";
import MobileNavMenu from "./Components/MobileNavMenu";
import SocialNetworkIcons from "../SocialNetworkIcons";

const Header = styled.div`
  display: flex;
`;

const SubHeader = styled.div`
  margin: 0;
  padding: 0 0 .5rem 0;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`

const BrandContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 1000px) {
    justify-content: left;
  }
`

const NavBrand = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ElectricRed};
  text-shadow: 1px 1px  ${({ theme }) => theme.colors.VividYellow};
  text-transform: uppercase;
  font-size: 5.125rem;
  
  @media (max-width: 1000px) {
    font-size: 4rem;
    padding: .5rem;
  }
  
  @media (max-width: 800px) {
    font-size: 3rem;
    padding: .5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: .5rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const MobileMenuTriggerButton = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.ElectricRed};
  text-shadow: 2px 2px  ${({ theme }) => theme.colors.VividYellow};
  font-size: 5.125rem;
  
  @media (max-width: 1000px) {
    display: inline-block; // This is what shows the menu on sceen size.
    font-size: 4rem;
    padding: .5rem;
  }
  
  @media (max-width: 800px) {
    font-size: 3rem;
    padding: .5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 2rem;
    padding: .5rem;
  }
  
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const NavLi = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-bottom: 1rem;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ElectricRed};
  text-shadow: 1px 1px  ${({ theme }) => theme.colors.VividYellow};
  text-transform: capitalize;
  font-size: 1.7rem;
  
  &.selected {
    color: ${({ theme }) => theme.colors.NeonBlue};
    text-shadow: 1px 1px  ${({ theme }) => theme.colors.LimeGreen};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.NeonBlue};
    text-shadow: 1px 1px  ${({ theme }) => theme.colors.LimeGreen};
  }

  @media (max-width: 1000px) {
    font-size: 2.5rem;
    background-color: ${({ theme }) => theme.colors.PitchBlack};
    padding: .5rem;
    width: 100%;
  }
`;

function Nav() {
  const [mobileMenuVisible, toggleMobileMenu] = useState(false)
  const { isAuthed } = useContext(AuthContext);

  const buildNav = () => {

    return (
      <>
        {ALL_ROUTES.map( (route, key) => (route.title &&
          <NavLi key={key}>
            <NavLink
              to={route.url}
              onClick={() => toggleMobileMenu(false)}
              activeClassName="selected"
            >{route.title}</NavLink>
          </NavLi>
        ))}

        {isAuthed && AUTHED_MENU.map( (route, key) => (
          <NavLi key={key}>
            <NavLink
              to={route.url}
              onClick={() => toggleMobileMenu(false)}
              activeClassName="selected"
            >{route.title}</NavLink>
          </NavLi>
        ))}

        {!isAuthed && NOT_AUTHED_MENU.map( (route, key) => (
          <NavLi key={key}>
            <NavLink
              to={route.url}
              onClick={() => toggleMobileMenu(false)}
              activeClassName="selected"
            >{route.title}</NavLink>
          </NavLi>
        ))}
      </>
    );
  };

  return (
    <>
      <Header>
        <BrandContainer>
          <NavBrand
            to={"/"}
            onClick={() => toggleMobileMenu(false)}
            activeClassName="selected"
          >
            Dead Freddie
          </NavBrand>
        </BrandContainer>

        <MobileMenuTriggerButton onClick={() => toggleMobileMenu(!mobileMenuVisible)}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuTriggerButton>
      </Header>

      <SubHeader>
        <SocialNetworkIcons />
      </SubHeader>

      {!mobileMenuVisible &&
        <DesktopNavMenu buildNav={buildNav} />
      }
      {mobileMenuVisible &&
        <MobileNavMenu buildNav={buildNav} />
      }
    </>
  );
}

export default Nav;