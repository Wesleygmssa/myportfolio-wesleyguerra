import React from 'react';
import ButtonLink from './styles';

const Button: React.FC = (props) =>{
    return(
        <ButtonLink >
            {props.children}
        </ButtonLink>
    )
}

export default Button;