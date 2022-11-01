import React, { useEffect } from 'react'
import styles from './Markets.module.css'
import { useSelector } from 'react-redux'
import { getMarketsSelector } from '../../redux/selectors/marketsSelector'
import useDispatchMarkets from '../../hooks/useDispatchMarkets'
import Preloader from '../assets/Preloader/Preloader'

const Markets: React.FC = () => {
	const { markets, loading, error } = useSelector(getMarketsSelector)

	const { fetchMarkets } = useDispatchMarkets()

	useEffect(() => {
		fetchMarkets()
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
			{markets.length > 0 && (
				<div className={styles.content}>
					<div className={styles.marketsWrapper}>
						{markets.map((market, idx) => (
							<div className={styles.marketBox} key={idx}>
								<div className={styles.name}>{market.name}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Markets
