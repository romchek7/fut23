import React, { useEffect } from 'react'
import styles from './PlayerById.module.css'
import { useSelector } from 'react-redux'
import { getPlayerByIdSelector } from '../../../redux/selectors/playersSelector'
import useDispatchPlayers from '../../../hooks/useDispatchPlayers'
import { useParams } from 'react-router-dom'
import icon from '../../../assets/img/account.png'
import { useTranslation, Trans } from 'react-i18next'

const PlayerById: React.FC = () => {
	const { t } = useTranslation()

	const params = useParams()

	const { player, loading, error } = useSelector(getPlayerByIdSelector)

	const { getPlayerById } = useDispatchPlayers()

	useEffect(() => {
		if (params.player_id) {
			getPlayerById(+params.player_id)
		}
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className={styles.main}>
			{player && (
				<div className={styles.content}>
					<img
						src={player.img ? player.img : icon}
						alt={player.lastname}
					/>
					<p>
						{player.firstname} {player.lastname}
					</p>
					<p>
						<Trans t={t}>Birthday</Trans>:{' '}
						{player.birthday ? player.birthday : 'No results'}
					</p>
					<p>
						<Trans t={t}>Age</Trans>:{' '}
						{player.age ? player.age : 'No results'}
					</p>
					<p>
						<Trans t={t}>Weight</Trans>:{' '}
						{player.weight ? (
							<>
								{player.weight} <Trans t={t}>kg</Trans>
							</>
						) : (
							'No results'
						)}
					</p>
					<p>
						<Trans t={t}>Height</Trans>:{' '}
						{player.height ? (
							<>
								{player.height} <Trans t={t}>cm</Trans>
							</>
						) : (
							'No results'
						)}
					</p>
					<span>
						<span
							className={
								player.country.country_code === 'en'
									? `fi fi-gb-eng`
									: player.country.country_code === 'n'
									? `fi fi-gb-nir`
									: player.country.country_code === 'w'
									? `fi fi-gb-wls`
									: player.country.country_code === 's'
									? `fi fi-gb-sct`
									: `fi fi-${player.country.country_code}`
							}
						></span>
						<Trans t={t}>{player.country.name}</Trans>
					</span>
				</div>
			)}
		</div>
	)
}

export default PlayerById
