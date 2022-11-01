import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getMatchesSelector } from '../../redux/selectors/matchesSelector'
import useDispatchMatches from '../../hooks/useDispatchMatches'
import styles from './Matches.module.css'
import { Trans, useTranslation } from 'react-i18next'
import Preloader from '../assets/Preloader/Preloader'

interface MatchesProps {
	season_id: number
	live: boolean
	date_from: string
	date_to: string
}

const Matches: React.FC<MatchesProps> = ({
	season_id,
	live,
	date_from,
	date_to,
}) => {
	const { t } = useTranslation()

	const { matches, loadingMatches, errorMatches } =
		useSelector(getMatchesSelector)

	const { fetchMatches } = useDispatchMatches()

	const [liveIsChecked, setLiveIsChecked] = useState(false)
	const [dateFrom, setDate_from] = useState(date_from)
	const [dateTo, setDate_to] = useState(date_to)

	useEffect(() => {
		fetchMatches(season_id, false, 0, date_from, date_to)
	}, [])

	useEffect(() => {
		fetchMatches(season_id, liveIsChecked, 0, '', '')
	}, [liveIsChecked])

	useEffect(() => {
		fetchMatches(season_id, false, 0, dateFrom, dateTo)
	}, [dateTo, dateFrom])

	const handleChangeLive = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			setLiveIsChecked(true)
		} else {
			setLiveIsChecked(false)
		}
	}

	const handleChangeDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate_from(e.currentTarget.value)
	}

	const handleChangeDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate_to(e.currentTarget.value)
	}

	const onReset = () => {
		setDate_from(date_from)
		setDate_to(date_to)
		setLiveIsChecked(false)
	}

	if (loadingMatches) {
		return <Preloader />
	}

	if (errorMatches) {
		return <div>{errorMatches}</div>
	}

	return (
		<div className={styles.main}>
			<div className={styles.filters}>
				<div className={styles.filterBox}>
					<div className={styles.filterBox1}>
						<span>
							<input
								type='checkbox'
								id='liveMatch'
								name='liveMatch'
								disabled={!live}
								checked={liveIsChecked}
								onChange={handleChangeLive}
							/>{' '}
							<Trans t={t}>Live</Trans>
						</span>
					</div>
					<div className={styles.filterBox2}>
						<div>
							<p>
								<Trans t={t}>Date from</Trans>:
							</p>
							<input
								type='date'
								name='date_from'
								value={dateFrom}
								onChange={handleChangeDateFrom}
								required
								pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
							/>
						</div>
						<div>
							<p>
								<Trans t={t}>Date to</Trans>:
							</p>
							<input
								type='date'
								name='date_to'
								value={dateTo}
								onChange={handleChangeDateTo}
								required
								pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
							/>
						</div>
					</div>
					<div className={styles.filterBox3}>
						<button className='SearchBtn' onClick={() => onReset()}>
							<Trans t={t}>Reset</Trans>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.matchesBox}>
				{matches.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th scope='col'>
									<Trans t={t}>Status</Trans>
								</th>
								<th scope='col'>
									<Trans t={t}>Match start</Trans>
								</th>
								<th scope='col'>
									<Trans t={t}>Home team</Trans>
								</th>
								<th scope='col'>
									<Trans t={t}>Full time</Trans>
								</th>
								<th scope='col'>
									<Trans t={t}>Away team</Trans>
								</th>
							</tr>
						</thead>
						<tbody>
							{matches.map((match) => (
								<tr key={match.match_id}>
									<td data-label={`${t('Status')}`}>
										{match.status ? (
											<Trans t={t}>{match.status}</Trans>
										) : (
											'-----'
										)}
									</td>
									<td data-label={`${t('Match start')}`}>
										{match.match_start}
									</td>
									<td
										className={styles.teamTd}
										data-label={`${t('Home team')}`}
									>
										<img
											src={match.home_team.logo}
											alt={match.home_team.name}
										/>
										{match.home_team.name}
									</td>
									<td
										data-label={`${t('Full time')}`}
										className={styles.fullTime}
									>
										{match.stats.ft_score
											? match.stats.ft_score
											: '-----'}
									</td>
									<td
										data-label={`${t('Away team')}`}
										className={styles.teamTd}
									>
										<img
											src={match.away_team.logo}
											alt={match.away_team.name}
										/>
										{match.away_team.name}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div className={styles.NoResults}>No results</div>
				)}
			</div>
		</div>
	)
}

export default Matches
