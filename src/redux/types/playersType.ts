export interface IPlayersState {
    players: IPlayer[]
    loading: boolean
    error: null | string
}

export interface IPlayer {
    player_id: number
    firstname: string
    lastname: string
    birthday: string
    age: number
    weight: null | number
    height: number | null
    img: string
    country: {
        country_id: number
        name: string
        country_code: string
        continent: string
    }
}

export enum fetchPlayersActionTypes {
    FETCH_PLAYERS = 'FETCH_PLAYERS',
    FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS',
    FETCH_PLAYERS_ERROR = 'FETCH_PLAYERS_ERROR'
}

export interface IFetchPlayers {
    type: fetchPlayersActionTypes.FETCH_PLAYERS
}

export interface IFetchPlayersSuccess {
    type: fetchPlayersActionTypes.FETCH_PLAYERS_SUCCESS
    payload: any
}

export interface IFetchPlayersError {
    type: fetchPlayersActionTypes.FETCH_PLAYERS_ERROR
    payload: string
}

export type PlayersActionTypes = IFetchPlayers | IFetchPlayersSuccess | IFetchPlayersError