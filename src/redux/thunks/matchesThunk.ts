import { Dispatch } from 'redux'
import {
	getMatchesActionType,
	IMatch,
	MatchesActionTypes,
} from '../types/matchesType'
import { getMatchesAPI } from '../../api/api'

export const fetchMatches = (
	season_id: number,
	live: boolean,
	status_code: number,
	date_from: string,
	date_to: string
) => {
	return async (dispatch: Dispatch<MatchesActionTypes>) => {
		try {
			dispatch({
				type: getMatchesActionType.FETCH_MATCHES,
			})

			const response = await getMatchesAPI(
				season_id,
				live,
				status_code,
				date_from,
				date_to
			)

			if (response.data) {
				const matches = Object.values(response.data.data) as IMatch[]

				dispatch({
					type: getMatchesActionType.FETCH_MATCHES_SUCCESS,
					payload: matches,
				})
			}
		} catch (e) {
			dispatch({
				type: getMatchesActionType.FETCH_MATCHES_ERROR,
				payload: `${e}`,
			})
		}
	}
}
