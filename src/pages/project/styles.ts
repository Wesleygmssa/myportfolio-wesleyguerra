import styled from "styled-components";

export const Title = styled.h1`
  color: #3a3a3a;
  max-width: 350px;
  margin-bottom: 40px;
  color: #fff;
  line-height: 32px;
  opacity: 0.8;
`;
export const Cards = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;
  justify-content: center;

  .card {
    background-color: #1b242f;
    width: 300px;
    max-height: 420px;
    border: 1px solid #1b242f;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 25px 5px rgba(0, 0, 0, 0.75);
    .cardimg {
      position: relative;
      border-radius: 8px;
      width: 100%;
      height: 150px;

      img {
        border-radius: 8px;
        width: 100%;
        height: 150px;
      }
    }

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 8px;
      flex-direction: column;

      h3 {
        width: 100%;
        text-align: center;
        padding: 16px 0px;
        font-size: 24px;
        color: white;
        opacity: 0.8;
      }

      p {
        width: 100%;
        padding: 0px 8px;
        text-align: justify;
        height: 100px;
        color: black;
        font-weight: 700;
        color: #fff;
        opacity: 0.8;
      }
    }

    .grupButton {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
