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
          <Parent background={`rgb(33, 37, 41)`}>
            <Nav />
          </Parent>
          <Parent>
            <Routes/>
          </Parent>
          <Parent background={`rgb(33, 37, 41)`}>
            <Footer />
          </Parent>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
