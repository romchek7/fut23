import {AppStateType} from "../reducers/rootReducer";

export const getStandingsSelector = (state: AppStateType) => {
    return state.standingsReducer
}