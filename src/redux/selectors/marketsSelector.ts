import { AppStateType } from '../reducers/rootReducer'

export const getMarketsSelector = (state: AppStateType) => {
	return state.marketsReducer
}
