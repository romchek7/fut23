export interface ISeason {
    season_id: number
    name: string
    is_current: number
    country_id: number
    league_id: number
    start_date: string
    end_date: string
}

export interface ISeasonState {
    seasons: ISeason[]
    loadingSeasons: boolean
    errorSeasons: null | string
}

export enum getSeasonsActionType {
    FETCH_SEASONS='FETCH_SEASONS',
    FETCH_SEASONS_SUCCESS='FETCH_SEASONS_SUCCESS',
    FETCH_SEASONS_ERROR='FETCH_SEASONS_ERROR'
}

interface FetchSeasons {
    type: getSeasonsActionType.FETCH_SEASONS
}

interface FetchSeasonsSuccess {
    type: getSeasonsActionType.FETCH_SEASONS_SUCCESS
    payload: any
}

interface FetchSeasonsError {
    type: getSeasonsActionType.FETCH_SEASONS_ERROR
    payload: string
}

export type SeasonsActionTypes = FetchSeasons | FetchSeasonsSuccess | FetchSeasonsError