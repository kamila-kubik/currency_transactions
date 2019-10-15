import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import transReducer from './app/reducers';

const rootReducer = combineReducers({ transReducer, form: formReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
