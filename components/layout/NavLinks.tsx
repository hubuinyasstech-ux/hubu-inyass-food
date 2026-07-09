"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-700 hover:text-orange-500 transition"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
