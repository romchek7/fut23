import { AppStateType } from '../reducers/rootReducer'

export const getTopScorersSelector = (state: AppStateType) => {
	return state.topScorersReducer
}
