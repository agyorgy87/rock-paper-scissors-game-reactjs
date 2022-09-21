import './Navigation.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Game  from "./components/Game";
import TimeLeft from "./components/TimeLeft";
import ErrorPage from "./components/ErrorPage";
import YouWon from "./components/YouWon";
import YouLose from "./components/YouLose";


function Navigation() {

    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="timeleft" element={<TimeLeft />} />
            <Route path="won" element={<YouWon />} />
            <Route path="lose" element={<YouLose />} />
            <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
