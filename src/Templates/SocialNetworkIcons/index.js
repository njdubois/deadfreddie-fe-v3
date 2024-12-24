import React from 'react';
import styled from 'styled-components/macro';
import Email from "../../media/email.png"
import Facebook from "../../media/facebook.png"
import Soundcloud from "../../media/soundcloud.png"
import Youtube from "../../media/youtube.png"

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const NavLiIcon = styled.div`
  margin: 0 1rem;
`;

const NavLinkIconImage = styled.img`
  width: 25px;

  @media (max-width: 1000px) {
    width: 35px;
  }

  @media (max-width: 800px) {
    width: 25px;
  }
`;

function SocialNetworkIcons() {
  return (
    <IconWrapper>
      <NavLiIcon>
        <a href={`mailto:liquidfunband@yahoo.com`}>
          <NavLinkIconImage src={Email}/>
        </a>
      </NavLiIcon>
      <NavLiIcon>
        <a href='https://www.facebook.com/liquidfunband' target="_blank">
          <NavLinkIconImage src={Facebook}/>
        </a>
      </NavLiIcon>
      <NavLiIcon>
        <a href="https://www.youtube.com/channel/UCVaoi5Sdi1_nCfaec9uz5Vg" target="_blank">
          <NavLinkIconImage src={Youtube}/>
        </a>
      </NavLiIcon>
      <NavLiIcon>
        <a href='https://soundcloud.com/andygrebmusic' target="_blank">
          <NavLinkIconImage src={Soundcloud}/>
        </a>
      </NavLiIcon>
    </IconWrapper>
  );
}

export default SocialNetworkIcons;