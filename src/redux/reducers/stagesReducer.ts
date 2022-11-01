import { IAction } from '../types/types'
import { getStagesActionTypes, IStagesState } from '../types/stagesType'

const initialState: IStagesState = {
	stages: [],
	loadingStages: false,
	errorStages: null,
}

const stagesReducer = (state = initialState, action: IAction): IStagesState => {
	switch (action.type) {
		case getStagesActionTypes.FETCH_STAGES:
			return {
				...state,
				stages: [],
				loadingStages: true,
				errorStages: null,
			}
		case getStagesActionTypes.FETCH_STAGES_SUCCESS:
			return {
				...state,
				stages: action.payload,
				loadingStages: false,
				errorStages: null,
			}
		case getStagesActionTypes.FETCH_STAGES_ERROR:
			return {
				...state,
				stages: [],
				loadingStages: false,
				errorStages: action.payload,
			}
		default:
			return state
	}
}

export default stagesReducer
