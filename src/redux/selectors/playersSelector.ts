import { AppStateType } from '../reducers/rootReducer'

export const fetchPlayersSelector = (state: AppStateType) => {
	return state.playersReducer
}

export const getPlayerByIdSelector = (state: AppStateType) => {
	return state.playerReducer
}
