import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .image {
    margin-right: 5px;
    font-size: 15px;
    color: ${(props) => props.theme.text};
  }

  input {
    border: 0px;
    background-color: transparent;
    outline: 0;
    font-size: 18px;
    flex: 1;
  }
`;
