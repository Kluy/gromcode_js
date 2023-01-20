import { GET_TASK } from "./tasks.actions";

const initiaslState = {
    tasksList: [],
}

const tasksReducer = (state = initiaslState, action) =>{
    switch (action.type){
        case GET_TASK:
            return {
                ...state,
                tasksList: action.payload.tasks,
            }
        default:
            return state;
    }
}

export default tasksReducer;