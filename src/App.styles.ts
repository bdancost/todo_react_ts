import styled, { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mode: "light",
  background: "#f2f4f8",
  text: "#1c1e21",
  header: "#0d6efd",
  itemBackground: "#ffffff",
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  background: "#0f1115",
  text: "#e0e0e0",
  header: "#27ae60",
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

export const ToggleThemeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1f1f1f" : "#ffffff")};
  border: 1px solid ${({ theme }) => (theme.mode === "dark" ? "#555" : "#ccc")};
  border-radius: 15px;
  padding: 6px 12px;
  color: ${({ theme }) => (theme.mode === "dark" ? "#eee" : "#333")};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#2c2c2c" : "#f0f0f0"};
    opacity: 0.9;
  }

  // Quando a tela for menor que 768px, muda o estilo:
  @media (max-width: 768px) {
    position: static;
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;

export const Filtros = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &.ativo {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
