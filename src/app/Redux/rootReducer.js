import { combineReducers } from '@reduxjs/toolkit';
import localeReducer from './Features/localeSlice'; 
import authReducer  from './Features/authSlice';

const rootReducer = combineReducers({
    locale: localeReducer,
    authUser:authReducer
});

export default rootReducer;