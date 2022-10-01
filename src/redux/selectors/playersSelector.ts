import {AppStateType} from "../reducers/rootReducer";

export const fetchPlayersSelector = (state: AppStateType) => {
    return state.playersReducer
}