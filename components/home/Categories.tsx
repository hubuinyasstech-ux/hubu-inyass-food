import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-semibold text-orange-500">Popular Categories</p>

          <h2 className="mt-2 text-4xl font-bold">Browse by Category</h2>

          <p className="mt-4 text-gray-600">
            Choose from our delicious food categories.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
