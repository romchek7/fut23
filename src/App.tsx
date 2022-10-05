import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Players from './components/Players/Players';
import logo from './logo.svg';
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import Leagues from "./components/Leagues/Leagues";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <div className="AppContent">
                <Routes>
                    <Route path={'/players'} element={<Players/>}/>
                    <Route path={'/leagues'} element={<Leagues/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
