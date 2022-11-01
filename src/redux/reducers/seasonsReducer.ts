import { getSeasonsActionType, ISeasonState } from '../types/seasonsType'
import { IAction } from '../types/types'

const initialState: ISeasonState = {
	seasons: [],
	loadingSeasons: false,
	errorSeasons: null,
}

const seasonsReducer = (
	state = initialState,
	action: IAction
): ISeasonState => {
	switch (action.type) {
		case getSeasonsActionType.FETCH_SEASONS:
			return {
				...state,
				seasons: [],
				loadingSeasons: true,
				errorSeasons: null,
			}
		case getSeasonsActionType.FETCH_SEASONS_SUCCESS:
			return {
				...state,
				seasons: action.payload,
				loadingSeasons: false,
				errorSeasons: null,
			}
		case getSeasonsActionType.FETCH_SEASONS_ERROR:
			return {
				...state,
				seasons: [],
				loadingSeasons: false,
				errorSeasons: action.payload,
			}
		default:
			return state
	}
}

export default seasonsReducer
