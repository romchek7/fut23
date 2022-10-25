import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';

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
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className={styles.menuBtn} onClick={() => setShowMenu(prevState => !prevState)}>
                {showMenu ? <CloseOutlined /> : <MenuOutlined />}
            </div>
            <nav className={showMenu ? styles.navMobile : styles.nav}>
                <LinkNavigation toPath={'/'} text='Home'/>
                <LinkNavigation toPath={'/leagues'} text='Leagues'/>
                <LinkNavigation toPath={'/teams'} text='Teams'/>
                <LinkNavigation toPath={'/players'} text='Players'/>
                <LinkNavigation toPath={'/bookmakers'} text='Bookmakers'/>
                <LinkNavigation toPath={'/markets'} text='Markets'/>
                <LinkNavigation toPath={'/referees'} text='Referees'/>
                <LinkNavigation toPath={'/venues'} text='Venues'/>
            </nav>
        </>
    )
}

export default Navigation