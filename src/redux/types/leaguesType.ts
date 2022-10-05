export interface ILeague {
    league_id: number
    country_id: number
    name: string
}

export interface ILeaguesState {
    leagues: ILeague[]
    loadingLeague: boolean
    errorLeague: null | string
}

export enum getLeaguesActionType {
    FETCH_LEAGUES='FETCH_LEAGUES',
    FETCH_LEAGUES_SUCCESS='FETCH_LEAGUES_SUCCESS',
    FETCH_LEAGUES_ERROR='FETCH_LEAGUES_ERROR'
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

export type LeaguesActionTypes = FetchLeagues | FetchLeaguesSuccess | FetchLeaguesError