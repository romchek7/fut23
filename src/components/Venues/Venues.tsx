import React, { useEffect, useState } from 'react'
import styles from './Venues.module.css'
import Countries from '../Countries/Countries'
import { useSelector } from 'react-redux'
import PaginationFC from '../assets/Pagination/Pagination'
import useDispatchVenues from '../../hooks/useDispatchVenues'
import { getVenuesSelector } from '../../redux/selectors/venuesSelector'
import SelectCountry from '../assets/SelectCountry/SelectCountry'
import Preloader from '../assets/Preloader/Preloader'

const Venues: React.FC = () => {
	const { venues, loading, error } = useSelector(getVenuesSelector)

	const { fetchVenues } = useDispatchVenues()

	const [currentPage, setCurrentPage] = useState(1)
	const [minIndex, setMinIndex] = useState(0)
	const [maxIndex, setMaxIndex] = useState(12)
	const [pageSize] = useState(12)
	const [county_id, setCountryID] = useState(0)
	const [continentIsReadyToFetch, setContinent] = useState('')

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [])

	useEffect(() => {
		if (county_id != 0) {
			fetchVenues(county_id)
		}
	}, [county_id])

	useEffect(() => {
		if (venues.length > 0) {
			setMaxIndex(pageSize)
		}
	}, [venues, pageSize])

	useEffect(() => {
		setCurrentPage(1)
		setMinIndex(0)
		setMaxIndex(12)
	}, [venues])

	if (loading) {
		return <Preloader />
	}

	if (error) {
		return <div className={styles.main}>Some error: {error}</div>
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
			{county_id != 0 ? (
				<div className={styles.listMain}>
					<div className={styles.wrapper}>
						{venues.map(
							(venue, idx) =>
								idx >= minIndex &&
								idx < maxIndex && (
									<div className={styles.box} key={idx}>
										<div>Name: {venue.name}</div>
										<div>City: {venue.city}</div>
									</div>
								)
						)}
					</div>
					<PaginationFC
						pageSize={pageSize}
						currentPage={currentPage}
						totalCount={venues.length}
						setCurrentPage={setCurrentPage}
						setMinIndex={setMinIndex}
						setMaxIndex={setMaxIndex}
					/>
				</div>
			) : (
				<SelectCountry />
			)}
		</div>
	)
}

export default Venues
