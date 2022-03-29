import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';

const initialState = {
  notes: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {},
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
