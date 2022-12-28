import { combineReducers } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'

// import globalReducer from './global';
import calendarReducer from './calendar';
// import dataReducer from './data';

const rootReducer = combineReducers({
    // globalReducer,
    calendarReducer,
    // dataReducer
})

const store = createStore(rootReducer)
export default store;