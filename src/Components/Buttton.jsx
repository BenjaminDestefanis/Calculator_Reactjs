import React from "react";
import './Button.css'

const Button = ( { changeClick , children} ) => {

    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=')

                //true             //true           /true
    }


    return (
        <div onClick={ () => changeClick(children) } className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}>
                { children }
        </div>
    )
}


export default Button;