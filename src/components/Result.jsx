import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    return(
        <div>You won!
            <p>{location.state.message}</p>
        </div>
        
    )
}

export default Result;