import { getLeaguesActionType, ILeaguesState } from '../types/leaguesType'
import { IAction } from '../types/types'

const initialState: ILeaguesState = {
	leagues: [],
	loadingLeagues: false,
	errorLeagues: null,
}

const leaguesReducer = (
	state = initialState,
	action: IAction
): ILeaguesState => {
	switch (action.type) {
		case getLeaguesActionType.FETCH_LEAGUES:
			return {
				...state,
				leagues: [],
				loadingLeagues: true,
				errorLeagues: null,
			}
		case getLeaguesActionType.FETCH_LEAGUES_SUCCESS:
			return {
				...state,
				leagues: action.payload,
				loadingLeagues: false,
				errorLeagues: null,
			}
		case getLeaguesActionType.FETCH_LEAGUES_ERROR:
			return {
				...state,
				leagues: [],
				loadingLeagues: false,
				errorLeagues: action.payload,
			}
		default:
			return state
	}
}

export default leaguesReducer
