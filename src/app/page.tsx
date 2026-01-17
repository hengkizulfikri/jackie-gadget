import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";


export default function Home() {
  return (
   <>
    <Navbar />
    <main>
      <Hero />
      <Trust />
      <Products />
      <WhyUs />
      <CTA />
      <FAQ />
    </main>
      <Footer />
      <WhatsAppFloating />
   </>
  );
}
