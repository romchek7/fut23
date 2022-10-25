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
        window.scrollTo({behavior: 'smooth', top: 0})
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
                    <thead>
                    <tr>
                        <th scope="col">SEASON</th>
                        <th scope="col">LEAGUE</th>
                        <th scope="col">COUNTRY</th>
                        <th scope="col">IS CURRENT</th>
                        <th scope="col">START DATE</th>
                        <th scope="col">END  DATE</th>
                        <th className={styles.showInfo} scope="col">INFORMATION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {seasons.map(season =>
                        <tr key={season.season_id}>
                            <td data-label='Season'>{season.name}</td>
                            <td data-label='League'>{league?.name}</td>
                            <td data-label='Country'>{country?.name}</td>
                            <td data-label='Is current'>{season.is_current === 1 ? "Current" : "Finished"}</td>
                            <td data-label='Start date'>{season.start_date}</td>
                            <td data-label='End date'>{season.end_date}</td>
                            <td data-label='Information' className={styles.showInfo}>
                                <Link className='SearchBtn' to={`/season/${season.season_id}`}>Show info</Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Seasons