import React, {useEffect} from "react";
import styles from "./Season.module.css";
import {Link, useParams} from "react-router-dom";
import useDispatchSeasons from "../../../hooks/useDispatchSeasons";
import {useSelector} from "react-redux";
import {getSeasonByIdSelector} from "../../../redux/selectors/seasonsSelector";
import useDispatchLeague from "../../../hooks/useDispatchLeague";
import {getLeague} from "../../../redux/selectors/leaguesSelector";
import Stages from "../../Stages/Stages";
import Matches from "../../Matches/Matches";
import Standings from "../../Standings/Standings";

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
                        ? <div className={styles.infoBlock1}>
                            <h1>Stages: </h1>
                            <Stages season_id={season?.season_id}/>
                            <div className={styles.topScorers}>
                                <h1>
                                    <Link to={`/topScorers/${season.season_id}`}>
                                        Top scorers of season {season.name}
                                    </Link>
                                </h1>
                            </div>
                        </div>
                        : <span></span>}
                    {season?.season_id
                        ? <div>
                            <h1 className={styles.infoBlock1}>Standings: </h1>
                            <Standings season_id={season.season_id} country_id={season.country_id}/>
                        </div>
                        : <span></span>}
                    {season?.season_id
                        ? <div>
                            <h1 className={styles.infoBlock1}>Matches: </h1>
                            <Matches season_id={season?.season_id} live={season?.is_current === 1}
                                     date_from={season.start_date} date_to={season.end_date}/>
                        </div>
                        : <span></span>}
                </div>
            </div>
        </div>
    )
}

export default Season