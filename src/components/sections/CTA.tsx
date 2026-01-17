import { SITE } from "@/constants/site";
import Button from "@/components/ui/Button";
export default function CTA() {
  return (
    <section className="relative bg-neutral-900 py-24 px-6 text-white text-center">
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Butuh Rekomendasi Gadget?
        </h2>
        <p className="mt-4 text-neutral-300">
          Konsultasi gratis sekarang dan dapatkan gadget terbaik sesuai
          kebutuhanmu.
        </p>

        <Button
          href={`https://wa.me/${SITE.whatsapp}`}
          variant="whatsapp"
          size="lg"
          className="mt-8"
        >
          💬 Hubungi Kami
        </Button>
      </div>
    </section>
  );
}
