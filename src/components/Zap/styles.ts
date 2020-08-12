import styled from "styled-components";

export const IconZap = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 40%;
  z-index: 4;
  right: 2px;
  border-radius: 50%;

  a {
    display: flex;
    padding: 10px;
    border-radius: 8px;
    line-height: 50px;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    color: #9466ff;
    background-color: #29292e;
    margin-top: 2px;

    letter-spacing: 2px;

    &:hover {
      transition: 0.5s;
      opacity: 0.7;
    }

    svg {
    }
  }

  /* img {
    width: 50px;
    border-radius: 50%;
  } */
`;
