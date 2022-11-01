import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStagesSelector } from '../../redux/selectors/stagesSelector'
import useDispatchStages from '../../hooks/useDispatchStages'
import styles from './Stages.module.css'
import { Trans, useTranslation } from 'react-i18next'

interface StagesProps {
	season_id: number
}

const Stages: React.FC<StagesProps> = ({ season_id }) => {
	const { t } = useTranslation()

	const { stages, loadingStages, errorStages } =
		useSelector(getStagesSelector)

	const { fetchStages } = useDispatchStages()

	useEffect(() => {
		fetchStages(season_id)
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	if (loadingStages) {
		return <div>Loading...</div>
	}

	if (errorStages) {
		return <div>{errorStages}</div>
	}

	return (
		<div className={styles.main}>
			{stages.length > 0 ? (
				stages.map((stage, idx) => (
					<div key={idx}>
						<Trans t={t}>{stage.name}</Trans>
					</div>
				))
			) : (
				<p>No results</p>
			)}
		</div>
	)
}

export default Stages
