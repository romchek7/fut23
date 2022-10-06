import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"

interface ILinkNavigation {
    toPath: string
    text: string
}

const LinkNavigation = (props: ILinkNavigation) => {
    return (
        <Link to={props.toPath}>
            <div className={styles.navLinkText}>
                {props.text}
            </div>
        </Link>
    )
}

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <LinkNavigation toPath={'/'} text='Home'/>
            <LinkNavigation toPath={'/leagues'} text='Leagues'/>
            <LinkNavigation toPath={'/teams'} text='Teams'/>
            <LinkNavigation toPath={'/players'} text='Players'/>
            <LinkNavigation toPath={'/bookmakers'} text='Bookmakers'/>
            <LinkNavigation toPath={'/markets'} text='Markets'/>
            <LinkNavigation toPath={'/venues'} text='Venues'/>
            <LinkNavigation toPath={'/referees'} text='Referees'/>
        </nav>
    )
}

export default Navigation