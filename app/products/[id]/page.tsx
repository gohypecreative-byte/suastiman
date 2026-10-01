import { ProductDetailsClient } from "./ProductDetailsClient";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">
          <ProductDetailsClient id={resolvedParams.id} />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
