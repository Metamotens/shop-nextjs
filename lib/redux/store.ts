import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducer = {
    cart: cartReducer,
};

export const store = configureStore({
    reducer,
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;