import { getRefereesActionTypes, IRefereesState } from '../types/refereesType'
import { IAction } from '../types/types'

const initialState: IRefereesState = {
	referees: [],
	loading: false,
	error: null,
}

const refereesReducer = (
	state = initialState,
	action: IAction
): IRefereesState => {
	switch (action.type) {
		case getRefereesActionTypes.FETCH_REFEREES:
			return {
				...state,
				referees: [],
				loading: true,
				error: null,
			}
		case getRefereesActionTypes.FETCH_REFEREES_SUCCESS:
			return {
				...state,
				referees: action.payload,
				loading: false,
				error: null,
			}
		case getRefereesActionTypes.FETCH_REFEREES_ERROR:
			return {
				...state,
				referees: [],
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default refereesReducer
