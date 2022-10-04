import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPlayersSelector} from "../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../hooks/useDispatchPlayers";
import {IPlayer} from "../../redux/types/playersType";
import Player from "./Player/Player";
import styles from "./Players.module.css";
import PaginationFC from "../assets/Pagination/Pagination";

const Players: React.FC = () => {
    const {fetchPlayers} = useDispatchPlayers()

    const {players, loading, error} = useSelector(fetchPlayersSelector)

    const [playersState, setPlayersState] = useState<IPlayer[]>([])
    const [previous, setPrevious] = useState(0)
    const [next, setNext] = useState(12)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [pageSize, setPageSize] = useState(12)

    useEffect(() => {
        fetchPlayers(48)
    }, [])

    useEffect(() => {
        if (players.length > 0) {
            setTotalPage(players.length / pageSize)
            setMaxIndex(pageSize)
        }
    }, [players, pageSize])

    const handleChange = (page: number) => {
        setCurrentPage(page)
        setMinIndex((page - 1) * pageSize)
        setMaxIndex(page * pageSize)
        window.scrollTo({behavior: 'smooth', top: 0})
    };

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Some error: {error}</div>
    }

    return (
        <div className={styles.playersMain}>
            <div className={styles.filtersMain}>

            </div>
            <div className={styles.playersListMain}>
                <div className={styles.playersWrapper}>
                    {players.map((player, idx) => idx >= minIndex
                        && idx < maxIndex
                        && <Player player={player}/>)}
                </div>
                <PaginationFC setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                              totalCount={players.length} setCurrentPage={setCurrentPage}
                              setMinIndex={setMinIndex} setMaxIndex={setMaxIndex}/>
            </div>
        </div>
    )
}

export default Players