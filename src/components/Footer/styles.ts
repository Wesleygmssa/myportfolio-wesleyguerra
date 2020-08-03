import styled from 'styled-components'

export const FooterBase = styled.footer`

    margin-top: auto;
    display:flex;
    justify-content:center;
    padding: 5px;
    position:relative;
  

   
    
    a{
        line-height: 50px;
        font-size: 12px;
        text-decoration:none;
        font-weight: bold;
        color:  #3a3a3a;

        letter-spacing: 2px;

        & + a{
            margin-left: 16px;
        }

        &:hover{
            transition:  0.5s;
            opacity:0.7;
        } 

    }
`;