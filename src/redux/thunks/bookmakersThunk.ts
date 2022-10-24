import {Dispatch} from "redux";
import {BookmakersActionType, getBookmakersActionType} from "../types/bookmakersType";
import {getBookmakersAPI} from "../../api/api";

export const fetchBookmakers = () => {
    return async (dispatch: Dispatch<BookmakersActionType>) => {
        try {
            dispatch({
                type: getBookmakersActionType.FETCH_BOOKMAKERS
            })

            const response = await getBookmakersAPI()

            if (response) {
                dispatch({
                    type: getBookmakersActionType.FETCH_BOOKMAKERS_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getBookmakersActionType.FETCH_BOOKMAKERS_ERROR,
                payload: `${e}`
            })
        }
    }
}