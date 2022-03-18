import { combineReducers } from "redux";
import {productReducer,detailReducer} from './reducer';

export const reducer =combineReducers({
    productReducer,
    detailReducer,
})