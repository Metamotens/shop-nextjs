import { Product } from "meta/lib/models/product";
import { remove } from "meta/lib/redux/reducers/cart-slice";
import { useAppDispatch } from "meta/lib/redux/store";

interface Props {
  product: Product;
}

export const RemoveButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(remove(product));
  };

  return (
    <button
      type="button"
      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      onClick={handleButton}
    >
      Remove
    </button>
  );
};
