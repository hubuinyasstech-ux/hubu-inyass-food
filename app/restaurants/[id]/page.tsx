import { restaurants } from "@/data/restaurants";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RestaurantDetails({ params }: Props) {
  const { id } = await params;

  const restaurant = restaurants.find((item) => item.id.toString() === id);

  if (!restaurant) {
    notFound();
  }

  return (
    <main className="container mx-auto px-6 py-20">
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        width={1200}
        height={500}
        className="h-96 w-full rounded-2xl object-cover"
      />

      <h1 className="mt-8 text-4xl font-bold">{restaurant.name}</h1>

      <p className="mt-4 text-gray-600">Category: {restaurant.category}</p>

      <p className="mt-2">
        ⭐ {restaurant.rating} ({restaurant.reviews} reviews)
      </p>

      <p className="mt-2">Delivery Time: {restaurant.deliveryTime}</p>

      <p className="mt-8 text-lg text-gray-700">
        Delicious meals delivered fresh and fast to your doorstep.
      </p>
    </main>
  );
}
