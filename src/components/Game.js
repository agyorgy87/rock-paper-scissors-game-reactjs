import "../css/Game.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { FaHandRock } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
import { FaHandScissors } from 'react-icons/fa';


export default function Game() {

    let navigate = useNavigate();

    const [comPoints, setComPoints] = useState(0);

    const [playerPoints, setPlayerPoints] = useState(0);

    const [seconds, setSeconds] = useState(30);
    
    const [resultTable, setResultTable] = useState("Let's play the game");
    
    const [comChoiceIcon, setComChoiceIcon] = useState();

    const [onlyComChoiceIconVisible, setComChoiceIconVisible] = useState(comChoiceIcon);
    
    const [myChoiceIcon, setMyChoiceIcon] = useState("?");

    const [OnlyMyIconVisible, setMyOnlyIconVisible] = useState(myChoiceIcon);

    const [comIconRotate, setComIconRotate] = useState(true);

    const [myIconRotate, setMyIconRotate] = useState(true);

    const [buttonDisable, setButtonDisable] = useState(false);

    useEffect (() => {
        let myTimeout;
            if(seconds > 0) {
                myTimeout = setTimeout(() => setSeconds(seconds - 1), 1000);	
            }else{
                navigate("/timeleft")
            }
            return () => {
                clearTimeout(myTimeout)			
            }
    },[seconds])

    useEffect (() => {
        setTimeout(() => {
            if(playerPoints > 4){
                navigate("/won")
            }else if(comPoints > 4){
                navigate("/lose")
            }
    },5000);
    },[playerPoints,comPoints]);

    useEffect (() => {
        if(playerPoints > 4){
            setButtonDisable(true)
        }else if(comPoints > 4){
            setButtonDisable(true)
        }
    },[playerPoints,comPoints]);


    useEffect (() => {
        if(myChoiceIcon === "Rock" && comChoiceIcon === "Rock"){
            setResultTable("Draw")
            setMyOnlyIconVisible(<FaHandRock/>)
            setComChoiceIconVisible(<FaHandRock/>)
            setMyIconRotate(true)
            setComIconRotate(true)
        }else if(myChoiceIcon === "Rock" && comChoiceIcon === "Paper"){
            setResultTable("You Lost This Round")
            setMyOnlyIconVisible(<FaHandRock/>)
            setComChoiceIconVisible(<FaHandPaper/>)
            setMyIconRotate(true)
            setComIconRotate(true)
        }else if(myChoiceIcon === "Rock" && comChoiceIcon === "Scissors"){
            setResultTable("You Won This Round")
            setMyOnlyIconVisible(<FaHandRock/>)
            setComChoiceIconVisible(<FaHandScissors/>)
            setMyIconRotate(true)
            setComIconRotate(false)
        }else if(myChoiceIcon === "Paper" && comChoiceIcon === "Rock"){
            setResultTable("You Won This Round")
            setMyOnlyIconVisible(<FaHandPaper/>)
            setComChoiceIconVisible(<FaHandRock/>)
            setMyIconRotate(true)  
            setComIconRotate(true)
        }else if(myChoiceIcon === "Paper" && comChoiceIcon === "Paper"){
            setResultTable("Draw")
            setMyOnlyIconVisible(<FaHandPaper/>)
            setComChoiceIconVisible(<FaHandPaper/>)
            setMyIconRotate(true)
            setComIconRotate(true)
        }else if(myChoiceIcon === "Paper" && comChoiceIcon === "Scissors"){
            setResultTable("You Lost This Round")
            setMyOnlyIconVisible(<FaHandPaper/>)
            setComChoiceIconVisible(<FaHandScissors/>)
            setMyIconRotate(true)
            setComIconRotate(false)
        }else if(myChoiceIcon === "Scissors" && comChoiceIcon === "Rock"){
            setResultTable("You Lost This Round")
            setMyOnlyIconVisible(<FaHandScissors/>)
            setComChoiceIconVisible(<FaHandRock/>)
            setMyIconRotate(false)
            setComIconRotate(true)
        }else if(myChoiceIcon === "Scissors" && comChoiceIcon === "Paper"){
            setResultTable("You Won This Round")
            setMyOnlyIconVisible(<FaHandScissors/>)
            setComChoiceIconVisible(<FaHandPaper/>)
            setMyIconRotate(false)
            setComIconRotate(true)
        }else if(myChoiceIcon === "Scissors" && comChoiceIcon === "Scissors"){
            setResultTable("Draw")
            setMyOnlyIconVisible(<FaHandScissors/>)
            setComChoiceIconVisible(<FaHandScissors/>)
            setMyIconRotate(false)
            setComIconRotate(false)
        }	
    },[comChoiceIcon, myChoiceIcon]);

    const myChoiceItem = (e) => {

        let myChoice = ""; 
        if(e.target.id === "rockID"){
            myChoice = "Rock";
        }else if(e.target.id === "paperID"){
            myChoice = "Paper"
        }else if(e.target.id === "scissorsID"){
            myChoice = "Scissors";
        }

        let comChoice = comIcon();

        if(myChoice === "Rock" && comChoice === "Paper"){
            setComPoints(comPoints + 1)
        }else if(myChoice === "Rock" && comChoice === "Scissors"){
            setPlayerPoints(playerPoints + 1)
        }else if(myChoice === "Paper" && comChoice === "Rock"){
            setPlayerPoints(playerPoints + 1)
        }else if(myChoice === "Paper" && comChoice === "Scissors"){
            setComPoints(comPoints + 1)
        }else if(myChoice === "Scissors" && comChoice === "Rock"){
            setComPoints(comPoints + 1)
        }else if(myChoice === "Scissors" && comChoice === "Paper"){
            setPlayerPoints(playerPoints + 1)
        }

        setMyChoiceIcon(myChoice)
        setComChoiceIcon(comChoice)
        setSeconds(30)
    }

    const comIcon = () => {
        const randomGeneratorNumber = 999999
        let resultNumber = Math.floor(Math.random() * randomGeneratorNumber);

        let comChoice = ""
        if(resultNumber < 300000){
            comChoice = "Rock";
        }else if(resultNumber > 300000 && resultNumber < 600000){
            comChoice = "Paper";
        }else if(resultNumber > 600000 && resultNumber < 1000000){
            comChoice = "Scissors";
        }
        return comChoice;
    }

    return (
        <div className="gameApp">
            <div className="topHeader">  
                <div className="pointBox">
                    <h3>You have to win 5 rounds to win the game</h3>
                    <h3>Com Points: {comPoints}</h3>
                    <h3>Player Points: {playerPoints}</h3>
                </div>
                <div className="countDown">
                    <div className="timeLeftText">
                        <h3>TIME LEFT:</h3>
                    </div>
                    <div>
                        <h3 className="onlySecons">{seconds}</h3>   
                    </div>
                </div>
            </div>
            <div className="comRandomBox">
                <div className="comChoiceIconClass">
                    <i className="comIconFa" style={ comIconRotate ? {transform:'rotate(180deg)'} : {transform:'rotate(270deg)'} }>{onlyComChoiceIconVisible}</i>
                </div>
            </div>
            <div className="gameResultTextBox">
                <div className="whosWin">
                    <h3>{resultTable}</h3>
                </div>
            </div>
            <div className="myChoiceBox">
                <div className="myChoiceIconClass">
                    <i className="myIconFa" style={ myIconRotate ? {transform:'rotate(0deg)'} : {transform:'rotate(90deg) scaleY(-1)'} }>{OnlyMyIconVisible}</i>
                </div>
            </div>
            <div className="choicesBox">
                <div>
                    <button id="rockID" className="btn rockButton" onClick={(e)=> myChoiceItem(e)} disabled={buttonDisable}>
                        <FaHandRock className="iconClass"/>
                    </button>
                </div>
                <div>
                    <button id="paperID" className="btn paperButton" onClick={(e)=> myChoiceItem(e)} disabled={buttonDisable}>
                    <FaHandPaper className="iconClass"/>
                    </button>
                </div>
                <div>
                    <button id="scissorsID" className="btn scissorsButton" onClick={(e)=> myChoiceItem(e)} disabled={buttonDisable}>
                    <FaHandScissors className="faScissors"/>
                    </button>
                </div>
            </div>
        </div>
  );
  }