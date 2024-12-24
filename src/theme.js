import { createGlobalStyle } from 'styled-components';
import styled from "styled-components/macro";

export const theme = {
  colors: {
    ElectricRed: '#FF2D55',
    NeonBlue: '#1E90FF',
    LimeGreen: '#AFFF33',
    PitchBlack: '#1A1A1A',
    VividYellow: '#FFD700',
  }
};

export const GlobalStyle = createGlobalStyle`
  
  body {
    background-size:cover;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.PitchBlack};
    background-position:center;
    margin: 0;
    padding: 0;
    background-attachment: fixed;
    //color: #D2D9E2;
    font-family: "Bungee Inline", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const ColorBox = styled.div`
  display: inline-block;
  width:200px;
  height:200px;
`;

export const Box1 = styled(ColorBox)`
  background-color: #FF2D55;
`;

export const Box2 = styled(ColorBox)`
  background-color: #1E90FF;
`;

export const Box3 = styled(ColorBox)`
  background-color: #AFFF33;
`;

export const Box4 = styled(ColorBox)`
  background-color: #1A1A1A;
`;

export const Box5 = styled(ColorBox)`
  background-color: #FFD700;
`;