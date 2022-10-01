import {IAction} from "../types/types";
import {createTracing} from "trace_events";
import {fetchPlayersActionTypes, IPlayersState} from "../types/playersType";


const initialState: IPlayersState = {
    players: [],
    loading: false,
    error: null
}

const playersReducer = (state = initialState, action: IAction): IPlayersState => {
    switch (action.type) {
        case fetchPlayersActionTypes.FETCH_PLAYERS:
            return {
                ...state,
                players: [],
                loading: true,
                error: null
            }
        case fetchPlayersActionTypes.FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.payload,
                loading: false,
                error: null
            }
        case fetchPlayersActionTypes.FETCH_PLAYERS_ERROR:
            return {
                ...state,
                players: [],
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}

export default playersReducer