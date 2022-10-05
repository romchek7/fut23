import {AppStateType} from "../reducers/rootReducer";

export const getSeasons = (state: AppStateType) => {
    return state.seasonsReducer
}