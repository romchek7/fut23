import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as LeagueThunk from "../redux/thunks/leagueThunk";

export const useDispatchLeague = () => {
    const dispatch = useDispatch()
    return bindActionCreators(LeagueThunk, dispatch)
}

export default useDispatchLeague