import { AppStateType } from '../reducers/rootReducer'

export const getBookmakersSelector = (state: AppStateType) => {
	return state.bookmakersReducer
}
