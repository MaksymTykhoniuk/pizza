const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  totalPrice: 0,
  items: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push(action.payload);
      }

      state.totalCount += 1;
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    deleteItem(state, action) {
      const index = state.items.findIndex(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      state.items.splice(index, 1);

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    incrementItemCount(state, action) {
      const findItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      if (findItem) {
        findItem.count += 1;
      }

      state.totalCount += 1;
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    decrementItemCount(state, action) {
      const findItem = state.items.find(
        item =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
      );

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalCount -= 1;
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearItems,
  incrementItemCount,
  decrementItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
