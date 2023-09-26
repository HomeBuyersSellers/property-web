import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    lang:""
  };

export const localeReducer = createSlice({
    name:'locale',
    initialState,
    reducers:{
        setLocaleReducer:(state,action)=>{
          state.locales = "en"
        }
    }
})
export const { setLocaleReducer } = localeReducer.actions;
export default localeReducer.reducer;