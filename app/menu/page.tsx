import { meals } from "@/data/meals";
import MealCard from "@/components/menu/MealCard";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="mb-12 text-center text-5xl font-bold">Our Menu</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </main>
  );
}
