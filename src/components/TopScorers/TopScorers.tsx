import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTopScorersSelector } from '../../redux/selectors/topScorersSelector'
import useDispatchTopScorers from '../../hooks/useDispatchTopScorers'
import styles from './TopScorers.module.css'
import { Trans, useTranslation } from 'react-i18next'
import Preloader from '../assets/Preloader/Preloader'

const TopScorers: React.FC = () => {
	const { t } = useTranslation()

	const params = useParams()

	const { topScorers, loading, error } = useSelector(getTopScorersSelector)

	const { fetchTopScorers } = useDispatchTopScorers()

	useEffect(() => {
		if (params.season_id) {
			fetchTopScorers(+params.season_id)
		}
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	if (loading) {
		return <Preloader />
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className={styles.main}>
			{topScorers.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th scope='col'>
								<Trans t={t}>Position</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Name</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Team</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Matches played</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Minutes played</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Substituted in</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Goals</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Home goals</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Away goals</Trans>
							</th>
							<th scope='col'>
								<Trans t={t}>Penalties</Trans>
							</th>
						</tr>
					</thead>
					<tbody>
						{topScorers.map((topScorer, idx) => (
							<tr key={idx}>
								<td data-label={`${t('Position')}`}>
									{topScorer.pos}
								</td>
								<td data-label={`${t('Name')}`}>
									<Link
										to={`/player/${topScorer.player.player_id}`}
										target='_blank'
									>
										<p>{topScorer.player.player_name}</p>
									</Link>
								</td>
								<td data-label={`${t('Team')}`}>
									{topScorer.team.team_name}
								</td>
								<td data-label={`${t('Matches played')}`}>
									{topScorer.matches_played}
								</td>
								<td data-label={`${t('Minutes played')}`}>
									{topScorer.minutes_played}
								</td>
								<td data-label={`${t('Substituted in')}`}>
									{topScorer.substituted_in
										? topScorer.substituted_in
										: 0}
								</td>
								<td data-label={`${t('Goals')}`}>
									{topScorer.goals.overall}
								</td>
								<td data-label={`${t('Home goals')}`}>
									{topScorer.goals.home
										? topScorer.goals.home
										: 0}
								</td>
								<td data-label={`${t('Away goals')}`}>
									{topScorer.goals.away
										? topScorer.goals.away
										: 0}
								</td>
								<td data-label={`${t('Penalties')}`}>
									{topScorer.penalties
										? topScorer.penalties
										: 0}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div>No results</div>
			)}
		</div>
	)
}

export default TopScorers
