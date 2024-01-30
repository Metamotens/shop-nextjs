import {
  PayloadAction,
  createSelector,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import { CartItem } from "meta/lib/models/cart";
import { Product } from "meta/lib/models/product";
import { RootState } from "../store";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cartItems") || JSON.stringify([])),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state: CartState, { payload }: PayloadAction<Product>) => {
      const item = state.items.find(
        (item: CartItem) => item.product.id === payload.id
      ) as CartItem;

      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          product: payload,
          quantity: 1,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(current(state.items)));
    },
    remove: (state: CartState, { payload }) => {
      state.items = state.items.filter((el) => el.product.id !== payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (items: CartItem[]) =>
    items
      .reduce(
        (total: number, item: CartItem) =>
          total + item.product.price * item.quantity,
        0
      )
      .toFixed(2)
);

export const selectTotalItems = createSelector(
  [selectCartItems],
  (items: CartItem[]) =>
    items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
);

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
