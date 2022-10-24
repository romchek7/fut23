import {getTopScorersActionTypes, ITopScorersState} from "../types/topScorersType";
import {IAction} from "../types/types";

const initialState: ITopScorersState = {
    topScorers: [],
    loading: false,
    error: null
}

const topScorersReducer = (state = initialState, action: IAction): ITopScorersState => {
    switch (action.type) {
        case getTopScorersActionTypes.FETCH_TOPSCORERS:
            return {
                ...state,
                topScorers: [],
                loading: true,
                error: null
            }
        case getTopScorersActionTypes.FETCH_TOPSCORERS_SUCCESS:
            return {
                ...state,
                topScorers: action.payload,
                loading: false,
                error: null
            }
        case getTopScorersActionTypes.FETCH_TOPSCORERS_ERROR:
            return {
                ...state,
                topScorers: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default topScorersReducer