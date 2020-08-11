import styled from "styled-components";
import { shade } from "polished";

export const Banner = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 80px;
    text-align: center;
    letter-spacing: 2px;
    color: #8357e5;
  }

  p {
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin-top: 16px;
    letter-spacing: 3px;
    opacity: 0.5;
  }

  span {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    a {
      color: #808080;
    }
    a + a {
      margin-left: 32px;
    }
  }
`;
