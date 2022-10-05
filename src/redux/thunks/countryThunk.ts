import {Dispatch} from "redux";
import {getLeagueActionType, LeagueActionTypes} from "../types/leaguesType";
import {getCountry, getLeague} from "../../api/api";
import {CountryActionTypes, fetchCountryActionTypes} from "../types/countriesType";

export const fetchCountry = (country_id: number) => {
    return async (dispatch: Dispatch<CountryActionTypes>) => {
        try {
            dispatch({
                type: fetchCountryActionTypes.FETCH_COUNTRY
            })

            let response = null

            if (country_id) {
                response = await getCountry(country_id)
            }

            if (response) {
                dispatch({
                    type: fetchCountryActionTypes.FETCH_COUNTRY_SUCCESS,
                    payload: response.data.data
                })
            }
        }
        catch (e) {
            dispatch({
                type: fetchCountryActionTypes.FETCH_COUNTRY_ERROR,
                payload: `${e}`
            })
        }
    }
}