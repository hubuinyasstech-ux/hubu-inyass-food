import { Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Food",
    description: "Search from hundreds of restaurants and cuisines near you.",
  },
  {
    icon: ShoppingBag,
    title: "Place Order",
    description: "Choose your favourite meals and checkout securely.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Track your order in real time until it arrives at your door.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-15">
          <p className="text-orange-500 font-semibold">How It Works</p>
          <h2 className="text-4xl font-bold mt-2">
            Order Food in 3 Easy Steps
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <step.icon className="text-orange-500" size={30} />
              </div>

              <h3 className="text-xl font-bold">{step.title}</h3>

              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
