import {Dispatch} from "redux";
import {getStagesActionTypes, StagesActionTypes} from "../types/stagesTypes";
import {getStagesAPI} from "../../api/api";

export const fetchStages = (season_id: number) => {
    return async (dispatch: Dispatch<StagesActionTypes>) => {
        try {
            dispatch({
                type: getStagesActionTypes.FETCH_STAGES
            })

            const response = await getStagesAPI(season_id)

            console.log(response)

            if (response.data) {
                dispatch({
                    type: getStagesActionTypes.FETCH_STAGES_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getStagesActionTypes.FETCH_STAGES_ERROR,
                payload: `${e}`
            })
        }
    }
}