import {getMarketsActionType, IMarketState} from "../types/marketsType";
import {IAction} from "../types/types";

const initialState: IMarketState = {
    markets: [],
    loading: false,
    error: null
}

const marketsReducer = (state = initialState, action: IAction): IMarketState => {
    switch (action.type) {
        case getMarketsActionType.FETCH_MARKETS:
            return {
                ...state,
                markets: [],
                loading: true,
                error: null
            }
        case getMarketsActionType.FETCH_MARKETS_SUCCESS:
            return {
                ...state,
                markets: action.payload,
                loading: false,
                error: null
            }
        case getMarketsActionType.FETCH_MARKETS_ERROR:
            return {
                ...state,
                markets: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default marketsReducer