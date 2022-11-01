import { getSeasonByIdActionType, ISeasonByIdState } from '../types/seasonsType'
import { IAction } from '../types/types'

const initialState: ISeasonByIdState = {
	season: null,
	loadingSeason: true,
	errorSeason: null,
}

const seasonReducer = (
	state = initialState,
	action: IAction
): ISeasonByIdState => {
	switch (action.type) {
		case getSeasonByIdActionType.FETCH_SEASON_BY_ID:
			return {
				...state,
				season: null,
				loadingSeason: true,
				errorSeason: null,
			}
		case getSeasonByIdActionType.FETCH_SEASON_BY_ID_SUCCESS:
			return {
				...state,
				season: action.payload,
				loadingSeason: false,
				errorSeason: null,
			}
		case getSeasonByIdActionType.FETCH_SEASON_BY_ID_ERROR:
			return {
				...state,
				season: null,
				loadingSeason: false,
				errorSeason: action.payload,
			}
		default:
			return state
	}
}

export default seasonReducer
