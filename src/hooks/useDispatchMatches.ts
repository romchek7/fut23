import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as MatchesThunk from "../redux/thunks/matchesThunk"

const useDispatchMatches = () => {
    const dispatch = useDispatch()
    return bindActionCreators(MatchesThunk, dispatch)
}

export default useDispatchMatches