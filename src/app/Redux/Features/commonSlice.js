import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const commonSlice = createSlice({
  name: 'pageContext',
  initialState, 
  reducers: {
    setPageTitle: (state, action) => {
      state.pageContext = {title:action.payload};
    },
  },
});

export const { setPageTitle} = commonSlice.actions;
export default commonSlice.reducer;
