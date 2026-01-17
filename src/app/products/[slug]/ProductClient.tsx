"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/constants/site";
import Link from "next/link";
import { LiaHomeSolid } from "react-icons/lia";

import { smartphones } from "@/data/smartphones";
import { laptops } from "@/data/laptops";
import { pcs } from "@/data/pcs";
import { perangkat } from "@/data/perangkat";


type Product = {
  name: string;
  slug: string;
  description: string;
};

type ProductItem = {
  name: string;
  image: string;
  desc: string;
};

type ProductBrand = {
  brand: string;
  items: ProductItem[];
};


const DATA_MAP: Record<string, ProductBrand[]> = {
  smartphone: smartphones,
  laptop: laptops,
  pc: pcs,
  aksesoris: perangkat,
};

export default function ProductClient({ product }: { product: Product }) {
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const data = DATA_MAP[product.slug];
  if (!data) return null;

  const brands = ["all", ...data.map((b) => b.brand)];

  return (
    <section className="bg-neutral-900 text-white py-20 px-6">

      <div className="w-full mt-8 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Menjaga tetap sejajar konten tengah */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-all hover:opacity-80"
          >
            <span className="text-lg font-medium">Kembali</span>
            <LiaHomeSolid className="h-8 w-8 text-amber-500" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-neutral-300">{product.description}</p>
        </div>

        {/* FILTER BRAND */}
        <div className="flex gap-3 flex-wrap">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-4 py-2 rounded-lg text-sm border transition
                ${
                  activeBrand === brand
                    ? "bg-amber-500 text-black border-amber-500"
                    : "border-white/10 hover:border-amber-500/40"
                }`}
            >
              {brand === "all" ? "Semua" : brand}
            </button>
          ))}
        </div>

        {/* LIST ITEM */}
        {data
          .filter((b) => activeBrand === "all" || b.brand === activeBrand)
          .map((brand) => (
            <div key={brand.brand}>
              <h2 className="mb-6 text-2xl font-semibold">{brand.brand}</h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brand.items.map((item: ProductItem) => {
                  const message = encodeURIComponent(
                    `Halo, saya tertarik dengan ${item.name}. Apakah masih tersedia?`
                  );

                  return (
                    <div
                      key={item.name}
                      className="rounded-xl bg-neutral-800 p-5 border border-white/10 hover:border-amber-400 hover:-translate-y-1 transition"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />

                      <h3 className="mt-4 font-medium">{item.name}</h3>
                      <p className="mt-2 text-sm">{item.desc}</p>

                      <a
                        href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full justify-center rounded-lg border border-green-500 px-4 py-2 text-sm font-medium text-green-400 hover:bg-green-500/50 hover:text-white transition"
                      >
                        Tanya via WhatsApp
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
