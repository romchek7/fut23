import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPlayersSelector} from "../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../hooks/useDispatchPlayers";
import {IPlayer} from "../../redux/types/playersType";
import Player from "./Player/Player";
import styles from "./Players.module.css";
import {Pagination} from 'antd';

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
                <div className={styles.paginationWrapper}>
                    <select id="items" onChange={
                        (e) => {
                            setPageSize(+e.target.value)
                        }
                    }>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                    </select>
                    <Pagination pageSize={pageSize} showSizeChanger={false} current={currentPage} onChange={handleChange}
                                total={players.length}/>
                </div>
            </div>
        </div>
    )
}

export default Players