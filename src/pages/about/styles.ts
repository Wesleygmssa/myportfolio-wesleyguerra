
import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    padding: 30px;
    display:flex;

    
    div{
        width:100%;
        flex:1px;
    }

    img{
        width:50px;
        height:50px;
       
    }

    div + div{
        flex:999;
        justify-content:center;
        justify-items: center;
        text-align:center;
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

export const Banner = styled.section `
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    position:relative;

    
    img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        
    }

    h1{
        font-size: 40px;
        position: relative;
        padding: 20px;
    }

    P{
        width:100%;
        max-width:700px;
        line-height: 30px;
        opacity: 0.8;
        text-align: justify;
        padding: 0px 20px;
    }
span{
    margin: 20px;
    margin-bottom: 0px;
    font-weight: bold;
}

`

export const Footer = styled.footer`

    margin: 0 auto;
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