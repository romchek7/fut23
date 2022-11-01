import React, { useEffect, useState } from 'react'
import styles from './Leagues.module.css'
import useDispatchLeagues from '../../hooks/useDispatchLeagues'
import { useSelector } from 'react-redux'
import { getLeagues } from '../../redux/selectors/leaguesSelector'
import Countries from '../Countries/Countries'
import { ILeague } from '../../redux/types/leaguesType'
import { NavLink } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import Preloader from '../assets/Preloader/Preloader'

interface LeagueProps {
	leagues: ILeague[]
}

const League: React.FC<LeagueProps> = ({ leagues }) => {
	const { t } = useTranslation()

	return (
		<div className={styles.leaguesWrapper}>
			{leagues.map((league) => (
				<div className={styles.leagueBox} key={league.league_id}>
					{league.name}
					<NavLink
						className={styles.ShowSeasonsNavlink}
						to={`/seasons/${league.league_id}`}
					>
						<button className='SearchBtn'>
							<Trans t={t}>Show seasons</Trans>
						</button>
					</NavLink>
				</div>
			))}
		</div>
	)
}

const Leagues: React.FC = () => {
	const { t } = useTranslation()

	const { fetchLeagues } = useDispatchLeagues()

	const { leagues, loadingLeagues, errorLeagues } = useSelector(getLeagues)

	const [county_id, setCountryID] = useState(0)
	const [continentIsReadyToFetch, setContinent] = useState('')

	useEffect(() => {
		fetchLeagues()
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	useEffect(() => {
		if (county_id) {
			fetchLeagues(county_id)
		}
		if (!county_id) {
			fetchLeagues()
		}
	}, [county_id])

	if (loadingLeagues) {
		return <Preloader />
	}

	if (errorLeagues) {
		return <div>{errorLeagues}</div>
	}

	return (
		<div className={styles.main}>
			<div className={styles.filtersMain}>
				<Countries
					county_id={county_id}
					setCountryID={setCountryID}
					continentIsReadyToFetch={continentIsReadyToFetch}
					setContinent={setContinent}
				/>
			</div>
			<div className={styles.content}>
				<h1>
					<Trans t={t}>Subscribed</Trans>:
				</h1>
				<League leagues={leagues} />
			</div>
		</div>
	)
}

export default Leagues
