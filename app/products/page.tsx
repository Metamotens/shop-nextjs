import { Product } from "meta/libs/models/product";
import Image from "next/image";
import Link from "next/link";

async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();
  return data as Product[];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="w-full grid grid-cols-4 p-20 gap-12">
      {products.map((product) => (
        <article
          key={product.id}
          className="flex flex-col items-center bg-white rounded-lg p-4 space-y-4 border hover:scale-105 transition-transform"
        >
          <Image
            className="bg-white rounded-t-lg mx-auto my-4 w-[150px] h-[200px]"
            src={product.image}
            alt={product.title}
            width={200}
            height={300}
            priority
          />
          <div className="flex flex-col justify-between space-y-4 pb-2 w-full">
            <span className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden">{product.title}</span>
            <span className="text-gray-500 text-center text-2xl">{product.price}€</span>
            <Link
              href={`/products/${product.id}`}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-center"
            >
              Details
            </Link>
          </div>
        </article>
      ))}
    </main>
  );
}
