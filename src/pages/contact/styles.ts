import Styled from "styled-components";
import { shade } from "polished";

export const Container = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.link{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-left: 16px;
  margin-bottom: 16px;

  svg{
   margin-right: 20px; 
  }
  }


  
}
`;

export const Content = Styled.div`
  background: #1B232E;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  -webkit-box-shadow: 2px 2px 25px 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 25px 5px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 25px 5px rgba(0,0,0,0.75);
  


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
