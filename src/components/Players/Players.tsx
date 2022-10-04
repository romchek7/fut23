import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPlayersSelector} from "../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../hooks/useDispatchPlayers";
import {IPlayer} from "../../redux/types/playersType";
import Player from "./Player/Player";
import styles from "./Players.module.css";
import PaginationFC from "../assets/Pagination/Pagination";
import Countries from "./Countries/Countries";
import AgeFilters from "./AgeFilters/AgeFilters";

const Players: React.FC = () => {
    const {fetchPlayers} = useDispatchPlayers()

    const {players, loading, error} = useSelector(fetchPlayersSelector)

    const [currentPage, setCurrentPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [pageSize, setPageSize] = useState(12)
    const [county_id, setCountryID] = useState(0)
    const [continentIsReadyToFetch, setContinent] = useState('')
    const [minAge, setMinAge] = useState(0)
    const [maxAge, setMaxAge] = useState(0)

    useEffect(() => {
        if (county_id != 0) {
            if (minAge > 0 && maxAge > 0) {
                fetchPlayers(county_id, maxAge, minAge)
            }
            else {
                fetchPlayers(county_id)
            }
        }
    }, [county_id, minAge, maxAge])

    useEffect(() => {
        if (players.length > 0) {
            setMaxIndex(pageSize)
        }
    }, [players, pageSize])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Some error: {error}</div>
    }

    return (
        <div className={styles.playersMain}>
            <div className={styles.filtersMain}>
                <Countries county_id={county_id} setCountryID={setCountryID}
                           continentIsReadyToFetch={continentIsReadyToFetch} setContinent={setContinent}/>
                <AgeFilters setMinAge={setMinAge} setMaxAge={setMaxAge} minAge={minAge} maxAge={maxAge}/>
            </div>
            {county_id != 0
                ? <div className={styles.playersListMain}>
                    <div className={styles.playersWrapper}>
                        {players.map((player, idx) => idx >= minIndex
                            && idx < maxIndex
                            && <Player key={player.player_id} player={player}/>)}
                    </div>
                    <PaginationFC setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                                  totalCount={players.length} setCurrentPage={setCurrentPage}
                                  setMinIndex={setMinIndex} setMaxIndex={setMaxIndex}/>
                </div>
                : <div>Select country</div>}
        </div>
    )
}

export default Players