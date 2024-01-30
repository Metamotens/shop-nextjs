"use client";

import { Product } from "meta/lib/models/product";
import { add } from "meta/lib/redux/reducers/cart-slice";
import { useAppDispatch } from "meta/lib/redux/store";

interface Props {
  product: Product;
  quantity: number;
}

export const AddButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(add(product));
  };

  return (
    <button
      type="button"
      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      onClick={handleButton}
    >
      Add to cart
    </button>
  );
};
