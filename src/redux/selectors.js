export const selectCategoryId = state => state.filter.categoryId;

export const selectSortType = state => state.filter.sort;

export const selectSearchQuery = state => state.filter.search;

export const selectCartItems = state => state.cart.items;

export const selectCartTotalPrice = state => state.cart.totalPrice;

export const selectCartTotalCount = state => state.cart.totalCount;
