import styled, { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: "#f2f4f8",
  text: "#1c1e21",
  header: "#0d6efd",
  itemBackground: "#ffffff",
};

export const darkTheme: DefaultTheme = {
  background: "#0f1115",
  text: "#e0e0e0",
  header: "#00bcd4",
  itemBackground: "#1e1e2f",
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
  font-size: 24px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.header};
  padding: 15px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => props.theme.itemBackground};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;

  ::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.6;
  }
`;
