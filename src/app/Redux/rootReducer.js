import { combineReducers } from '@reduxjs/toolkit';
import authReducer  from './Features/authSlice';
import commonSlice from "./Features/commonSlice";
import currentLocation from './Features/currentLocation';

const rootReducer = combineReducers({
    pageContext:commonSlice,
    authUser:authReducer,
    currentLocation:currentLocation,
});

export default rootReducer;