import React, {useEffect, useState} from "react";
import styles from "./Venues.module.css";
import Countries from "../Countries/Countries";
import {useSelector} from "react-redux";
import {getRefereesSelector} from "../../redux/selectors/refereesSelector";
import useDispatchReferees from "../../hooks/useDispatchReferees";
import PaginationFC from "../assets/Pagination/Pagination";
import icon from "../../assets/img/account.png";
import useDispatchVenues from "../../hooks/useDispatchVenues";
import {getVenuesSelector} from "../../redux/selectors/venuesSelector";

const Venues: React.FC = () => {
    const {venues, loading, error} = useSelector(getVenuesSelector)

    const {fetchVenues} = useDispatchVenues()

    const [currentPage, setCurrentPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [pageSize, setPageSize] = useState(12)
    const [county_id, setCountryID] = useState(0)
    const [continentIsReadyToFetch, setContinent] = useState('')

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
        setMaxIndex(0)
    }, [venues])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Some error: {error}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.filtersMain}>
                <Countries county_id={county_id} setCountryID={setCountryID}
                           continentIsReadyToFetch={continentIsReadyToFetch} setContinent={setContinent}/>
            </div>
            {county_id != 0
                ? <div className={styles.listMain}>
                    <div className={styles.wrapper}>
                        {venues.map((venue, idx) => idx >= minIndex
                            && idx < maxIndex
                            &&
                            <div className={styles.box}>
                                <div>
                                    Name: {venue.name}
                                </div>
                                <div>
                                    City: {venue.city}
                                </div>
                            </div>
                        )}
                    </div>
                    <PaginationFC setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                                  totalCount={venues.length} setCurrentPage={setCurrentPage}
                                  setMinIndex={setMinIndex} setMaxIndex={setMaxIndex}/>
                </div>
                : <div className={styles.SelectCountry}>
                    <p>
                        Select country
                    </p>
                </div>}
        </div>
    )
}

export default Venues