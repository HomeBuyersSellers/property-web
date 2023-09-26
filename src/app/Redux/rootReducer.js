import { combineReducers } from '@reduxjs/toolkit';
import localeReducer from './Features/localeSlice'; 

const rootReducer = combineReducers({
    locale: localeReducer,
});

export default rootReducer;