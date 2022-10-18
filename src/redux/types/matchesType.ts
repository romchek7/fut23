import {ITeam} from "./teamsType";

export interface IMatch {
    match_id: number
    status_code: number
    status: string
    match_start: string
    league_id: number
    season_id: number
    home_team: ITeam
    away_team: ITeam
    stats: {
        home_score: number
        away_score: number
        ht_score: string
        ft_score: string
        et_score: null | string
        ps_score: null | string
    }
    venue: {
        venue_id: number
        name: string
        capacity: number
        city: string
        country_id: number
    }
}

export interface IMatchState {
    matches: IMatch[]
    loadingMatches: boolean
    errorMatches: null | string
}

export enum getMatchesActionType {
    FETCH_MATCHES='FETCH_MATCHES',
    FETCH_MATCHES_SUCCESS='FETCH_MATCHES_SUCCESS',
    FETCH_MATCHES_ERROR='FETCH_MATCHES_ERROR'
}

interface FetchMatches {
    type: getMatchesActionType.FETCH_MATCHES
}

interface FetchMatchesSuccess {
    type: getMatchesActionType.FETCH_MATCHES_SUCCESS
    payload: any
}

interface FetchMatchesError {
    type: getMatchesActionType.FETCH_MATCHES_ERROR
    payload: string
}

export type MatchesActionTypes = FetchMatches | FetchMatchesSuccess | FetchMatchesError