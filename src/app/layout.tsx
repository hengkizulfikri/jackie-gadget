import type { Metadata, Viewport } from "next";
import { SITE } from "@/constants/site";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Chatbot from "@/components/Chatbot";

<Chatbot />;

import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Toko Gadget Terpercaya`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png", // optional
  },
  
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <LocalBusinessSchema />
        {children}
        <WhatsAppFloating />
        <Chatbot />
      </body>
    </html>
  );
}