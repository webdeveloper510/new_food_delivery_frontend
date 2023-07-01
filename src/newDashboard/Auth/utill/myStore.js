
import storeReducer from "../reducer/index";
import { createStore } from "redux";


const myStore = createStore(storeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default myStore;