import {combineReducers} from "redux";
import playersReducer from "./playersReducer";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
    playersReducer,
    countriesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer