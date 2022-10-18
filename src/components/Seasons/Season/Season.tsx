import React, {useEffect} from "react";
import styles from "./Season.module.css";
import {useParams} from "react-router-dom";
import useDispatchSeasons from "../../../hooks/useDispatchSeasons";
import {useSelector} from "react-redux";
import {getSeasonByIdSelector} from "../../../redux/selectors/seasonsSelector";
import useDispatchLeague from "../../../hooks/useDispatchLeague";
import {getLeague} from "../../../redux/selectors/leaguesSelector";
import Stages from "../../Stages/Stages";
import Matches from "../../Matches/Matches";

const Season: React.FC = () => {
    const params = useParams()

    const {getSeasonByIdThunk} = useDispatchSeasons()
    const {fetchLeague} = useDispatchLeague()

    const {season, loadingSeason, errorSeason} = useSelector(getSeasonByIdSelector)
    const {league, loadingLeague, errorLeague} = useSelector(getLeague)

    useEffect(() => {
        if (params.season_id) {
            getSeasonByIdThunk(+params.season_id)
            fetchLeague(+params.season_id)
        }
    }, [])

    useEffect(() => {
        if (season?.league_id) {
            fetchLeague(+season?.league_id)
        }
    }, [season])

    if (loadingSeason && loadingLeague) {
        return <div>Loading...</div>
    }

    if (errorSeason && errorLeague) {
        return <div>{errorSeason}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.seasonBlock}>
                <div className={styles.seasonInfo}>
                    <div className={styles.fixedSeasonInfo}>
                        <h1>{season?.name}</h1>
                        <h1>{league?.name}</h1>
                        <p>{season?.is_current === 1 ? "Current" : "Finished"}</p>
                        <p>Start date: {season?.start_date}</p>
                        <p>End date: {season?.end_date}</p>
                    </div>
                </div>
                <div className={styles.seasonsParams}>
                    {season?.season_id
                        ? <div>
                            <h1>Stages: </h1>
                            <Stages season_id={season?.season_id}/>
                        </div>
                        : <span></span>}
                    <hr className='horizontalLine'></hr>
                    <div>
                        {season?.season_id
                            ? <div>
                                <h1>Matches: </h1>
                                <Matches season_id={season?.season_id} live={season?.is_current === 1}
                                         date_from={season.start_date} date_to={season.end_date}/>
                            </div>
                            : <span></span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Season