import { Dispatch } from 'redux'
import { getVenuesActionTypes, VenuesActionType } from '../types/venuesType'
import { getVenuesAPI } from '../../api/api'

export const fetchVenues = (country_id: number) => {
	return async (dispatch: Dispatch<VenuesActionType>) => {
		try {
			dispatch({
				type: getVenuesActionTypes.FETCH_VENUES,
			})

			const response = await getVenuesAPI(country_id)

			if (response) {
				dispatch({
					type: getVenuesActionTypes.FETCH_VENUES_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: getVenuesActionTypes.FETCH_VENUES_ERROR,
				payload: `${e}`,
			})
		}
	}
}
