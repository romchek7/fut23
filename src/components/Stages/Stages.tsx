import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getStagesSelector} from "../../redux/selectors/stagesSelector";
import useDispatchStages from "../../hooks/useDispatchStages";
import styles from "./Stages.module.css";

interface StagesProps {
    season_id: number
}

const Stages: React.FC<StagesProps> = ({season_id}) => {
    const {stages, loadingStages, errorStages} = useSelector(getStagesSelector)

    const {fetchStages} = useDispatchStages()

    useEffect(() => {
        fetchStages(season_id)
    }, [])

    if (loadingStages) {
        return <div>Loading...</div>
    }

    if (errorStages) {
        return <div>{errorStages}</div>
    }

    return (
        <div className={styles.main}>
            {stages.length > 0
                ? stages.map((stage, idx) =>
                    <div key={idx}>
                        {stage.name}
                    </div>
                )
                : <p>No results</p>}
        </div>
    )
}

export default Stages