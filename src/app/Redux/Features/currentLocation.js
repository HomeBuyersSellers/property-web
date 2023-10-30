import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    loading:false,
    location:null,
    error:null
}
const locationSlice = createSlice({
  name: 'currentLocation',
  initialState, 
  reducers: {
    setLocation: (state, action) => {
        state.location = action.payload;
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
  },
});

export const { setLocation , setLoading ,setError} = locationSlice.actions;
export default locationSlice.reducer;
