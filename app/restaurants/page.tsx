import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-5xl font-bold">Restaurants</h1>

        <div className="mt-12">
          <FeaturedRestaurants />
        </div>
      </div>
    </main>
  );
}
