import { SET_PRODUCT ,SELECT_PRODUCT,REMOVE_PRODUCT} from './reducer';

export const setProduct =(products) =>{
    return {
        type:SET_PRODUCT,
        payload:products
    }
}

export const detailReducer =(products) =>{
    return {
        type:SELECT_PRODUCT,
        payload:products
    }
}
export const removeProduct =() =>{
    return {
        type:REMOVE_PRODUCT
    }
}