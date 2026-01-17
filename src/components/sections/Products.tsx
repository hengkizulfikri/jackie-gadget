import Image from "next/image";
import { products } from "@/data/products";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-neutral-800 py-20 px-6 text-white scroll-mt-24"
    >
      {/* Divider atas */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Produk Unggulan Jackie Gadget
          </h2>
          <p className="mt-4 text-neutral-300">
            Kami menyediakan perangkat teknologi original dengan kualitas
            terbaik dan harga transparan.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="group">
              {/* Image */}
              <div className="relative h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    {product.description}
                  </p>
                </div>

                <Button
                  href={`/products/${product.slug}`}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Lihat Detail →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
