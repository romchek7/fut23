import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TeamsThunk from '../redux/thunks/teamsThunk'

const useDispatchTeams = () => {
	const dispatch = useDispatch()
	return bindActionCreators(TeamsThunk, dispatch)
}

export default useDispatchTeams
