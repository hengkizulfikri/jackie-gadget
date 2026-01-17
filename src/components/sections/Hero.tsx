import Image from "next/image";
import { SITE } from "@/constants/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        pt-28
        pb-40
        md:pb-40
        lg:pb-48
        flex
        items-center
        justify-center
        px-6
        text-center
        text-white
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero-gadget.png"
          alt="Toko gadget premium Jackie Gadget"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content */}
      <div className="relative max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold md:text-5xl">
          Toko Gadget Premium untuk Kebutuhan Digital Anda
        </h1>

        <p className="text-neutral-200 md:text-lg">
          Smartphone, Laptop, PC, dan Aksesoris Original. Harga Transparan •
          Garansi Resmi • Fast Response
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
          <Button
            href={`https://wa.me/${SITE.whatsapp}`}
            variant="whatsapp"
            size="lg"
            ariaLabel="Konsultasi gadget via WhatsApp"
          >
            💬 Konsultasi via WhatsApp
          </Button>

          <Button href="#products" variant="outline" size="lg">
            📦 Lihat Produk
          </Button>
        </div>
      </div>
    </section>
  );
}
