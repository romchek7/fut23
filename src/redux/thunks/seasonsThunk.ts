import {Dispatch} from "redux";
import {
    getSeasonByIdActionType,
    getSeasonsActionType,
    SeasonByIdActionTypes,
    SeasonsActionTypes
} from "../types/seasonsType";
import {getSeasonByIdAPI, getSeasonsAPI} from "../../api/api";

export const fetchSeasons = (league_id: number) => {
    return async (dispatch: Dispatch<SeasonsActionTypes>) => {
        try {
            dispatch({
                type: getSeasonsActionType.FETCH_SEASONS
            })

            const response = await getSeasonsAPI(league_id)

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

export const getSeasonByIdThunk = (season_id: number) => {
    return async (dispatch: Dispatch<SeasonByIdActionTypes>) => {
        try {
            dispatch({
                type: getSeasonByIdActionType.FETCH_SEASON_BY_ID
            })

            const response = await getSeasonByIdAPI(season_id)

            if (response) {
                dispatch({
                    type: getSeasonByIdActionType.FETCH_SEASON_BY_ID_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getSeasonByIdActionType.FETCH_SEASON_BY_ID_ERROR,
                payload: `${e}`
            })
        }
    }
}