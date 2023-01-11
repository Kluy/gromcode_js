import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions"

const initState = {
    products: []
}

export const cartReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload.product),
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(elem => elem.id !== action.payload.id)
            }
        default:
            return state;

    }
} 