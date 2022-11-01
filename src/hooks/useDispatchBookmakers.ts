import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BookmakersThunk from '../redux/thunks/bookmakersThunk'

const useDispatchBookmakers = () => {
	const dispatch = useDispatch()
	return bindActionCreators(BookmakersThunk, dispatch)
}

export default useDispatchBookmakers
