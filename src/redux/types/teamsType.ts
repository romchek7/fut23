import {ICountry} from "./countriesType";

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
    FETCH_TEAMS='FETCH_TEAMS',
    FETCH_TEAMS_SUCCESS='FETCH_TEAMS_SUCCESS',
    FETCH_TEAMS_ERROR='FETCH_TEAMS_ERROR'
}

interface FetchTeams {
    type: getTeamsActionTypes.FETCH_TEAMS
}

interface FetchTeamsSuccess {
    type: getTeamsActionTypes.FETCH_TEAMS_SUCCESS,
    payload: any
}

interface FetchTeamsError {
    type: getTeamsActionTypes.FETCH_TEAMS_ERROR,
    payload: string
}

export type TeamActionTypes = FetchTeams | FetchTeamsSuccess | FetchTeamsError

export enum getTeamActionTypes {
    FETCH_TEAM='FETCH_TEAM',
    FETCH_TEAM_SUCCESS='FETCH_TEAM_SUCCESS',
    FETCH_TEAM_ERROR='FETCH_TEAM_ERROR'
}

interface FetchTeam {
    type: getTeamActionTypes.FETCH_TEAM
}

interface FetchTeamSuccess {
    type: getTeamActionTypes.FETCH_TEAM_SUCCESS,
    payload: any
}

interface FetchTeamError {
    type: getTeamActionTypes.FETCH_TEAM_ERROR,
    payload: string
}

export type TeamBuIdActionTypes = FetchTeam | FetchTeamSuccess | FetchTeamError

export interface ITeamState {
    team: ITeam
    loadingTeam: boolean
    errorTeam: null | string
}