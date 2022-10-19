import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMatchesSelector} from "../../../redux/selectors/matchesSelector";
import useDispatchMatches from "../../../hooks/useDispatchMatches";
import styles from "./LiveMatches.module.css";

const LiveMatches: React.FC = () => {
    const {matches, loadingMatches, errorMatches} = useSelector(getMatchesSelector)

    const {fetchMatches} = useDispatchMatches()

    useEffect(() => {
        fetchMatches(0, true, 0, '', '')
    }, [])

    if (loadingMatches) {
        return <div>Loading...</div>
    }

    if (errorMatches) {
        return <div>{errorMatches}</div>
    }

    return (
        <div className={styles.main}>
            {matches.length > 0
                ? matches.map(match =>
                    <div>
                        {match.home_team.name}
                    </div>
                )
                : <div>No live matches now...</div>
            }
        </div>
    )
}

export default LiveMatches