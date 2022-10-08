import React from 'react';
import "../css/Result.css";
import { useNavigate } from "react-router-dom";

function TimeLeft() {

    let navigate = useNavigate();

    return (
        <div className="main-board">
            <h1>Time Is Up!</h1>
                <div className="button-container">
                    <button className="play-again-button" onClick={() => {navigate("/");}}>I Play Again</button>
                </div>
        </div>
    )
}

export default TimeLeft;