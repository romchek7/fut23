import {Dispatch} from "redux";
import {getSeasonsActionType, SeasonsActionTypes} from "../types/seasonsType";
import {getSeasons} from "../../api/api";

export const fetchSeasons = (league_id: number) => {
    return async (dispatch: Dispatch<SeasonsActionTypes>) => {
        try {
            dispatch({
                type: getSeasonsActionType.FETCH_SEASONS
            })

            const response = await getSeasons(league_id)

            if (response) {
                dispatch({
                    type: getSeasonsActionType.FETCH_SEASONS_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getSeasonsActionType.FETCH_SEASONS_ERROR,
                payload: `${e}`
            })
        }
    }
}