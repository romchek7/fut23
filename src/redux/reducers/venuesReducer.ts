import { getVenuesActionTypes, IVenuesState } from '../types/venuesType'
import { IAction } from '../types/types'

const initialState: IVenuesState = {
	venues: [],
	loading: false,
	error: null,
}

const venuesReducer = (state = initialState, action: IAction): IVenuesState => {
	switch (action.type) {
		case getVenuesActionTypes.FETCH_VENUES:
			return {
				...state,
				venues: [],
				loading: true,
				error: null,
			}
		case getVenuesActionTypes.FETCH_VENUES_SUCCESS:
			return {
				...state,
				venues: action.payload,
				loading: false,
				error: null,
			}
		case getVenuesActionTypes.FETCH_VENUES_ERROR:
			return {
				...state,
				venues: [],
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default venuesReducer
