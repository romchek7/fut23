import { IAction } from '../types/types'
import { getTeamsActionTypes, ITeamState } from '../types/teamsType'

const initialState: ITeamState = {
	team: {
		team_id: 0,
		name: '',
		short_code: '',
		logo: '',
		country: {
			country_id: 0,
			name: '',
			country_code: null,
			continent: '',
		},
	},
	loadingTeam: false,
	errorTeam: null,
}

const teamReducer = (state = initialState, action: IAction): ITeamState => {
	switch (action.type) {
		case getTeamsActionTypes.FETCH_TEAMS:
			return {
				...state,
				team: {
					team_id: 0,
					name: '',
					short_code: '',
					logo: '',
					country: {
						country_id: 0,
						name: '',
						country_code: null,
						continent: '',
					},
				},
				loadingTeam: true,
				errorTeam: null,
			}
		case getTeamsActionTypes.FETCH_TEAMS_SUCCESS:
			return {
				...state,
				team: action.payload,
				loadingTeam: false,
				errorTeam: null,
			}
		case getTeamsActionTypes.FETCH_TEAMS_ERROR:
			return {
				...state,
				team: {
					team_id: 0,
					name: '',
					short_code: '',
					logo: '',
					country: {
						country_id: 0,
						name: '',
						country_code: null,
						continent: '',
					},
				},
				loadingTeam: false,
				errorTeam: action.payload,
			}
		default:
			return state
	}
}

export default teamReducer
