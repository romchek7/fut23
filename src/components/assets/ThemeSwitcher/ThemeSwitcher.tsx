import React from "react";
import styles from "./ThemeSwitcher.module.css";
import toggleTheme from "./toggleTheme";
import {getThemesModes} from "../../../redux/types/themeModeTypes";
import {BsSunFill, BsMoonStarsFill} from "react-icons/bs"

const ThemeSwitcher: React.FC = () => {
    return (
        <div className={styles.toggleThemeWrapper}>
            <BsSunFill className={styles.themeIcon}/>
            <label className={styles.toggleTheme} htmlFor='checkbox'>
                <input
                    type='checkbox'
                    id='checkbox'
                    defaultChecked={localStorage.getItem('theme') === getThemesModes.DARK_THEME}
                    onChange={toggleTheme}
                />
                <div className={styles.slider + ' ' + styles.round}></div>
            </label>
            <BsMoonStarsFill className={styles.themeIcon}/>
        </div>
    )
}

export default ThemeSwitcher