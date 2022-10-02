import axios from "axios";

const instance = axios.create({
    baseURL: 'https://app.sportdataapi.com/api/v1/soccer/'
})

export const getPlayersAPI = (country_id: number, max_age?: number, min_age?: number) => {
    return instance.get('players?apikey=6e8f4ee0-41a0-11ed-8969-8777766ceadb&country_id=48')
}

