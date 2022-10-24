import {Dispatch} from "redux";
import {getMarketsActionType, MarketsActionType} from "../types/marketsType";
import {getMarketsAPI} from "../../api/api";

export const fetchMarkets = () => {
    return async (dispatch: Dispatch<MarketsActionType>) => {
        try {
            dispatch({
                type: getMarketsActionType.FETCH_MARKETS
            })

            const response = await getMarketsAPI()

            if (response) {
                dispatch({
                    type: getMarketsActionType.FETCH_MARKETS_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getMarketsActionType.FETCH_MARKETS_ERROR,
                payload: `${e}`
            })
        }
    }
}