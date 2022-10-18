import {combineReducers} from "redux";
import playersReducer from "./playersReducer";
import countriesReducer from "./countriesReducer";
import leaguesReducer from "./leaguesReducer";
import seasonsReducer from "./seasonsReducer";
import leagueReducer from "./leagueReducer";
import countryReducer from "./countryReducer";
import seasonReducer from "./seasonReducer"
import stagesReducer from "./stagesReducer";
import teamsReducer from "./teamsReducer";
import matchesReducer from "./matchesReducer";

const rootReducer = combineReducers({
    playersReducer,
    countriesReducer,
    leaguesReducer,
    seasonsReducer,
    leagueReducer,
    countryReducer,
    seasonReducer,
    stagesReducer,
    teamsReducer,
    matchesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer