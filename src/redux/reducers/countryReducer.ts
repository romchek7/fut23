import { fetchCountryActionTypes, ICountryState } from '../types/countriesType'
import { IAction } from '../types/types'

const initialState: ICountryState = {
	country: null,
	loadingCountry: false,
	errorCountry: null,
}

const countryReducer = (
	state = initialState,
	action: IAction
): ICountryState => {
	switch (action.type) {
		case fetchCountryActionTypes.FETCH_COUNTRY:
			return {
				...state,
				country: null,
				loadingCountry: true,
				errorCountry: null,
			}
		case fetchCountryActionTypes.FETCH_COUNTRY_SUCCESS:
			return {
				...state,
				country: action.payload,
				loadingCountry: false,
				errorCountry: null,
			}
		case fetchCountryActionTypes.FETCH_COUNTRY_ERROR:
			return {
				...state,
				country: null,
				loadingCountry: false,
				errorCountry: action.payload,
			}
		default:
			return {
				...state,
			}
	}
}

export default countryReducer
