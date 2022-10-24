import React from "react";
import styles from "./AppContent.module.css";
import teamPhoto from "../../assets/img/team.jpg";
import leaguesPhoto from "../../assets/img/leagues.jpg";
import playersPhoto from "../../assets/img/players.jpg";
import bookmakers from "../../assets/img/bookmakers.jpg";
import markets from "../../assets/img/markets.jpg";
import venues from "../../assets/img/venues.jpg";
import referees from "../../assets/img/referee.jpg";
import {Link} from "react-router-dom";
import NewsColumn from "./NewsColumn/NewsColumn";

interface LinkBoxProps {
    text: string
    imageSRC: string
    pathTo: string
}

const LinkBox: React.FC <LinkBoxProps> = ({text, imageSRC, pathTo}) => {
    return (
        <Link to={pathTo}>
            <div className={styles.linkBox}>
                <div>
                    <p>{text}</p>
                </div>
                <img src={imageSRC}/>
            </div>
        </Link>
    )
}

const AppContent = () => {
    return (
        <div className={styles.main}>
            <div className={styles.photoHeader}>
                <div className={styles.photoBlock}>
                    <div className={styles.photoBlockInfo}>
                        <div className={styles.photoBlockText}>
                            <h1>Pet Project: "FUT 23"</h1>
                            <p>API: <a href='https://sportdataapi.com' target='_blank'>sportdataapi.com</a></p>
                        </div>
                        <div className={styles.swimTextBlock}>
                            <NewsColumn/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentWrapper}>
                    <LinkBox text={'Leagues'} imageSRC={leaguesPhoto} pathTo={'/leagues'}/>
                    <LinkBox text={'Teams'} imageSRC={teamPhoto} pathTo={'/teams'}/>
                    <LinkBox text={'Players'} imageSRC={playersPhoto} pathTo={'/players'}/>
                    <LinkBox text={'Bookmakers'} imageSRC={bookmakers} pathTo={'/bookmakers'}/>
                    <LinkBox text={'Markets'} imageSRC={markets} pathTo={'/markets'}/>
                    <LinkBox text={'Venues'} imageSRC={venues} pathTo={'/venues'}/>
                    <LinkBox text={'Referees'} imageSRC={referees} pathTo={'/referees'}/>
                </div>
            </div>
        </div>
    )
}

export default AppContent