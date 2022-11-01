import React, { useEffect } from 'react'
import styles from './Bookmakers.module.css'
import { useSelector } from 'react-redux'
import { getBookmakersSelector } from '../../redux/selectors/bookmakersSelector'
import useDispatchBookmakers from '../../hooks/useDispatchBookmakers'
import Preloader from '../assets/Preloader/Preloader'

const Bookmakers: React.FC = () => {
	const { bookmakers, loading, error } = useSelector(getBookmakersSelector)

	const { fetchBookmakers } = useDispatchBookmakers()

	useEffect(() => {
		fetchBookmakers()
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
			{bookmakers.length > 0 && (
				<div className={styles.content}>
					<div className={styles.bookmakersWrapper}>
						{bookmakers.map((bookmaker, idx) => (
							<div className={styles.bookmakerBox} key={idx}>
								<div className={styles.photo}>
									<img src={bookmaker.img} />
								</div>
								<div className={styles.name}>
									<p>{bookmaker.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Bookmakers
