import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Players from './components/Players/Players';
import logo from './logo.svg';
import Navigation from "./components/Navigation/Navigation";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={'/players'} element={<Players/>}/>
            </Routes>
        </div>
    );
}

export default App;
