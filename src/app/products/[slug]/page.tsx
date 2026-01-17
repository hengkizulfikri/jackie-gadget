
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductClient from "@/app/products/[slug]/ProductClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return <ProductClient product={product} />;
}
