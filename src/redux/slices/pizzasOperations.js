import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644fc5e0ba9f39c6ab6c0206.mockapi.io/';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ category, sort }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/items?${category}&${sort}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
