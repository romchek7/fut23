import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import useDispatchSeasons from "../../hooks/useDispatchSeasons";
import {useSelector} from "react-redux";
import {getSeasons} from "../../redux/selectors/seasonsSelector";
import styles from "./Seasons.module.css";
import useDispatchLeague from "../../hooks/useDispatchLeague";
import {getLeague} from "../../redux/selectors/leaguesSelector";
import useDispatchCountry from "../../hooks/useDispatchCountry";
import {fetchCountrySelector} from "../../redux/selectors/countriesSelector";

const Seasons: React.FC = () => {
    const params = useParams()

    const {fetchSeasons} = useDispatchSeasons()
    const {fetchLeague} = useDispatchLeague()
    const {fetchCountry} = useDispatchCountry()

    const {seasons, loadingSeasons, errorSeasons} = useSelector(getSeasons)
    const {league, loadingLeague, errorLeague} = useSelector(getLeague)
    const {country, loadingCountry, errorCountry} = useSelector(fetchCountrySelector)

    useEffect(() => {
        if (params.league_id) {
            fetchSeasons(+params.league_id)
            fetchLeague(+params.league_id)
        }
    }, [])

    useEffect(() => {
        if (seasons.length > 0) {
            fetchCountry(seasons[0].country_id)
        }
    }, [seasons])

    if (loadingSeasons && loadingLeague && loadingCountry) {
        return <div>Loading...</div>
    }

    if (errorSeasons && errorLeague && errorCountry) {
        return <div>{errorSeasons}</div>
    }

    return (
        <div className={styles.main}>
            <h1>{league?.name}</h1>
            <div className={styles.seasons}>
                <table>
                    <tr>
                        <th>Season</th>
                        <th>League</th>
                        <th>Country</th>
                        <th>Is current</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th className={styles.showInfo}>Information</th>
                    </tr>
                {seasons.map(season =>
                    <tr key={season.season_id}>
                        <td>{season.name}</td>
                        <td>{league?.name}</td>
                        <td>{country?.name}</td>
                        <td>{season.is_current === 1 ? "Current" : "Finished"}</td>
                        <td>{season.start_date}</td>
                        <td>{season.end_date}</td>
                        <td className={styles.showInfo}>
                            <Link className='SearchBtn' to={`/season/${season.season_id}`}>Show season information</Link>
                        </td>
                    </tr>
                )}
                </table>
            </div>
        </div>
    )
}

export default Seasons