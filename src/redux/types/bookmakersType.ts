export interface IBookmakers {
    bookmaker_id: number
    name: string
    img: string
}

export interface IBookmakersState {
    bookmakers: IBookmakers[]
    loading: boolean
    error: null | string
}

export enum getBookmakersActionType {
    FETCH_BOOKMAKERS='FETCH_BOOKMAKERS',
    FETCH_BOOKMAKERS_SUCCESS='FETCH_BOOKMAKERS_SUCCESS',
    FETCH_BOOKMAKERS_ERROR='FETCH_BOOKMAKERS_ERROR'
}

interface FetchBookmakers {
    type: getBookmakersActionType.FETCH_BOOKMAKERS
}

interface FetchBookmakersSuccess {
    type: getBookmakersActionType.FETCH_BOOKMAKERS_SUCCESS,
    payload: any
}

interface FetchBookmakersError {
    type: getBookmakersActionType.FETCH_BOOKMAKERS_ERROR,
    payload: string
}

export type BookmakersActionType = FetchBookmakers | FetchBookmakersSuccess | FetchBookmakersError