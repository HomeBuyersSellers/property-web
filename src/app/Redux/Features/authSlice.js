import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  currentUser: null,
};

export const authReducer = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { saveUser, setLoading, resetLoading } = authReducer.actions;

export default authReducer.reducer;
