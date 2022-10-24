export interface ITopScorer {
    pos: number
    player:{
        player_id: number
        player_name: string
    }
    team:{
        team_id: number
        team_name: string
    },
    league_id: number
    season_id: number
    matches_played: number
    minutes_played: number
    substituted_in: number
    goals:{
        overall: number
        home: number
        away: number
    }
    penalties: number
}

export interface ITopScorersState {
    topScorers: ITopScorer[]
    loading: boolean
    error: null | string
}

export enum getTopScorersActionTypes {
    FETCH_TOPSCORERS='FETCH_TOPSCORERS',
    FETCH_TOPSCORERS_SUCCESS='FETCH_TOPSCORERS_SUCCESS',
    FETCH_TOPSCORERS_ERROR='FETCH_TOPSCORERS_ERROR'
}

interface FetchTopScorers {
    type: getTopScorersActionTypes.FETCH_TOPSCORERS
}

interface FetchTopScorersSuccess {
    type: getTopScorersActionTypes.FETCH_TOPSCORERS_SUCCESS
    payload: any
}

interface FetchTopScorersError {
    type: getTopScorersActionTypes.FETCH_TOPSCORERS_ERROR
    payload: string
}

export type TopScorersActionType = FetchTopScorers | FetchTopScorersSuccess | FetchTopScorersError