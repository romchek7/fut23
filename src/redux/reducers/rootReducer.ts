import {combineReducers} from "redux";
import playersReducer from "./playersReducer";
import countriesReducer from "./countriesReducer";
import leaguesReducer from "./leaguesReducer";

const rootReducer = combineReducers({
    playersReducer,
    countriesReducer,
    leaguesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer