import Styled from "styled-components";
import { shade } from "polished";

export const Form = Styled.form`
  background: #494949;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  height: 80vh;
  padding: 16px;
  margin-top: 24px;

  h1 {
    margin-bottom: 24px;
    color: #fff;
  }


  textarea {
    margin-top: 8px;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    color: #fff;
    padding: 16px;
    width: 100%;
    height: 200px;

    &::placeholder {
      color: #666360;
      font-size: 16px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 24px;
    transition: background-color 0.2s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${shade(0.2, "#ff9000")};
    }
  }
`;

export const Container = Styled.div``;
