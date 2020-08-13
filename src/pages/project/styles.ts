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
    .disabled {
      opacity: 0.5;
    }
    background-color: #fff;
    width: 300px;
    max-height: 420px;
    border: 1px solid #fff;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 3px 9px 29px -13px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 3px 9px 29px -13px rgba(0, 0, 0, 0.52);
    box-shadow: 3px 9px 29px -13px rgba(0, 0, 0, 0.52);
    .cardimg {
      position: relative;
      border-radius: 8px;

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
        color: black;
      }

      p {
        width: 100%;
        padding: 0px 8px;
        text-align: justify;
        height: 100px;
        color: black;
        font-weight: 700;
        opacity: 0.8;
      }
    }

    .grupButton {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #566b84;
    }
  }
`;
