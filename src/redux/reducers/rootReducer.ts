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
import standingsReducer from "./standingsReducer";
import teamReducer from "./teamReducer";

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
    matchesReducer,
    standingsReducer,
    teamReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer