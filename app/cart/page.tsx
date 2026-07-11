"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-orange-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="mb-10 text-4xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />

                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>

                      <p className="text-orange-500 font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded bg-gray-200 px-3 py-1"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded bg-gray-200 px-3 py-1"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded bg-red-500 px-4 py-2 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

              <button className="mt-5 rounded-lg bg-orange-500 px-8 py-3 text-white hover:bg-orange-600">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
