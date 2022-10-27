import React, {useEffect} from "react";
import styles from "./NewsColumn.module.css";
import {useSelector} from "react-redux";
import {getLeagues} from "../../../redux/selectors/leaguesSelector";
import useDispatchLeagues from "../../../hooks/useDispatchLeagues";
import {Link} from "react-router-dom";
import {useTranslation, Trans} from "react-i18next";

const NewsColumn: React.FC = () => {
    const {t} = useTranslation()

    const {leagues, loadingLeagues, errorLeagues} = useSelector(getLeagues)

    const {fetchLeagues} = useDispatchLeagues()

    useEffect(() => {
        fetchLeagues()
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.NewsBlock1}>
                <p>
                    <Trans t={t}>leagueSubscribeInformation</Trans>
                </p>
            </div>
            <div className={styles.NewsBlock2}>
                <h1>
                    <Trans t={t}>myLeagues</Trans>:
                </h1>
                {leagues.length > 0 &&
                    <div className={styles.leagues}>
                        {leagues.map(league =>
                            <Link key={league.league_id} to={`/seasons/${league.league_id}`}>
                                <div className={styles.link}>
                                    {league.name}
                                </div>
                            </Link>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default NewsColumn