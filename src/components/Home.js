import "../css/Home.css";
import React  from "react";
import { useNavigate } from "react-router-dom";
import { FaHandRock } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';

function Home() {

    let navigate = useNavigate();
    
    return (
        <div className="starter-screen-frame">
            <div>
                <div className="rps-container">
                    <div className="containers">
                        <div className="name-titles">
                            ROCK
                        </div>
                        <div className="icons">
                            <FaHandRock/>
                        </div>
                    </div>
                    <div className="containers">
                        <div className="name-titles">
                            PAPER
                        </div>
                        <div className="icons">
                            <FaHandPaper/>
                        </div>  
                    </div>
                    <div className="containers">
                        <div className="name-titles">
                            SCISSORS
                        </div>
                        <div className="scissors-icon">
                            <FaHandScissors/>
                        </div>      
                    </div>
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => {navigate("/game");}}>START</button>                
            </div>
        </div>
    )
}

export default Home;