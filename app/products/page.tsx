import { Product } from "meta/libs/models/product";
import Link from "next/link";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();
  return data as Product[];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col">
      {products.map((product) => (
        <Link key={product.id} href={`products/${product.id}`}>
          {product.title}
        </Link>
      ))}
    </main>
  );
}
