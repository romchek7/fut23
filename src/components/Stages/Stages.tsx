import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getStagesSelector} from "../../redux/selectors/stagesSelector";
import useDispatchStages from "../../hooks/useDispatchStages";

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
        <div>
            {stages.length > 0
                ? stages.map(stage =>
                    <p key={stage.id}>{stage.name}</p>
                )
                : <p>No results</p>}
        </div>
    )
}

export default Stages