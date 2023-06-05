const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярності',
    value: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGategoryId(state, { payload }) {
      state.categoryId = payload;
    },
    setSortVariant(state, { payload }) {
      state.sort = payload;
    },
  },
});

export const { setGategoryId, setSortVariant } = filterSlice.actions;

export default filterSlice.reducer;
