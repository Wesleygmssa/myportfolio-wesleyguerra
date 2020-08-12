import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFilled &&
    css`
      color: #8357e5;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #8357e5;
      border-color: #8357e5;
    `}

  

  input {
    background-color: transparent;
    border: 0;
    width: 100%;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
      font-size: 16px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const InputGlobal = styled.input``;
