import {IAction} from "../types/types";
import {fetchPlayerActionTypes, fetchPlayersActionTypes, IPlayerState} from "../types/playersType";


const initialState: IPlayerState = {
    player: {
        player_id: 0,
        firstname: '',
        lastname: '',
        birthday: '',
        age: 0,
        weight: null,
        height: null,
        img: '',
        country: {
            country_id: 0,
            name: '',
            country_code: '',
            continent: ''
        }
    },
    loading: false,
    error: null
}

const playerReducer = (state = initialState, action: IAction): IPlayerState => {
    switch (action.type) {
        case fetchPlayerActionTypes.FETCH_PLAYER:
            return {
                ...state,
                player: {
                    player_id: 0,
                    firstname: '',
                    lastname: '',
                    birthday: '',
                    age: 0,
                    weight: null,
                    height: null,
                    img: '',
                    country: {
                        country_id: 0,
                        name: '',
                        country_code: '',
                        continent: ''
                    }
                },
                loading: true,
                error: null
            }
        case fetchPlayerActionTypes.FETCH_PLAYER_SUCCESS:
            return {
                ...state,
                player: action.payload,
                loading: false,
                error: null
            }
        case fetchPlayerActionTypes.FETCH_PLAYER_ERROR:
            return {
                ...state,
                player: {
                    player_id: 0,
                    firstname: '',
                    lastname: '',
                    birthday: '',
                    age: 0,
                    weight: null,
                    height: null,
                    img: '',
                    country: {
                        country_id: 0,
                        name: '',
                        country_code: '',
                        continent: ''
                    }
                },
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}

export default playerReducer