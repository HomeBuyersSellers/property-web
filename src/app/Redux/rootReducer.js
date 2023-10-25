import { combineReducers } from '@reduxjs/toolkit';
import authReducer  from './Features/authSlice';

const rootReducer = combineReducers({
    authUser:authReducer
});

export default rootReducer;