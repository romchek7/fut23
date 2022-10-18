import {AppStateType} from "../reducers/rootReducer";

export const getMatchesSelector = (state: AppStateType) => {
    return state.matchesReducer
}