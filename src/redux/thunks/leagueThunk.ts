import { Dispatch } from 'redux'
import { getLeagueActionType, LeagueActionTypes } from '../types/leaguesType'
import { getLeagueAPI } from '../../api/api'

export const fetchLeague = (league_id?: number) => {
	return async (dispatch: Dispatch<LeagueActionTypes>) => {
		try {
			dispatch({
				type: getLeagueActionType.FETCH_LEAGUE,
			})

			let response = null

			if (league_id) {
				response = await getLeagueAPI(league_id)
			}

			if (response) {
				dispatch({
					type: getLeagueActionType.FETCH_LEAGUE_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: getLeagueActionType.FETCH_LEAGUE_ERROR,
				payload: `${e}`,
			})
		}
	}
}
