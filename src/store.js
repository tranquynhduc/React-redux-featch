import { createStore } from "redux";
import { reducer } from './redux/index';

const store= createStore(reducer,{});

export default store;
