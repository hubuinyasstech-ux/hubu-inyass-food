import { meals } from "@/data/meals";
import MealCard from "./MealCard";

export default function PopularMeals() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="font-semibold text-orange-500">Customer Favorites</p>

            <h2 className="text-4xl font-bold">Popular Meals</h2>
          </div>

          <button className="text-orange-500 hover:underline">
            View All →
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
