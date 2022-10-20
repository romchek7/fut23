import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as StandingsThunk from "../redux/thunks/standingsThunk";

const useDispatchStandings = () => {
    const dispatch = useDispatch()
    return bindActionCreators(StandingsThunk, dispatch)
}

export default useDispatchStandings