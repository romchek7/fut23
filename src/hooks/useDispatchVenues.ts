import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as VenuesThunk from '../redux/thunks/venuesThunk'

const useDispatchVenues = () => {
	const dispatch = useDispatch()
	return bindActionCreators(VenuesThunk, dispatch)
}

export default useDispatchVenues
