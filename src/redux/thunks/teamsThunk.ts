import { Dispatch } from 'redux'
import { getTeamsActionTypes, TeamActionTypes } from '../types/teamsType'
import { getTeamsAPI } from '../../api/api'

export const fetchTeams = (country_id: number) => {
	return async (dispatch: Dispatch<TeamActionTypes>) => {
		try {
			dispatch({
				type: getTeamsActionTypes.FETCH_TEAMS,
			})

			const response = await getTeamsAPI(country_id)

			if (response.data) {
				dispatch({
					type: getTeamsActionTypes.FETCH_TEAMS_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: getTeamsActionTypes.FETCH_TEAMS_ERROR,
				payload: `${e}`,
			})
		}
	}
}
