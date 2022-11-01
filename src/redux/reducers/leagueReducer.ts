import { IAction } from '../types/types'
import { getLeagueActionType, ILeagueState } from '../types/leaguesType'

const initialState: ILeagueState = {
	league: null,
	loadingLeague: false,
	errorLeague: null,
}

const leagueReducer = (state = initialState, action: IAction): ILeagueState => {
	switch (action.type) {
		case getLeagueActionType.FETCH_LEAGUE:
			return {
				...state,
				league: null,
				loadingLeague: true,
				errorLeague: null,
			}
		case getLeagueActionType.FETCH_LEAGUE_SUCCESS:
			return {
				...state,
				league: action.payload,
				loadingLeague: false,
				errorLeague: null,
			}
		case getLeagueActionType.FETCH_LEAGUE_ERROR:
			return {
				...state,
				league: null,
				loadingLeague: false,
				errorLeague: action.payload,
			}
		default:
			return state
	}
}

export default leagueReducer
