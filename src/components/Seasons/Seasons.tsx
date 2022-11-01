import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useDispatchSeasons from '../../hooks/useDispatchSeasons'
import { useSelector } from 'react-redux'
import { getSeasons } from '../../redux/selectors/seasonsSelector'
import styles from './Seasons.module.css'
import useDispatchLeague from '../../hooks/useDispatchLeague'
import { getLeague } from '../../redux/selectors/leaguesSelector'
import useDispatchCountry from '../../hooks/useDispatchCountry'
import { fetchCountrySelector } from '../../redux/selectors/countriesSelector'
import { Trans, useTranslation } from 'react-i18next'
import Preloader from '../assets/Preloader/Preloader'

const Seasons: React.FC = () => {
	const { t } = useTranslation()

	const params = useParams()

	const { fetchSeasons } = useDispatchSeasons()
	const { fetchLeague } = useDispatchLeague()
	const { fetchCountry } = useDispatchCountry()

	const { seasons, loadingSeasons, errorSeasons } = useSelector(getSeasons)
	const { league, loadingLeague, errorLeague } = useSelector(getLeague)
	const { country, loadingCountry, errorCountry } =
		useSelector(fetchCountrySelector)

	useEffect(() => {
		if (params.league_id) {
			fetchSeasons(+params.league_id)
			fetchLeague(+params.league_id)
		}
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	useEffect(() => {
		if (seasons.length > 0) {
			fetchCountry(seasons[0].country_id)
		}
	}, [seasons])

	if (loadingSeasons || loadingLeague || loadingCountry) {
		return <Preloader />
	}

	if (errorSeasons && errorLeague && errorCountry) {
		return <div>{errorSeasons}</div>
	}

	return (
		<div className={styles.main}>
			<h1>{league?.name}</h1>
			<div className={styles.seasons}>
				<table>
					<thead>
						<tr>
							<th scope='col'>
								<Trans t={t}>Season</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>League</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Country</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Is current</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Start date</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>End date</Trans>
							</th>
							<th className={styles.showInfo} scope='col'>
								<Trans t={t}>Information</Trans>
							</th>
						</tr>
					</thead>
					<tbody>
						{seasons.map((season) => (
							<tr key={season.season_id}>
								<td data-label={`${t('Season')}`}>
									{season.name}
								</td>
								<td data-label={`${t('League')}`}>
									{league?.name}
								</td>
								<td data-label={`${t('Country')}`}>
									<Trans t={t}>{country?.name}</Trans>
								</td>
								<td data-label={`${t('Is current')}`}>
									{season.is_current === 1 ? (
										<Trans t={t}>Current</Trans>
									) : (
										<Trans t={t}>Finished</Trans>
									)}
								</td>
								<td data-label={`${t('Start date')}`}>
									{season.start_date}
								</td>
								<td data-label={`${t('End date')}`}>
									{season.end_date}
								</td>
								<td
									data-label={`${t('Information')}`}
									className={styles.showInfo}
								>
									<Link
										className='SearchBtn'
										to={`/season/${season.season_id}`}
									>
										<Trans t={t}>Show info</Trans>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Seasons
