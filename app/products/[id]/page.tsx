import Image from "next/image";
import Link from "next/link";
import { Product } from "meta/lib/models/product";
import { AddButton } from "meta/lib/components/ui/add-button";

async function getProduct(id: string): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
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
    <section className="flex items-center justify-center mt-32">
      <article className="flex flex-row bg-white w-2/3 p-4">
        <Image
          className="bg-white rounded-t-lg mx-auto my-4 w-[200px] h-[350px]"
          src={product.image}
          alt={product.title}
          width={300}
          height={400}
          priority
        />
        <div className="w-1/2 space-y-6 grid place-content-center">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-lg font-bold">{product.price}€</p>
          <AddButton product={product} quantity={1} />
          <Link
            href={`..`}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-center"
          >
            Go back
          </Link>
        </div>
      </article>
    </section>
  );
}
