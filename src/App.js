import React from "react";
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme} from './theme';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Templates/Nav';
import { AuthProvider } from './Context/AuthContext';
import Routes from './Routes';
import Parent from "./Templates/Parent";
import Footer from "./Templates/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Parent background={theme.colors.PitchBlack}>
            <Nav />
          </Parent>
          <Parent>
            <Routes/>
          </Parent>
          <Parent background={theme.colors.PitchBlack}>
            <Footer />
          </Parent>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
