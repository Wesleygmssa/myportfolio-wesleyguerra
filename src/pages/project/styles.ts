import styled from 'styled-components'
import { shade } from 'polished';



export const Title = styled.h1`

color: #3a3a3a;
max-width: 350px;
margin-bottom: 40px;

`


export const Container = styled.div`

display: flex;
flex-wrap: wrap;
padding: 5px;
height: 100%;

.card{
    background: #f4f4f4;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction:column;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding:8px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
 

    /* &:hover{
        background: #e4e4e4;

    } */

 

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
     
        font-size:24px;
    }

    p{
        text-align:justify;
        font-weight:500;
        color: #3a3a3a;
        font-size: 16px;
        padding: 16px 16px;
     
    }

    .grupButton{
        display: flex;

        a + a{
            margin-left: 8px;
        }

        a{
           
            color: var(--white);
            border: 1px solid #fff;
            box-sizing: border-box;
            cursor: pointer;
            padding: 16px 16px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            outline: none;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            transition: opacity .3s;
&:hover,
&:focus {
 opacity: .5;
}
            

        }
}

    }
       
`;