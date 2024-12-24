import React from 'react';
import styled from 'styled-components/macro';

import { bandData } from "../../band-data"
import BulletItem from '../../Components/Parts/Bullets/BulletItem';
import StyledCol from "../../Templates/StyledCol";
import StyledRow from "../../Templates/StyledRow";
import {P} from "../../Templates/P";

const HomeImageWrapper = styled.div`
  width:100%;
`

const HomeImage = styled.img`
  border-radius:5px;
  width: 100%;
`;

const BulletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TipLink = styled.a`
    text-decoration: none;
`;

const TipWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: center;
`;

const TipJar = styled.img`
    margin: 5px;
    width: 30%;
`;

const TipMessage = styled.p`
    color: #D2D9E2;
    font-size: 1.2rem;
    text-align: right;
    margin: 10px;
`

function Home() {
  return (
    <>
      <StyledRow>
        <StyledCol>
          <HomeImageWrapper>
            <HomeImage src={"/Pictures/clipped-hero.png"} alt="band banner"/>
          </HomeImageWrapper>
        </StyledCol>
      </StyledRow>

    </>
  );
}

Home.propTypes = {};

export default Home;
