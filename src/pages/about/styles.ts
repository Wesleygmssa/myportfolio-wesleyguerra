import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  max-width: 700px;
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
    border: 8px solid #8357e5;
  }

  h1 {
    font-size: 40px;
    position: relative;
    padding: 20px;
    color: #fff;
  }

  P {
    color: #fff;
    width: 100%;
    max-width: 700px;
    line-height: 30px;
    opacity: 0.9;
    text-align: justify;
    padding: 0px 20px;
    padding-bottom: 60px;
    letter-spacing: 2px;
  }
  span {
    text-align: center;
    margin: 20px;
    margin-bottom: 24px;
    font-weight: bold;
    color: #8357e5;
    width: 100%;
    letter-spacing: 2px;
    font-size: 14px;

    a {
      text-decoration: none;
      color: #8357e5;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
