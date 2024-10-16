import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token')

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!token,
    userId: null,
    username: null,
    token: null,
    isAdmin: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
      state.username = null;
      state.isAdmin = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
