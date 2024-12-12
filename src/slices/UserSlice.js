import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  profile: {
    name: '',
    email: '',
    avatar: ''
  },
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.profile = {
        name: '',
        email: '',
        avatar: ''
      };
    }
  }
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  updateProfile, 
  logout 
} = userSlice.actions;

export default userSlice.reducer;