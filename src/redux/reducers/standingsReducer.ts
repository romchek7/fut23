import {getStandingsActionTypes, IStanding, IStandingsState} from "../types/Standings";
import {IAction} from "../types/types";

const initialState: IStandingsState = {
    standingInfo: {
        season_id: 0,
        league_id: 0,
        has_groups: 0,
        standings: []
    },
    loading: false,
    error: null
}

const standingsReducer = (state = initialState, action: IAction): IStandingsState => {
    switch (action.type) {
        case getStandingsActionTypes.FETCH_STANDINGS:
            return {
                ...state,
                standingInfo: {
                    season_id: 0,
                    league_id: 0,
                    has_groups: 0,
                    standings: []
                },
                loading: true,
                error: null
            }
        case getStandingsActionTypes.FETCH_STANDINGS_SUCCESS:
            return {
                ...state,
                standingInfo: action.payload,
                loading: false,
                error: null
            }
        case getStandingsActionTypes.FETCH_STANDINGS_ERROR:
            return {
                ...state,
                standingInfo: {
                    season_id: 0,
                    league_id: 0,
                    has_groups: 0,
                    standings: []
                },
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default standingsReducer