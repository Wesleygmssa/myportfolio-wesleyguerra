import { createGlobalStyle } from "styled-components";
import githubBackgourn from "../assets/github-background.svg";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
/* 1B242F */
    body{
        background: #1B242F url(${githubBackgourn}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        position:relative;
        color: #F3F3F4;
       
    }

    body , input , button{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        position:relative;
        max-width: 980px;
        margin: 0 auto;
        height:100%;
    }
    button{
    cursor: pointer;
    
}
`;
