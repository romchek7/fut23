import { Dispatch } from 'redux'
import {
	CountriesActionTypes,
	fetchCountriesActionTypes,
	ICountry,
} from '../types/countriesType'
import { getCountriesAPI } from '../../api/api'

export const fetchCountries = (continent?: string) => {
	return async (dispatch: Dispatch<CountriesActionTypes>) => {
		try {
			dispatch({
				type: fetchCountriesActionTypes.FETCH_COUNTRIES,
			})

			const response = await getCountriesAPI(continent)

			if (response) {
				const countries = Object.values(
					response.data.data
				) as ICountry[]

				dispatch({
					type: fetchCountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
					payload: countries,
				})
			}
		} catch (e) {
			dispatch({
				type: fetchCountriesActionTypes.FETCH_COUNTRIES_ERROR,
				payload: `${e}`,
			})
		}
	}
}
