import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div>
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
