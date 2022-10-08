import React from 'react';
import "../css/Result.css";
import { useNavigate } from "react-router-dom";

function TimeLeft() {

    let navigate = useNavigate();

    return (
        <div className="MainBoard">
            <h1>Time Is Up!</h1>
                <div className="ButtonBox">
                    <button className="PlayAgainButton" onClick={() => {navigate("/");}}>I Play Again</button>
                </div>
        </div>
    )
}

export default TimeLeft;