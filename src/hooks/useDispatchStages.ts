import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as StagesThunk from "../redux/thunks/stagesThunk";

const useDispatchStages = () => {
    const dispatch = useDispatch()
    return bindActionCreators(StagesThunk, dispatch)
}

export default useDispatchStages