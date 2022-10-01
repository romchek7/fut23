import {Dispatch} from "redux";
import {fetchPlayersActionTypes, IPlayersState, PlayersActionTypes} from "../types/playersType";
import {getPlayersAPI} from "../../api/api";

export const fetchPlayers = (country_id: number, max_age?: number, min_age?: number) => {
    return async (dispatch: Dispatch<PlayersActionTypes>) => {
        try {
            dispatch({type: fetchPlayersActionTypes.FETCH_PLAYERS})

            const response = await getPlayersAPI(country_id, max_age, min_age)

            dispatch({
                type: fetchPlayersActionTypes.FETCH_PLAYERS_SUCCESS,
                payload: response.data.data
            })
        }
        catch (e) {
            dispatch({
                type: fetchPlayersActionTypes.FETCH_PLAYERS_ERROR,
                payload: `${e}`
            })
        }
    }
}