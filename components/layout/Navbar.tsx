"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button>
            <User className="h-6 w-6" />
          </button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
