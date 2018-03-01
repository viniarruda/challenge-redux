const productReducer = (state = { isPending: false }, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS_PENDING":
            state = {
                ...state,
                isPending: true
            };
            break;
        case "LOAD_PRODUCTS_FULFILLED":
            state = {
                ...state,
                ...action.payload,
                isPending: false
            };
            break;
        default:
            return state
    }
    return state
};

export default productReducer;