export interface ICountry {
    country_id: number
    name: string
    country_code: null | string
    continent: string
}

export interface ICountriesState {
    countries: ICountry[]
    loadingCountries: boolean
    errorCountries: null | string
}

export enum fetchCountriesActionTypes {
    FETCH_COUNTRIES='FETCH_COUNTRIES',
    FETCH_COUNTRIES_SUCCESS='FETCH_COUNTRIES_SUCCESS',
    FETCH_COUNTRIES_ERROR='FETCH_COUNTRIES_ERROR'
}

export interface IFetchCountries {
    type: fetchCountriesActionTypes.FETCH_COUNTRIES
}

export interface IFetchCountriesSuccess {
    type: fetchCountriesActionTypes.FETCH_COUNTRIES_SUCCESS
    payload: any
}

export interface IFetchCountriesError {
    type: fetchCountriesActionTypes.FETCH_COUNTRIES_ERROR
    payload: string
}

export type CountriesActionTypes = IFetchCountries | IFetchCountriesSuccess | IFetchCountriesError