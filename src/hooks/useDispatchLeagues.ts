import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as LeaguesThunk from "../redux/thunks/leaguesThunk";

export const useDispatchLeagues = () => {
    const dispatch = useDispatch()
    return bindActionCreators(LeaguesThunk, dispatch)
}

export default useDispatchLeagues