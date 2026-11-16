import { redirect } from "next/navigation";
import { getProductById, PRODUCT_CATEGORIES } from "@/lib/products";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const slug = category.toLowerCase().trim();

  // 1. If it's an old product ID (e.g. /products/prod-rudraksha-108), redirect to its new canonical route
  const product = getProductById(slug);
  if (product) {
    redirect(product.href);
  }

  // 2. If it's a known category (e.g. /products/tulsi), redirect to /products?category=tulsi
  const isCategory = PRODUCT_CATEGORIES.some((c) => c.id === slug);
  if (isCategory) {
    redirect(`/products?category=${slug}`);
  }

  // 3. Fallback to main products page
  redirect("/products");
}
