import React,{LinkHTMLAttributes} from 'react';
import ButtonLink from './styles';

interface Linka extends LinkHTMLAttributes<HTMLLinkElement>{ 
    href:string ;
   
}

const Button:React.FC<Linka> = ({href, children}) =>{
    return(
        <ButtonLink >
            {children}
        </ButtonLink>
    )
}

export default Button;