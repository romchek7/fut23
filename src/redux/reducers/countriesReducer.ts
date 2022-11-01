import {
	fetchCountriesActionTypes,
	ICountriesState,
} from '../types/countriesType'
import { IAction } from '../types/types'

const initialState: ICountriesState = {
	countries: [],
	loadingCountries: false,
	errorCountries: null,
}

const countriesReducer = (
	state = initialState,
	action: IAction
): ICountriesState => {
	switch (action.type) {
		case fetchCountriesActionTypes.FETCH_COUNTRIES:
			return {
				...state,
				countries: [],
				loadingCountries: true,
				errorCountries: null,
			}
		case fetchCountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
			return {
				...state,
				countries: action.payload,
				loadingCountries: false,
				errorCountries: null,
			}
		case fetchCountriesActionTypes.FETCH_COUNTRIES_ERROR:
			return {
				...state,
				countries: [],
				loadingCountries: false,
				errorCountries: action.payload,
			}
		default:
			return {
				...state,
			}
	}
}

export default countriesReducer
