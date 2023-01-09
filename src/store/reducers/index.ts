import { combineReducers } from 'redux';

// import globalReducer from './global';
import calendarReducer from './calendar';
// import dataReducer from './data';
// import userReducer from './auth';

const reducers = combineReducers({
    // globalReducer,
    calendarReducer,
    // dataReducer,
    // userReducer
})
export default reducers;