import styled from 'styled-components'
import {shade} from 'polished';



export const Title = styled.h1 `

color: #3a3a3a;
max-width: 350px;
margin-bottom: 40px;

`


export const Container = styled.div `

display: flex;
flex-wrap: wrap;
justify-content:center;
padding: 5px;
height: 100%;

.card{
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction:column;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding:8px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
 

    &:hover{
        background: #e4e4e4;

    }
 

    a{
    width: 100%;
    text-decoration: none;
    color: #3a3a3a;
    text-align: justify;
    transition: all 0.2s;

    
  
    .imgtopo{
        width: 100%;
       
    }
    
    img{
        position: relative;
        width:100%;
        position: relative;
        margin: 0 auto;
        
    }

    }

    
    h3{
        padding: 16px 16px;
        font-size:24px;
    }

    p{
        padding: 8px;
        color: #727167;
        font-size: 16px;
     
    }
}
`;