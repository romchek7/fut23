export interface IVenue {
    venue_id: number
    name: string
    capacity: number
    city: string
    country_id: number
}

export interface IVenuesState {
    venues: IVenue[]
    loading: boolean
    error: null | string
}

export enum getVenuesActionTypes {
    FETCH_VENUES='FETCH_VENUES',
    FETCH_VENUES_SUCCESS='FETCH_VENUES_SUCCESS',
    FETCH_VENUES_ERROR='FETCH_VENUES_ERROR'
}

interface FetchVenues {
    type: getVenuesActionTypes.FETCH_VENUES
}

interface FetchVenuesSuccess {
    type: getVenuesActionTypes.FETCH_VENUES_SUCCESS
    payload: any
}

interface FetchVenuesError {
    type: getVenuesActionTypes.FETCH_VENUES_ERROR
    payload: string
}

export type VenuesActionType = FetchVenues | FetchVenuesSuccess | FetchVenuesError