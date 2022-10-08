import "../css/Home.css";
import React  from "react";
import { useNavigate } from "react-router-dom";
import { FaHandRock } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';

function Home() {

    let navigate = useNavigate();
    
    return (
        <div className="StarterScreenFrame">
            <div>
                <div className="RpsBox">
                    <div className="Boxes">
                        <div className="NameTitles">
                            ROCK
                        </div>
                        <div className="Icons">
                            <FaHandRock/>
                        </div>
                    </div>
                    <div className="Boxes">
                        <div className="NameTitles">
                            PAPER
                        </div>
                        <div className="Icons">
                            <FaHandPaper/>
                        </div>  
                    </div>
                    <div className="Boxes">
                        <div className="NameTitles">
                            SCISSORS
                        </div>
                        <div className="ScissorsIcon">
                            <FaHandScissors/>
                        </div>      
                    </div>
                </div>
            </div>
            <div className="StartButtonBox">
                <button className="StartButton" onClick={() => {navigate("/game");}}>START</button>                
            </div>
        </div>
    )
}

export default Home;