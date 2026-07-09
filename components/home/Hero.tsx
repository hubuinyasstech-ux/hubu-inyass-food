import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-orange-50 to-white">
      <div className="container mx-auto grid min-h-[90vh] items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🚀 Fast Delivery in 30 Minutes
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Delicious Food,
            <br />
            <span className="text-orange-500">Delivered Fast</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Order from your favourite restaurants and enjoy hot, fresh meals
            delivered right to your doorstep anytime.
          </p>

          {/* Search */}
          <div className="mt-10 flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="flex items-center px-5">
              <Search className="text-gray-400" size={22} />
            </div>

            <input
              type="text"
              placeholder="Search food or restaurant..."
              className="flex-1 py-4 pr-4 outline-none"
            />

            <button className="bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl">
              🍽 Order Now
            </button>

            <button className="group flex items-center gap-2 rounded-xl border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white">
              Explore Menu
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-500">
              Popular:
            </span>

            {["Pizza", "Burger", "Jollof", "Chicken", "Drinks"].map((item) => (
              <span
                key={item}
                className="cursor-pointer rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-500 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero/hero-food.avif"
            alt="Food Delivery"
            width={600}
            height={600}
            priority
            className="h-auto w-full max-w-xl"
          />

          {/* Discount Card */}
          <div className="absolute left-0 top-10 rounded-2xl bg-white p-5 shadow-2xl">
            <p className="text-sm text-gray-500">Today&#39;s Offer</p>

            <h3 className="text-3xl font-bold text-orange-500">30% OFF</h3>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-8 right-0 rounded-2xl bg-white p-5 shadow-2xl">
            <h3 className="font-bold">Jollof Rice & Chicken</h3>

            <p className="mt-1 text-sm text-gray-500">
              ⭐ 4.8 &bull; 20&ndash;30 mins
            </p>

            <button className="mt-3 rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
