import {AppStateType} from "../reducers/rootReducer";

export const getLeagues = (state: AppStateType) => {
    return state.leaguesReducer
}