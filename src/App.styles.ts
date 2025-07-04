import styled, { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mode: "light",
  background: "#f2f4f8",
  text: "#333333",
  header: "#0d6efd",
  itemBackground: "#ffffff",
  headerBackground: "#0d6efd",
  hover: "#3a3b3c",
  badge: "#cccccc",
  badgeText: "#333",
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  background: "#0f1115",
  text: "#e0e0e0",
  header: "#27ae60",
  itemBackground: "#1e1e2f",
  headerBackground: "#27ae60",
  hover: "#3a3b3c",
  badge: "#444444",
  badgeText: "#555",
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
  flex: 1;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => props.theme.itemBackground};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;

  ::placeholder {
    color: ${({ theme }) => (theme.mode === "light" ? "#666" : "#aaa")};
    opacity: 1;
  }
`;

export const ToggleThemeButton = styled.button`
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
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#2c2c2c" : "#f0f0f0"};
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 20px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
`;

export const LangSelect = styled.select`
  padding: 6px 12px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => (theme.mode === "dark" ? "#555" : "#ccc")};
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  cursor: pointer;

  option {
    color: black;
  }
`;
