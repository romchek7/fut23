import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as SeasonsThunk from "../redux/thunks/seasonsThunk";

const useDispatchSeasons = () => {
    const dispatch = useDispatch()
    return bindActionCreators(SeasonsThunk, dispatch)
}

export default useDispatchSeasons