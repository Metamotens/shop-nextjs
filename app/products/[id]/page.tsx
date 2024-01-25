import { Product } from "meta/libs/models/product";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.API_URL}/products/${id}`);
  const data = await res.json();
  return data as Product;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <main className="flex min-h-screen flex-col">
      <div key={product.id}>{product.title}</div>
    </main>
  );
}
