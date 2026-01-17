import { SITE } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Divider */}
      <div className="h-px bg-white/10" />

      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{SITE.name}</h3>

          <p className="text-sm leading-relaxed text-neutral-400">
            {SITE.description}
          </p>

          <p className="text-xs text-neutral-500">
            Trusted gadget store • Original products • Fast response
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Navigasi</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-amber-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-amber-400 transition">
                Produk
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Kontak</h4>

          <p className="text-sm text-neutral-400">WhatsApp:</p>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="mt-1 inline-block text-sm text-amber-400 hover:underline"
          >
            +{SITE.whatsapp}
          </a>

          <p className="mt-4 text-xs text-neutral-500">
            Jam operasional: 09.00 – 21.00 WIB
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h4 className="mb-3 font-semibold text-white">Konsultasi Gratis</h4>

            <p className="text-sm text-neutral-400">
              Bingung pilih gadget? Konsultasi gratis via WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="
              inline-flex items-center justify-center
              rounded-xl bg-amber-500 px-5 py-3
              text-sm font-medium text-black
              hover:bg-amber-400 transition
            "
          >
            💬 Chat WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
