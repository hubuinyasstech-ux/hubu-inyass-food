import Image from "next/image";
import Link from "next/link";
import { Clock3, Heart, Star } from "lucide-react";

type Props = {
  restaurant: {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    deliveryTime: string;
    category: string;
    isOpen: boolean;
  };
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link href={`/restaurants/${restaurant.id}`}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-56 w-full">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover"
          />

          <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
            <Heart size={18} />
          </button>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{restaurant.name}</h3>

            <span className="text-sm font-medium text-green-600">
              {restaurant.isOpen ? "Open" : "Closed"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
            {restaurant.rating} ({restaurant.reviews}+)
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock3 size={16} />
            {restaurant.deliveryTime}
          </div>

          <p className="text-sm text-gray-500">{restaurant.category}</p>
        </div>
      </div>
    </Link>
  );
}
