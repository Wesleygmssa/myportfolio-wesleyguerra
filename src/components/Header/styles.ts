import styled from 'styled-components';

export const HeaderBase = styled.header`
    width: 100%;
    padding: 30px;
    display:flex;


    
    div{
        width:100%;
        flex:1px;
        text-align: center;
    }

    img{
        width:50px;
        height:50px;
       
    }

    div + div{
       
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