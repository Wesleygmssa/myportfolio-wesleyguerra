import styled from 'styled-components'
import {shade} from 'polished';



export const Header = styled.header`
width: 100%;
padding: 30px;
display:flex;




div{
    margin-left: 18%;
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
        transition:  0.5s;
        opacity:0.7;
    } 

    & + a{
        margin-left: 16px;
    }   
}
`

export const Title = styled.h1 `

color: #3a3a3a;
max-width: 350px;

`


export const Container = styled.div `
border: 1px solid red;
display: flex;

flex-wrap: wrap;
padding: 5px;
height: 100%;



div{
    margin-left: 16px;

    a{
    background: #ccc;
    border-radius: 8px;
    margin-top: 40px;
    width:100%;
    height: 400px;
    max-width:300px;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    padding:24px;
    text-decoration: none;
    color: #3a3a3a;
    text-align: justify;
    border: 1px solid #ccc;

    transition: all 0.2s;
  
    &:hover{
        background: #e4e4e4;

    }
    
    img{
        position: relative;
        width:100%;
        position: relative;
        margin: 0 auto;
        
    }

    h3{
        padding: 24px 0px;
        font-size:24px;
    }

    p{
        color: #727167;
        font-size: 16px;
     
    }

    }
}
`;