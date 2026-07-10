import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Abibat Akintobi",
    image: "/images/users/user1.avif",
    review:
      "Food arrived hot and fresh. The delivery was super fast and the ordering process was easy.",
  },
  {
    name: "Adisa Kabiru",
    image: "/images/users/user2.avif",
    review:
      "Excellent service! I love the restaurant options and the secure payment process.",
  },
  {
    name: "Hamazat Jabir",
    image: "/images/users/user3.webp",
    review:
      "One of the best food delivery platforms I've used. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-semibold text-orange-500">Testimonials</p>

          <h2 className="mt-2 text-4xl font-bold">What Our Customers Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((user) => (
            <div
              key={user.name}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="mb-6 text-gray-600 italic">&ldquo;{user.review}&rdquo;</p>

              <div className="flex items-center gap-4">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <h3 className="font-semibold">{user.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
