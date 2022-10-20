import {Dispatch} from "redux";
import {getStandingsActionTypes, StandingsActionTypes} from "../types/Standings";
import {getStandings} from "../../api/api";

export const fetchStandings = (season_id: number) => {
    return async (dispatch: Dispatch<StandingsActionTypes>) => {
        try {
            dispatch({
                type: getStandingsActionTypes.FETCH_STANDINGS
            })

            const response = await getStandings(season_id)

            if (response.data) {
                dispatch({
                    type: getStandingsActionTypes.FETCH_STANDINGS_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getStandingsActionTypes.FETCH_STANDINGS_ERROR,
                payload: `${e}`
            })
        }
    }
}