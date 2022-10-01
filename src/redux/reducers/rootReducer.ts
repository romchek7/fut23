import {combineReducers} from "redux";
import playersReducer from "./playersReducer";

const rootReducer = combineReducers({
    playersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer