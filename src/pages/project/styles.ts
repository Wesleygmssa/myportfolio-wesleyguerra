import styled from 'styled-components'
import { shade } from 'polished';

export const Title = styled.h1`
color: #3a3a3a;
max-width: 350px;
margin-bottom: 40px;

`
export const Cards = styled.div`
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
 height: 100vh;
 

.card{
    width: 300px;
    max-height: 420px;
    border: 1px solid #ddd;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 8px;
    
    .cardimg{
        position: relative;
      
        img{
            width: 100%;
            height: 150px;
          
        }
    }

    .card-content{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 8px;
        flex-direction: column;

        h3{
            width: 100%;
            text-align: center;
            padding: 16px 0px;
            font-size: 24px;
        }

        p{
            width: 100%;
            padding: 0px 8px;
            text-align: justify;
            height: 100px;
            color: #616161;
            font-weight: 700;
        }
    }

    .grupButton{
        display: flex;
        justify-content: center;
        align-items: center;
          
        a{
            flex:1;
            margin-left: 5px;
            margin-right: 5px;
            text-align: center;
            color: var(--white);
            border: 1px solid #bfbfbf;
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