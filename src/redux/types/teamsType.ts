import { ICountry } from './countriesType'

export interface ITeam {
	team_id: number
	name: string
	short_code: string
	logo: string
	country: ICountry
}

export interface ITeamsState {
	teams: ITeam[]
	loadingTeams: boolean
	errorTeams: null | string
}

export enum getTeamsActionTypes {
	// eslint-disable-next-line no-unused-vars
	FETCH_TEAMS = 'FETCH_TEAMS',
	// eslint-disable-next-line no-unused-vars
	FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR',
}

interface FetchTeams {
	type: getTeamsActionTypes.FETCH_TEAMS
}

interface FetchTeamsSuccess {
	type: getTeamsActionTypes.FETCH_TEAMS_SUCCESS
	payload: any
}

interface FetchTeamsError {
	type: getTeamsActionTypes.FETCH_TEAMS_ERROR
	payload: string
}

export type TeamActionTypes = FetchTeams | FetchTeamsSuccess | FetchTeamsError

export interface ITeamState {
	team: ITeam
	loadingTeam: boolean
	errorTeam: null | string
}
