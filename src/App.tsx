import React from 'react';
import {Route, Routes} from "react-router-dom";
import Players from './components/Players/Players';
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import Leagues from "./components/Leagues/Leagues";
import Seasons from "./components/Seasons/Seasons";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <div className="AppContent">
                <Routes>
                    <Route path={'/players'} element={<Players/>}/>
                    <Route path={'/leagues'} element={<Leagues/>}/>
                    <Route path='/seasons' element={<Seasons/>}>
                        <Route path=':league_id' element={<Seasons/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
