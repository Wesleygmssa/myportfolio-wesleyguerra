import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    width: 100%;
    padding: 30px;
    display:flex;

    img{
        width:60px;
        height:50px;
    }
  

    div{
        margin-left: 35%;
        justify-content:center;
        justify-items: center;
 
    
    }

    a{
        line-height: 50px;
        font-size: 12px;
        text-decoration:none;
        font-weight: bold;
        color:  #3a3a3a;

        letter-spacing: 2px;
       
        
        &:hover{
            /* color: ${shade(0.2,'#3a3a3a')}; */
            transition:  0.5s;
            opacity:0.7;
        } 

        & + a{
            margin-left: 16px;
        }   
    }

    
`

export const Banner = styled.section`
    height: 70vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    
    h1{
        font-size: 80px;
        text-align: center;
        letter-spacing: 2px;
     
    }

    p{
        font-size: 40px;
        font-weight: normal;
        text-align: center;
        margin-top: 16px;
        letter-spacing: 3px;
        opacity: 0.5;
        
 
    }
`;

export const Footer = styled.footer`

    margin: 0 auto;
    display:flex;
    justify-content:center;
    padding: 20px;
    position:relative;

   
    
    a{
        line-height: 50px;
        font-size: 12px;
        text-decoration:none;
        font-weight: bold;
        color: #3a3a3a;
        letter-spacing: 2px;

        & + a{
            margin-left: 16px;
        }

        &:hover{
            /* color: ${shade(0.2,'#000')}; */
            transition:  0.5s;
            opacity:0.7;
        } 

    }
`;