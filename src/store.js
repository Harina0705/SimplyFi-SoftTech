import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import contentReducer from './slices/ContentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
 })
});

export default store;