const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярності',
    value: 'rating',
  },
  search: '',
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
    setSearchQuery(state, { payload }) {
      state.search = payload;
    },
  },
});

export const { setGategoryId, setSortVariant, setSearchQuery } =
  filterSlice.actions;

export default filterSlice.reducer;
