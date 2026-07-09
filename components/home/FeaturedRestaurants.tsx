import { restaurants } from "@/data/restaurants";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRestaurants() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="font-semibold text-orange-500">Popular Restaurants</p>

            <h2 className="text-4xl font-bold">Featured Restaurants</h2>
          </div>

          <button className="text-orange-500 hover:underline">
            View All →
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
