import {AppStateType} from "../reducers/rootReducer";

export const getRefereesSelector = (state: AppStateType) => {
    return state.refereesReducer
}