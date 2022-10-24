import React, {useEffect, useState} from "react";
import styles from "./Referees.module.css";
import Countries from "../Countries/Countries";
import {useSelector} from "react-redux";
import {getRefereesSelector} from "../../redux/selectors/refereesSelector";
import useDispatchReferees from "../../hooks/useDispatchReferees";
import PaginationFC from "../assets/Pagination/Pagination";
import icon from "../../assets/img/account.png";

const Referees: React.FC = () => {
    const {referees, loading, error} = useSelector(getRefereesSelector)

    const {fetchReferees} = useDispatchReferees()

    const [currentPage, setCurrentPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [pageSize, setPageSize] = useState(12)
    const [county_id, setCountryID] = useState(0)
    const [continentIsReadyToFetch, setContinent] = useState('')

    useEffect(() => {
        if (county_id != 0) {
            fetchReferees(county_id)
        }
    }, [county_id])

    useEffect(() => {
        if (referees.length > 0) {
            setMaxIndex(pageSize)
        }
    }, [referees, pageSize])

    useEffect(() => {
        setCurrentPage(1)
        setMinIndex(0)
        setMaxIndex(0)
    }, [referees])

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
                        {referees.map((referee, idx) => idx >= minIndex
                            && idx < maxIndex
                            &&
                            <div className={styles.box}>
                                <div>
                                    <img src={referee.img ? referee.img : icon}/>
                                </div>
                                <div>
                                    {referee.name}
                                </div>
                                <div>
                                    {referee.birthdate}
                                </div>
                                <div>
                                    <span className={`fi fi-${referee.country.country_code}`}></span> {referee.country.name}
                                </div>
                            </div>
                        )}
                    </div>
                    <PaginationFC setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                                  totalCount={referees.length} setCurrentPage={setCurrentPage}
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

export default Referees