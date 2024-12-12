import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for fetching content
export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/content');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  items: [],
  featured: [],
  selectedItem: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    selectContent: (state, action) => {
      state.selectedItem = action.payload;
    },
    clearSelectedContent: (state) => {
      state.selectedItem = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.featured = action.payload.filter(item => item.featured);
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { 
  selectContent, 
  clearSelectedContent 
} = contentSlice.actions;

export default contentSlice.reducer;