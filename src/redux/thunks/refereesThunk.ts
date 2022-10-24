import {Dispatch} from "redux";
import {getRefereesActionTypes, RefereesActionTypes} from "../types/refereesType";
import {getRefereesAPI} from "../../api/api";

export const fetchReferees = (country_id: number) => {
    return async (dispatch: Dispatch<RefereesActionTypes>) => {
        try {
            dispatch({
                type: getRefereesActionTypes.FETCH_REFEREES
            })

            const response = await getRefereesAPI(country_id)

            if (response) {
                dispatch({
                    type: getRefereesActionTypes.FETCH_REFEREES_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: getRefereesActionTypes.FETCH_REFEREES_ERROR,
                payload: `${e}`
            })
        }
    }
}