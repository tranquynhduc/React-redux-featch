export const SET_PRODUCT = 'SET_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, products: action.payload }
        default:
            return state;
    }
}
export const detailReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case SELECT_PRODUCT:
            return { ...state, ...payload}
            case REMOVE_PRODUCT:
                return {}
        default:
            return state;
    }
}
