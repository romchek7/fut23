import { Dispatch } from 'redux'
import {
	getTopScorersActionTypes,
	TopScorersActionType,
} from '../types/topScorersType'
import { getTopscorersAPI } from '../../api/api'

export const fetchTopScorers = (season_id: number) => {
	return async (dispatch: Dispatch<TopScorersActionType>) => {
		try {
			dispatch({
				type: getTopScorersActionTypes.FETCH_TOPSCORERS,
			})

			const response = await getTopscorersAPI(season_id)

			if (response.data) {
				dispatch({
					type: getTopScorersActionTypes.FETCH_TOPSCORERS_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: getTopScorersActionTypes.FETCH_TOPSCORERS_ERROR,
				payload: `${e}`,
			})
		}
	}
}
