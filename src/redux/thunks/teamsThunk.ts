import {Dispatch} from "redux";
import {getTeamActionTypes, getTeamsActionTypes, TeamActionTypes, TeamBuIdActionTypes} from "../types/teamsType";
import {getTeamsAPI} from "../../api/api";

export const fetchTeams = (country_id: number) => {
    return async (dispatch: Dispatch<TeamActionTypes>) => {
        try {
            dispatch({
                type: getTeamsActionTypes.FETCH_TEAMS
            })

            const response = await getTeamsAPI(country_id)

            if (response.data) {
                dispatch({
                    type: getTeamsActionTypes.FETCH_TEAMS_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getTeamsActionTypes.FETCH_TEAMS_ERROR,
                payload: `${e}`
            })
        }
    }
}

export const getTeamById = (team_id: number) => {
    return async (dispatch: Dispatch<TeamBuIdActionTypes>) => {
        try {
            dispatch({
                type: getTeamActionTypes.FETCH_TEAM
            })

            const response = await getTeamsAPI(team_id)

            if (response.data) {
                dispatch({
                    type: getTeamActionTypes.FETCH_TEAM_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getTeamActionTypes.FETCH_TEAM_ERROR,
                payload: `${e}`
            })
        }
    }
}