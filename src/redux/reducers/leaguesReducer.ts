import {getLeaguesActionType, ILeaguesState} from "../types/leaguesType";
import {IAction} from "../types/types";

const initialState: ILeaguesState = {
    leagues: [],
    loadingLeague: false,
    errorLeague: null
}

const leaguesReducer = (state = initialState, action: IAction): ILeaguesState => {
    switch (action.type) {
        case getLeaguesActionType.FETCH_LEAGUES:
            return {
                ...state,
                leagues: [],
                loadingLeague: true,
                errorLeague: null
            }
        case getLeaguesActionType.FETCH_LEAGUES_SUCCESS:
            return {
                ...state,
                leagues: action.payload,
                loadingLeague: false,
                errorLeague: null
            }
        case getLeaguesActionType.FETCH_LEAGUES_ERROR:
            return {
                ...state,
                leagues: [],
                loadingLeague: false,
                errorLeague: action.payload
            }
        default:
            return state
    }
}

export default leaguesReducer