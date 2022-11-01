import {
	getBookmakersActionType,
	IBookmakersState,
} from '../types/bookmakersType'
import { IAction } from '../types/types'

const initialState: IBookmakersState = {
	bookmakers: [],
	loading: false,
	error: null,
}

const bookmakersReducer = (
	state = initialState,
	action: IAction
): IBookmakersState => {
	switch (action.type) {
		case getBookmakersActionType.FETCH_BOOKMAKERS:
			return {
				...state,
				bookmakers: [],
				loading: true,
				error: null,
			}
		case getBookmakersActionType.FETCH_BOOKMAKERS_SUCCESS:
			return {
				...state,
				bookmakers: action.payload,
				loading: false,
				error: null,
			}
		case getBookmakersActionType.FETCH_BOOKMAKERS_ERROR:
			return {
				...state,
				bookmakers: [],
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default bookmakersReducer
