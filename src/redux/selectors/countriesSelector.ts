import {AppStateType} from "../reducers/rootReducer";

export const fetchCountriesSelector = (state: AppStateType) => {
    return state.countriesReducer
}

export const fetchCountrySelector = (state: AppStateType) => {
    return state.countryReducer
}