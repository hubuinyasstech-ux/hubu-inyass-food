import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
              0
            </span>
          </button>

          <button>
            <User className="h-6 w-6" />
          </button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
