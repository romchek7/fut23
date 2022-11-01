import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RefereesThunk from '../redux/thunks/refereesThunk'

const useDispatchReferees = () => {
	const dispatch = useDispatch()
	return bindActionCreators(RefereesThunk, dispatch)
}

export default useDispatchReferees
