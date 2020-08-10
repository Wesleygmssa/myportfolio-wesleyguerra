import { createGlobalStyle } from "styled-components";
import githubBackgourn from "../assets/github-background.svg";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        background: #FFF url(${githubBackgourn}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        position:relative;
       
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
        /* border: 1px solid */
        /* padding: 40px 20px;  */
    }
    button{
    cursor: pointer;
}
`;
