import {IAction} from "../types/types";
import {getTeamsActionTypes, ITeamsState} from "../types/teamsType";

const initialState: ITeamsState = {
    teams: [],
    loadingTeams: false,
    errorTeams: null
}

const teamsReducer = (state = initialState, action: IAction): ITeamsState => {
    switch (action.type) {
        case getTeamsActionTypes.FETCH_TEAMS:
            return {
                ...state,
                teams: [],
                loadingTeams: true,
                errorTeams: null
            }
        case getTeamsActionTypes.FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.payload,
                loadingTeams: false,
                errorTeams: null
            }
        case getTeamsActionTypes.FETCH_TEAMS_ERROR:
            return {
                ...state,
                teams: [],
                loadingTeams: false,
                errorTeams: action.payload
            }
        default:
            return state
    }
}

export default teamsReducer