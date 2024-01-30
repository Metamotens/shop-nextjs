"use client";

import { useAppSelector } from "meta/lib/redux/store";
import { RemoveButton } from "./remove-button";
import { CartItem } from "meta/lib/models/cart";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "meta/lib/redux/reducers/cart-slice";

export const CartItems = () => {
  const items = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  if (!items.length) {
    return (
      <h1 className="text-2xl font-bold mx-auto p-10">Your cart is empty</h1>
    );
  }

  return (
    <>
      {items.map((item: CartItem) => (
        <div
          key={item.product.id}
          className="flex w-full justify-between items-center"
        >
          <span>
            {item.product.title} x {item.quantity}
          </span>
          <RemoveButton product={item.product} />
        </div>
      ))}
      <hr />
      <div className="flex flex-col">
        <span>Total items: {totalItems}</span>
        <span>Total price: {totalPrice}€</span>
      </div>
    </>
  );
};
