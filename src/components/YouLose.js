import React from 'react';
import "./Result.css";
import { useNavigate } from "react-router-dom";

function YouLose() {

    let navigate = useNavigate();

    return (
        <div className="MainBoard">
            <h1>You Lost!</h1>
                <div className="ButtonBox">
                    <button className="PlayAgainButton" onClick={() => {navigate("/");}}>I Play Again</button>
                </div>
        </div>
    )
}

export default YouLose;