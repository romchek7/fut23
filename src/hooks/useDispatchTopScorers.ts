import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TopScorersThunk from '../redux/thunks/topScorersThunk'

const useDispatchTopScorers = () => {
	const dispatch = useDispatch()
	return bindActionCreators(TopScorersThunk, dispatch)
}

export default useDispatchTopScorers
