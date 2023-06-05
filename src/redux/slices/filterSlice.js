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
    setGategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortVariant(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setGategoryId, setSortVariant } = filterSlice.actions;

export default filterSlice.reducer;
