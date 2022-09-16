import React from "react";
import './Display.css'


const Display = ( { display } ) => {
    return(
        <div className="input-display">
            { display }
        </div>
    )
}

export default Display;