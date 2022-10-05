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

export const getCountries = (continent?: string) => {
    return instance.get(`countries?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&continent=${continent}`)
}

export const getLeagues = (country_id?: number) => {
    if (country_id) {
        return instance.get(`leagues?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=${country_id}`)
    }
    return instance.get(`leagues?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&subscribed=true`)
}