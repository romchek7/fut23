import { AppStateType } from '../reducers/rootReducer'

export const getStagesSelector = (state: AppStateType) => {
	return state.stagesReducer
}
