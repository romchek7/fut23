import { Dispatch } from 'redux'
import {
	fetchPlayerActionTypes,
	fetchPlayersActionTypes,
	PlayerActionTypes,
	PlayersActionTypes,
} from '../types/playersType'
import { getPlayerByIdAPI, getPlayersAPI } from '../../api/api'

export const fetchPlayers = (
	country_id: number,
	max_age?: number,
	min_age?: number
) => {
	return async (dispatch: Dispatch<PlayersActionTypes>) => {
		try {
			dispatch({ type: fetchPlayersActionTypes.FETCH_PLAYERS })

			const response = await getPlayersAPI(country_id, max_age, min_age)

			if (response) {
				dispatch({
					type: fetchPlayersActionTypes.FETCH_PLAYERS_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: fetchPlayersActionTypes.FETCH_PLAYERS_ERROR,
				payload: `${e}`,
			})
		}
	}
}

export const getPlayerById = (player_id: number) => {
	return async (dispatch: Dispatch<PlayerActionTypes>) => {
		try {
			dispatch({ type: fetchPlayerActionTypes.FETCH_PLAYER })

			const response = await getPlayerByIdAPI(player_id)

			if (response) {
				dispatch({
					type: fetchPlayerActionTypes.FETCH_PLAYER_SUCCESS,
					payload: response.data.data,
				})
			}
		} catch (e) {
			dispatch({
				type: fetchPlayerActionTypes.FETCH_PLAYER_ERROR,
				payload: `${e}`,
			})
		}
	}
}
