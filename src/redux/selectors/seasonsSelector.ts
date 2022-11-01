import { AppStateType } from '../reducers/rootReducer'

export const getSeasons = (state: AppStateType) => {
	return state.seasonsReducer
}

export const getSeasonByIdSelector = (state: AppStateType) => {
	return state.seasonReducer
}
