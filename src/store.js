import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import transReducer from "./app/reducers";

const store = createStore(transReducer, composeWithDevTools());

export default store;