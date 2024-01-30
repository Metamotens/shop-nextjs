import { CartItems } from "meta/lib/components/ui/cart-items";

export default function CartPage() {
  return (
    <section className="flex items-center justify-center mt-32">
      <article className="flex flex-col space-y-5 bg-white w-2/3 p-4">
        <h1 className="text-2xl font-bold">Cart Items</h1>
        <hr />
        <CartItems />
      </article>
    </section>
  );
}
