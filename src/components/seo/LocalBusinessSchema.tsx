import { SITE } from "@/constants/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${SITE.whatsapp}`,
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
