import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PlayersThunk from "../redux/thunks/playersThunk";

const useDispatchPlayers = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PlayersThunk, dispatch)
}

export default useDispatchPlayers