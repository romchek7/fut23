import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as MarketsThunk from "../redux/thunks/marketsthunk";

export const useDispatchMarkets = () => {
    const dispatch = useDispatch()
    return bindActionCreators(MarketsThunk, dispatch)
}

export default useDispatchMarkets