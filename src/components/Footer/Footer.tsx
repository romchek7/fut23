import React from "react";
import styles from "./Footer.module.css";
import {GithubOutlined} from '@ant-design/icons';

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.githubContent}>
                <a href='#'>
                    <GithubOutlined/>
                </a>
            </div>
        </div>
    )
}

export default Footer