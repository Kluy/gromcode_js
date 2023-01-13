import { RESET } from "../../../lesson62-redux/t1/src/counter.actions";
import { DECREMENT, INCREMENT } from "./counter.actions";

export const counterReducer = (state = 0, action) => {
    switch (action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

export default counterReducer;