import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './pizzasOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  extraReducers: builder => {
    builder
      // fetch all items
      .addCase(fetchPizzas.pending, handlePending)
      .addCase(fetchPizzas.rejected, handleRejected)
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      });
  },
});

export default pizzasSlice.reducer;
