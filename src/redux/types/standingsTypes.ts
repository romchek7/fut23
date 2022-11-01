export interface IStandingsState {
	standingInfo: IStandingInfo
	loading: boolean
	error: null | string
}

export interface IStandingInfo {
	season_id: number
	league_id: number
	has_groups: number
	standings: IStanding[]
}

export interface IStanding {
	team_id: number
	points: number
	status: string
	result: string
	overall: {
		games_played: number
		won: number
		draw: number
		lost: number
		goals_diff: number
		goals_scored: number
		goals_against: number
	}
	home: {
		games_played: number
		won: number
		draw: number
		lost: number
		goals_diff: number
		goals_scored: number
		goals_against: number
	}
	away: {
		games_played: number
		won: number
		draw: number
		lost: number
		goals_diff: number
		goals_scored: number
		goals_against: number
	}
}

export enum getStandingsActionTypes {
	// eslint-disable-next-line no-unused-vars
	FETCH_STANDINGS = 'FETCH_STANDINGS',
	// eslint-disable-next-line no-unused-vars
	FETCH_STANDINGS_SUCCESS = 'FETCH_STANDINGS_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_STANDINGS_ERROR = 'FETCH_STANDINGS_ERROR',
}

interface FetchStandings {
	type: getStandingsActionTypes.FETCH_STANDINGS
}

interface FetchStandingsSuccess {
	type: getStandingsActionTypes.FETCH_STANDINGS_SUCCESS
	payload: any
}

interface FetchStandingsError {
	type: getStandingsActionTypes.FETCH_STANDINGS_ERROR
	payload: string
}

export type StandingsActionTypes =
	| FetchStandings
	| FetchStandingsSuccess
	| FetchStandingsError
