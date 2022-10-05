import {Dispatch} from "redux";
import {getLeaguesActionType, ILeague, LeaguesActionTypes} from "../types/leaguesType";
import {getLeagues} from "../../api/api";

export const fetchLeagues = (country_id?: number) => {
    return async (dispatch: Dispatch<LeaguesActionTypes>) => {
        try {
            dispatch({
                type: getLeaguesActionType.FETCH_LEAGUES
            })

            let response = null

            if (country_id) {
                response = await getLeagues(country_id)
            }
            else {
                response = await getLeagues()
            }

            if (response) {
                const leagues = Object.values(response.data.data) as ILeague[]

                dispatch({
                    type: getLeaguesActionType.FETCH_LEAGUES_SUCCESS,
                    payload: leagues
                })
            }
        }
        catch (e) {
            dispatch({
                type: getLeaguesActionType.FETCH_LEAGUES_ERROR,
                payload: `${e}`
            })
        }
    }
}