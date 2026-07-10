import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-gray-500 py-20 text-white">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500">
          <Mail size={40} />
        </div>

        <h2 className="mt-8 text-4xl font-bold">Subscribe to Our Newsletter</h2>

        <p className="mt-4 text-lg text-gray-300">
          Get exclusive discounts, new restaurant updates, and special offers
          delivered directly to your inbox.
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-xl px-6 py-4 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
