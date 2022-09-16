import React from "react";
import './ClearButton.css'

const ClearButton = ( { children , changeClick }) => {
    return(
        <div className="clear-button" onClick={ () => changeClick()}>
            { children }
        </div>
    )
}

export default ClearButton;