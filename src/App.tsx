import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Players from './components/Players/Players'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import Leagues from './components/Leagues/Leagues'
import Seasons from './components/Seasons/Seasons'
import Footer from './components/Footer/Footer'
import AppContent from './components/AppContent/AppContent'
import Season from './components/Seasons/Season/Season'
import Teams from './components/Teams/Teams'
import TopScorers from './components/TopScorers/TopScorers'
import PlayerById from './components/Players/PlayerById/PlayerById'
import Bookmakers from './components/Bookmakers/Bookmakers'
import Markets from './components/Markets/Markets'
import Referees from './components/Referees/Referees'
import Venues from './components/Venues/Venues'
import Settings from './components/Settings/Settings'

function App() {
	return (
		<div className='App'>
			<Navigation />
			<div className='AppContent'>
				<Routes>
					<Route path={'/'} element={<AppContent />} />
					<Route path={'/fut23'} element={<AppContent />} />
					<Route path={'/players'} element={<Players />} />
					<Route path={'/leagues'} element={<Leagues />} />
					<Route path='/seasons' element={<Seasons />}>
						<Route path=':league_id' element={<Seasons />} />
					</Route>
					<Route path='/season' element={<Season />}>
						<Route path=':season_id' element={<Season />} />
					</Route>
					<Route path={'/teams'} element={<Teams />} />
					<Route path={'/topScorers'} element={<TopScorers />}>
						<Route path=':season_id' element={<TopScorers />} />
					</Route>
					<Route path={'/player'} element={<PlayerById />}>
						<Route path=':player_id' element={<PlayerById />} />
					</Route>
					<Route path={'/bookmakers'} element={<Bookmakers />} />
					<Route path={'/markets'} element={<Markets />} />
					<Route path={'/referees'} element={<Referees />} />
					<Route path={'/venues'} element={<Venues />} />
					<Route path={'/settings'} element={<Settings />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
