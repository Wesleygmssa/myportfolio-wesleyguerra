import Styled from "styled-components";
import { shade } from "polished";

export const Container = Styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  svg{
   
 
  }
}

`;

export const Content = Styled.div`
  background: #10202B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  margin-bottom: 10%;

  


  form{
    width: 100%;
 
  }

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
    background: #566B84;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 24px;
    transition: background-color 0.2s;

    svg {
      margin-right: 8px;
        
    }

    &:hover {
      background: ${shade(0.2, "#566B84")};
    }
  }
`;
