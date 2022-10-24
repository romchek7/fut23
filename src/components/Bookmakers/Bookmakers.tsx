import React, {useEffect} from "react";
import styles from "./Bookmakers.module.css";
import {useSelector} from "react-redux";
import {getBookmakersSelector} from "../../redux/selectors/bookmakersSelector";
import useDispatchBookmakers from "../../hooks/useDispatchBookmakers";

const Bookmakers: React.FC = () => {
    const {bookmakers, loading, error} = useSelector(getBookmakersSelector)

    const {fetchBookmakers} = useDispatchBookmakers()

    useEffect(() => {
        fetchBookmakers()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={styles.main}>
            {bookmakers.length > 0 &&
                <div className={styles.content}>
                    <div className={styles.bookmakersWrapper}>
                        {bookmakers.map(bookmaker =>
                            <div className={styles.bookmakerBox}>
                                <div className={styles.photo}>
                                    <img src={bookmaker.img}/>
                                </div>
                                <div className={styles.name}>
                                    <p>{bookmaker.name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default Bookmakers