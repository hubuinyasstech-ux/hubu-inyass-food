import { Bike, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Bike,
    title: "Fast Delivery",
    description: "Get your food delivered within 30 minutes.",
  },
  {
    id: 2,
    icon: Star,
    title: "Quality Food",
    description: "Fresh ingredients from trusted restaurants.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Pay safely with trusted payment methods.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
