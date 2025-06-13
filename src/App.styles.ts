import styled, { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: "#f5f5f5",
  text: "#333",
  header: "#007bff",
  itemBackground: "#ffffff",
};

export const darkTheme: DefaultTheme = {
  background: "#121212",
  text: "#ffffff",
  header: "#1e90ff",
  itemBackground: "#1f1f1f",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px 20px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;
