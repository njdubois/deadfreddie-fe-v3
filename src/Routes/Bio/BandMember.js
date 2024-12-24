import React from 'react';
import styled from 'styled-components/macro';
import StyledCol from "../../Templates/StyledCol";

const BioInstruments = styled.p`
  font-size: 16px;
  color: #D2D9E2;
`;

const BioPic = styled.img`
  width: 150px;
  background-color: darkgrey;

  @media (max-width: 900px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

const BioTitle = styled.p`
  font-size: 18px;
  color: #FF7B12;
`;



function BandMember({memberDetails}) {
  return (
    <StyledCol>
      <BioTitle>{memberDetails.name}</BioTitle>
      {memberDetails.picture && <BioPic src={"/pics/" + memberDetails.picture} />}

      <BioInstruments>{memberDetails.instruments}</BioInstruments>
    </StyledCol>
  );
}

BandMember.propTypes = {};

export default BandMember;
