import styled from "styled-components";
import { shade } from "polished";

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  max-width: 700px;
`;

export const Form = styled.form`
  background: #494949;
  border-radius: 8px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin-top: 24px;

  h2 {
    margin-bottom: 24px;
    color: #fff;
  }

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #fff;

    & + input {
      margin-top: 8px;
    }

    &::placeholder {
      color: #666360;
      font-size: 16px;
    }
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

export const Banner = styled.section`
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
  }

  h1 {
    font-size: 40px;
    position: relative;
    padding: 20px;
  }

  P {
    width: 100%;
    max-width: 700px;
    line-height: 30px;
    opacity: 0.8;
    text-align: justify;
    padding: 0px 20px;
  }
  span {
    margin: 20px;
    margin-bottom: 0px;
    font-weight: bold;
  }
`;
