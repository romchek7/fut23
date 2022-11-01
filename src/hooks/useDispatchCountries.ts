import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CountriesThunk from '../redux/thunks/countriesThunk'

const useDispatchCountries = () => {
	const dispatch = useDispatch()
	return bindActionCreators(CountriesThunk, dispatch)
}

export default useDispatchCountries
