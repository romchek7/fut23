import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CountryThunk from "../redux/thunks/countryThunk";

export const useDispatchCountry = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CountryThunk, dispatch)
}

export default useDispatchCountry