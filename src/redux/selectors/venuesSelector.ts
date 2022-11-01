import { AppStateType } from '../reducers/rootReducer'

export const getVenuesSelector = (state: AppStateType) => {
	return state.venuesReducer
}
