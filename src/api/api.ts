import axios from "axios";

const instance = axios.create({
    baseURL: 'https://app.sportdataapi.com/api/v1/soccer/'
})

export const getPlayersAPI = (country_id: number, max_age?: number, min_age?: number) => {
    if (max_age && min_age) {
        return instance.get(`players?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}&max_age=${max_age}&min_age=${min_age}`)
    }
    else {
        return instance.get(`players?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
    }
}

export const getCountriesAPI = (continent?: string) => {
    return instance.get(`countries?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&continent=${continent}`)
}

export const getCountryAPI = (country_id: number) => {
    return instance.get(`countries/${country_id}?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb`)
}

export const getLeaguesAPI = (country_id?: number) => {
    if (country_id) {
        return instance.get(`leagues?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
    }
    return instance.get(`leagues?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&subscribed=true`)
}

export const getLeagueAPI = (league_id: number) => {
    return instance.get(`leagues/${league_id}?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb`)
}

export const getSeasonsAPI = (league_id: number) => {
    return instance.get(`seasons?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&league_id=${league_id}`)
}

export const getSeasonByIdAPI = (season_id: number) => {
    return instance.get(`seasons/${season_id}?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb`)
}

export const getStagesAPI = (season_id: number) => {
    return instance.get(`stages?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}`)
}

export const getTeamsAPI = (country_id: number) => {
    return instance.get(`teams?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
}

export const getTeamByIdAPI = (team_id: number) => {
    return instance.get(`teams/${team_id}?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb`)
}

export const getMatchesAPI = (season_id: number, live: boolean, status_code: number, date_from: string, date_to: string) => {
    if (season_id != 0 && live) {
        return instance.get(`matches?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}&live=${live}`)
    }

    if (season_id != 0 && !live && date_from != '' && date_to!='') {
        return instance.get(`matches?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}&date_from=${date_from}&date_to=${date_to}`)
    }

    if (season_id === 0 && live) {
        return instance.get(`matches?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&live=true`)
    }

    return instance.get(`matches?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}`)
}

export const getStandingsAPI = (season_id: number) => {
    return instance.get(`standings?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}`)
}

export const getTopscorersAPI = (season_id: number) => {
    return instance.get(`topscorers?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&season_id=${season_id}`)
}

export const getPlayerByIdAPI = (player_id: number) => {
    return instance.get(`players/${player_id}?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb`)
}

export const getBookmakersAPI = () => {
    return instance.get('bookmakers?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb')
}

export const getMarketsAPI = () => {
    return instance.get('markets?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb')
}

export const getRefereesAPI = (country_id: number) => {
    return instance.get(`referees?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
}

export const getVenuesAPI = (country_id: number) => {
    return instance.get(`venues?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
}