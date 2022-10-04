import {Dispatch} from "redux";
import {CountriesActionTypes, fetchCountriesActionTypes, ICountry} from "../types/countriesType";
import {getCountries} from "../../api/api";

export const fetchCountries = (continent?: string) => {
    return async (dispatch: Dispatch<CountriesActionTypes>) => {
        try {
            dispatch({
                type: fetchCountriesActionTypes.FETCH_COUNTRIES
            })

            const response = await getCountries(continent)

            const countries = Object.values(response.data.data) as ICountry[]

            if (response) {
                dispatch({
                    type: fetchCountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
                    payload: countries
                })
            }
        }
        catch (e) {
            dispatch({
                type: fetchCountriesActionTypes.FETCH_COUNTRIES_ERROR,
                payload: `${e}`
            })
        }
    }
}