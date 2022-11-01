export interface ILeague {
	league_id: number
	country_id: number
	name: string
}

export interface ILeaguesState {
	leagues: ILeague[]
	loadingLeagues: boolean
	errorLeagues: null | string
}

export enum getLeaguesActionType {
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUES = 'FETCH_LEAGUES',
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUES_SUCCESS = 'FETCH_LEAGUES_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUES_ERROR = 'FETCH_LEAGUES_ERROR',
}

interface FetchLeagues {
	type: getLeaguesActionType.FETCH_LEAGUES
}

interface FetchLeaguesSuccess {
	type: getLeaguesActionType.FETCH_LEAGUES_SUCCESS
	payload: any
}

interface FetchLeaguesError {
	type: getLeaguesActionType.FETCH_LEAGUES_ERROR
	payload: string
}

export type LeaguesActionTypes =
	| FetchLeagues
	| FetchLeaguesSuccess
	| FetchLeaguesError

export interface ILeagueState {
	league: ILeague | null
	loadingLeague: boolean
	errorLeague: null | string
}

export enum getLeagueActionType {
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUE = 'FETCH_LEAGUE',
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUE_SUCCESS = 'FETCH_LEAGUE_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_LEAGUE_ERROR = 'FETCH_LEAGUE_ERROR',
}

interface FetchLeague {
	type: getLeagueActionType.FETCH_LEAGUE
}

interface FetchLeagueSuccess {
	type: getLeagueActionType.FETCH_LEAGUE_SUCCESS
	payload: any
}

interface FetchLeagueError {
	type: getLeagueActionType.FETCH_LEAGUE_ERROR
	payload: string
}

export type LeagueActionTypes =
	| FetchLeague
	| FetchLeagueSuccess
	| FetchLeagueError
