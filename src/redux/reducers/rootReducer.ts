import {combineReducers} from "redux";
import playersReducer from "./playersReducer";
import countriesReducer from "./countriesReducer";
import leaguesReducer from "./leaguesReducer";
import seasonsReducer from "./seasonsReducer";
import leagueReducer from "./leagueReducer";
import countryReducer from "./countryReducer";
import seasonReducer from "./seasonReducer"
import stagesReducer from "./stagesReducer";

const rootReducer = combineReducers({
    playersReducer,
    countriesReducer,
    leaguesReducer,
    seasonsReducer,
    leagueReducer,
    countryReducer,
    seasonReducer,
    stagesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer