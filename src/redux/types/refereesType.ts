import { ICountry } from './countriesType'

export interface IReferee {
	id: number
	name: string
	common_name: string
	firstname: string
	lastname: string
	birthdate: string
	img: string
	country: ICountry
}

export interface IRefereesState {
	referees: IReferee[]
	loading: boolean
	error: null | string
}

export enum getRefereesActionTypes {
	// eslint-disable-next-line no-unused-vars
	FETCH_REFEREES = 'FETCH_REFEREES',
	// eslint-disable-next-line no-unused-vars
	FETCH_REFEREES_SUCCESS = 'FETCH_REFEREES_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_REFEREES_ERROR = 'FETCH_REFEREES_ERROR',
}

interface FetchReferees {
	type: getRefereesActionTypes.FETCH_REFEREES
}

interface FetchRefereesSuccess {
	type: getRefereesActionTypes.FETCH_REFEREES_SUCCESS
	payload: any
}

interface FetchRefereesError {
	type: getRefereesActionTypes.FETCH_REFEREES_ERROR
	payload: string
}

export type RefereesActionTypes =
	| FetchReferees
	| FetchRefereesSuccess
	| FetchRefereesError
