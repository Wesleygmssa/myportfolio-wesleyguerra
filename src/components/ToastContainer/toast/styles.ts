import styled, { css } from "styled-components";

interface ContainerProps {
  type?: "success" | "error" | "info"; //não é obrigatório
  hasDescription: boolean;
}

//isolamento de css
const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  & + div {
    margin-top: 8px;
  }

  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  background: #ebf8ff;
  color: #3172b7;
  
/* exemplo de outra forma de fazer */
  /* ${(props) =>
    props.type === "success" &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `} */

  /* Ordem linear */
  ${(props) => toastTypeVariations[props.type || "info"]}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.9;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
