import React from 'react';
import './button.css'

const STYLES =[
    'btn--primary--full',
    'btn--primary--underline'
    
]
    // to add button
    // <Button onClick={ 
    // ()=>{}}
    // type='button'
    // buttonStyle='btn--primary--full'
    // buttonSize='btn-medium'
    // >Kontakt
    // </Button>
    

const SIZES =[
    'btn--medium',
    'btn--small'
]
 const Button = ({children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    
}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Button
