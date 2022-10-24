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
import topScorersReducer from "./topScorersReducer";
import playerReducer from "./playerReducer";
import bookmakersReducer from "./bookmakersReducer";
import marketsReducer from "./marketsReducer";
import refereesReducer from "./refereesReducer";
import venuesReducer from "./venuesReducer";

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
    teamReducer,
    topScorersReducer,
    playerReducer,
    bookmakersReducer,
    marketsReducer,
    refereesReducer,
    venuesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export default rootReducer