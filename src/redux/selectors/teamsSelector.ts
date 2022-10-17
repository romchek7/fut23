import {AppStateType} from "../reducers/rootReducer";

export const getTeamsSelector = (state: AppStateType) => {
    return state.teamsReducer
}