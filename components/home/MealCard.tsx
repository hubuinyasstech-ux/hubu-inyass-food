import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Meal = {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  category?: string;
};

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
          className="object-cover"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-bold">{meal.name}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          {meal.rating} ({meal.reviews}+)
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-500">
            ₦{meal.price.toLocaleString()}
          </span>

          <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
