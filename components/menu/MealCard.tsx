"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Meal = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
};

type Props = {
  meal: Meal;
};

export default function MealCard({ meal }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-500">
          {meal.category}
        </span>

        <h3 className="mt-3 text-xl font-bold">{meal.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <span>{meal.rating}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">
            ${meal.price.toFixed(2)}
          </span>

          <button
            onClick={() => {
              addToCart({
                id: meal.id,
                name: meal.name,
                image: meal.image,
                price: meal.price,
              });

              alert(`${meal.name} added to cart!`);
            }}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
