import { getMatchesActionType, IMatchState } from '../types/matchesType'
import { IAction } from '../types/types'

const initialState: IMatchState = {
	matches: [],
	loadingMatches: false,
	errorMatches: null,
}

const matchesReducer = (state = initialState, action: IAction): IMatchState => {
	switch (action.type) {
		case getMatchesActionType.FETCH_MATCHES:
			return {
				...state,
				matches: [],
				loadingMatches: true,
				errorMatches: null,
			}
		case getMatchesActionType.FETCH_MATCHES_SUCCESS:
			return {
				...state,
				matches: action.payload,
				loadingMatches: false,
				errorMatches: null,
			}
		case getMatchesActionType.FETCH_MATCHES_ERROR:
			return {
				...state,
				matches: [],
				loadingMatches: false,
				errorMatches: action.payload,
			}
		default:
			return state
	}
}

export default matchesReducer
